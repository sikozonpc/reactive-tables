import React, { useContext, useState } from 'react'

interface Column {
  width: number
}

export interface Table {
  columns: Column[]
  headerMinWidth: number
}

interface UseReactiveTable {
  table: Table
  loadTable: (table: Table) => void,
  columnSizeHandler: (columnIndex: number, width: number) => void
  generateColumns: (count: number) => void
}

const initialColumnSize = 200
const minColumnSize = 36
const defaultHeaderMinWidth = 650

export const calculateHeaderWidth = (columns: Column[]) => {
  let width = 0
  columns.forEach((col) => {
    width += col.width
  })

  return width
}

export const recalculateColumnsSize = (columns: Column[], columnToChangeIndex: number, width: number) => {
  return columns.map((_col, i) => {
    if (i === columnToChangeIndex) {
      return {
        ...columns[i],
        width: width <= minColumnSize ? minColumnSize : width
      }
    }
    return {
      ...columns[i]
    }
  })
}

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
