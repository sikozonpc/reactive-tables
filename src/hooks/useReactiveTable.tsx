import React, { useContext, useState } from 'react'
import { recalculateColumnsSize, calculateHeaderWidth, calculateInitialColumnWidth, recalculateColumnsSizeWithFixedWidth } from '../utils/columnUtils'
import { Table, Column, UseReactiveTable, TableProviderProps } from '../types'

// @ts-ignore
const TableContext = React.createContext()

export const TableProvider: React.FC<TableProviderProps> = ({ children, tableWidth, resizeableColumns, horizontalSlide }) => {
  const [table, setTable] = useState<Table>({
    columns: [],
    width: tableWidth
  })

  /** Column resize function handler */
  const columnResizeHandler = (columnIndex: number, width: number) => {
    if (!resizeableColumns) return

    const col = table.columns[columnIndex]
    if (!col) {
      throw new Error(`column with index of ${columnIndex} does not exist in table`)
    }

    const actionType = horizontalSlide ? 'infite-table-width' : 'fixed-table-width'

    const resizeHandler = {
      'fixed-table-width': recalculateColumnsSizeWithFixedWidth,
      'infite-table-width': recalculateColumnsSize
    }

    const recalculatedColumns = resizeHandler[actionType](table, columnIndex, width)

    setTable((oldTable) => ({
      ...oldTable,
      width: calculateHeaderWidth(recalculatedColumns),
      columns: recalculatedColumns
    }))
  }

  /** Generates the columns dynamic data based on the number of columns */
  const generateColumns = (count: number) => {
    const cols: Column[] = []

    const columnWidth = calculateInitialColumnWidth(table.width, count)

    for (let i = 0; i < count; i++) {
      cols.push({
        width: columnWidth
      })
    }

    setTable({
      ...table,
      width: calculateHeaderWidth(cols),
      columns: cols
    })
  }

  const loadTable = (table: Table) => {
    setTable(table)
  }

  return (
    <TableContext.Provider value={{ table, columnSizeHandler: columnResizeHandler, generateColumns, loadTable }}>
      {children}
    </TableContext.Provider>
  )
}

const useReactiveTable = (): UseReactiveTable => {
  const ctx: UseReactiveTable = useContext(TableContext)

  if (!ctx) {
    throw new Error('`useReactiveTable` must be used within a TableProvider')
  }

  return ctx
}

export default useReactiveTable
