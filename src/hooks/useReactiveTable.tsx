import React, { useContext, useState } from 'react'
import { recalculateColumnsSize, calculateHeaderWidth } from '../utils/columnUtils'
import { Table, Column, UseReactiveTable } from '../types'

export const initialColumnSize = 200
export const minColumnSize = 36
export const defaultHeaderMinWidth = 650

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const TableContext = React.createContext()

export const TableProvider: React.FC = ({ children }) => {
  const [table, setTable] = useState<Table>({
    columns: [],
    headerMinWidth: defaultHeaderMinWidth
  })

  const columnSizeHandler = (columnIndex: number, width: number) => {
    const col = table.columns[columnIndex]
    if (!col) {
      throw new Error(`column with index of ${columnIndex} does not exist in table`)
    }

    const recalculatedColumns = recalculateColumnsSize(table.columns, columnIndex, width)

    setTable((oldTable) => ({
      ...oldTable,
      headerMinWidth: calculateHeaderWidth(recalculatedColumns),
      columns: recalculatedColumns
    }))
  }

  const generateColumns = (count: number) => {
    const cols: Column[] = []

    for (let i = 0; i < count; i++) {
      cols.push({
        width: initialColumnSize
      })
    }

    setTable({
      ...table,
      headerMinWidth: calculateHeaderWidth(cols),
      columns: cols
    })
  }

  const loadTable = (table: Table) => {
    setTable(table)
  }

  return (
    <TableContext.Provider value={{ table, columnSizeHandler, generateColumns, loadTable }}>
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
