// eslint-disable-next-line no-unused-vars
import { clamp } from './mathUtils'
import { Column, Table } from '../types'
import { DEFAULT_MIN_COL_SIZE } from '../components/Table/Table'

/** Calculates the header max-width, the header must be the sum of the width of all of its childs */
export function calculateHeaderWidth(columns: Column[]) {
  let width = 0
  columns.forEach((col) => {
    width += col.width
  })

  return width
}

/** Calculates the initial width for each column based on the table width and number of columns */
export function calculateInitialColumnWidth(width: number, numCols: number) {
  return (width / numCols) - (numCols - 1)
}

/**
 * TODO: When resizing less than table width ajust colums to fit the table
 */

/** Recalculates the columns width when resizing them */
export function recalculateColumnsSize(table: Table, columnToChangeIndex: number, resizedWidth: number) {
  const { columns } = table

  return columns.map((_col, i) => {
    if (i === columnToChangeIndex) {
      return {
        ...columns[i],
        width: clamp(resizedWidth, resizedWidth + 1, DEFAULT_MIN_COL_SIZE)
      }
    }
    return {
      ...columns[i]
    }
  })
}

/** Recalculates the columns width when resizing them with a fixed table width */
export function recalculateColumnsSizeWithFixedWidth(table: Table, columnToChangeIndex: number, resizedWidth: number) {
  const { columns, width: tableWidth } = table

  return columns.map((_col, i) => {
    if (i === columnToChangeIndex) {
      return {
        ...columns[i],
        width: clamp(resizedWidth, resizedWidth + 1, DEFAULT_MIN_COL_SIZE)
      }
    }

    const initialColWidth = calculateInitialColumnWidth(tableWidth, columns.length)
    // the diffrence between the initial width and the new resized width
    const initialColWidthdDiff = initialColWidth - resizedWidth

    return {
      ...columns[i],
      width: _col.width + (initialColWidthdDiff / (columns.length - 1))
    }
  })
}
