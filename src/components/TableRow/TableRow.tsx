import * as React from 'react'

import styles from '../../index.module.css'
import { TableRowProps } from '../../types'
import useReactiveTable from '../../hooks/useReactiveTable'

const TableRow: React.FC<TableRowProps> = ({ children, ...other }) => {
  const { table } = useReactiveTable()

  // This should fail at the parent, but since the components are dyanmic and
  // can be rearanged, we need to make sure it wont crash
  const tableHasComputedColumns = table.columns && table.columns.length > 0
  if (!tableHasComputedColumns) return null

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
