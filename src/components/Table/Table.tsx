import * as React from 'react'
import styles from '../../index.module.css'
import { TableProvider } from '../../hooks/useReactiveTable'
import { TableProps } from '../../types'

const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <TableProvider>
      <div className={styles.table}>
        {children}
      </div>
    </TableProvider>
  )
}

export default Table
