import * as React from 'react'

import styles from '../../index.module.css'
// eslint-disable-next-line no-unused-vars
import { Table } from '../../hooks/useReactiveTable'

interface TableRowProps extends React.HTMLAttributes<HTMLDivElement> {
  table: Table
}

const TableRow: React.FC<TableRowProps> = ({ children, table }) => {
  return (
    <div className={styles.tr}>
      {React.Children.map(children, (child: TableRowElement, i: number) =>
        React.cloneElement(child, {
          ...child.props,
          key: `${i}-td`,
          style: {
            flex: `${table.columns[i].width} 0 auto`,
            width: `${table.columns[i].width}px`,
            maxWidth: `${table.columns[i].width}px`
          }
        }))}
    </div>
  )
}

export type TableRowElement = React.ReactElement<TableRowProps, typeof TableRow>

export default TableRow
