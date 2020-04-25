import * as React from 'react'

import styles from '../../index.module.css'
import useReactiveTable from '../../hooks/useReactiveTable'
import { TableHeadElement } from '../../types'

const TableHeader: React.FC = ({ children }) => {
  const { generateColumns, table } = useReactiveTable()

  React.useEffect(() => {
    console.log('GENERATING COLUMNS')
    generateColumns(React.Children.count(children))
  }, [])

  const computedStyles: React.CSSProperties = {
    minWidth: table.headerMinWidth
  }

  const tableHasComputedColumns = table.columns.length > 0

  if (!tableHasComputedColumns) return null

  return (
    <div className={styles['td-header']} style={computedStyles}>
      {React.Children.map(children, (child: TableHeadElement, i: number) =>
        React.cloneElement(child, {
          ...child.props,
          columnIndex: i,
          key: `${i}-th`,
          style: {
            flex: `${table.columns[i].width} 0 auto`,
            width: `${table.columns[i].width}px`,
            maxWidth: `${table.columns[i].width}px`
          }
        }))}
    </div>
  )
}

export default TableHeader
