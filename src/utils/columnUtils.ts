// eslint-disable-next-line no-unused-vars
import { clamp } from './mathUtils'
import { minColumnSize } from '../hooks/useReactiveTable'
import { Column } from '../types'

/** Calculates the header max-width, the header must be the sum of the width of all of its childs */
export const calculateHeaderWidth = (columns: Column[]) => {
  let width = 0
  columns.forEach((col) => {
    width += col.width
  })

  return width
}

/** Recalculates the columns width when resizing them */
export const recalculateColumnsSize = (columns: Column[], columnToChangeIndex: number, width: number) => {
  return columns.map((_col, i) => {
    if (i === columnToChangeIndex) {
      return {
        ...columns[i],
        width: clamp(width, width + 1, minColumnSize)
      }
    }
    return {
      ...columns[i]
    }
  })
}
