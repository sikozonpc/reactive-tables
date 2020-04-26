import * as React from 'react'
import styles from '../../index.module.css'
import { TableProvider } from '../../hooks/useReactiveTable'
import { TableProps } from '../../types'

const Table: React.FC<TableProps> = ({ children, height, width }) => {
  const computedStyles: React.CSSProperties = {
    height: height || '100%',
    width: width ? `${width}px` : '100%'
  }

  return (
    <TableProvider>
      <div className={styles.table} style={computedStyles}>
        {children}
      </div>
    </TableProvider>
  )
}

export default Table
