import * as React from 'react'

import styles from '../../index.module.css'
import { TableRowProps } from '../../types'

const TableRow: React.FC<TableRowProps> = ({ children, table, ...other }) => {
  return (
    <div className={styles.tr} {...other}>
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
