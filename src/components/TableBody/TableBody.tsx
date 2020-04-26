import * as React from 'react'

import styles from '../../index.module.css'
import useReactiveTable from '../../hooks/useReactiveTable'
import { TableRowElement } from '../TableRow/TableRow'

const TableBody: React.FC = ({ children }) => {
  const { table } = useReactiveTable()

  const computedStyles: React.CSSProperties = {
    minWidth: table.headerMinWidth
  }

  const tableHasComputedColumns = table.columns.length > 0

  if (!tableHasComputedColumns) return null

  return (
    <div className={styles['tb-body']} style={computedStyles}>
      {React.Children.map(children, (child: TableRowElement, i: number) =>
        React.cloneElement(child, {
          ...child.props,
          key: `${i}-td`
        }))}
    </div>
  )
}

export default TableBody
