import * as React from 'react'
import styles from '../index.module.css'

export interface TableProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  size?: 'compact' | 'normal'
  hasResizeableColumns?: boolean
}

const Table: React.FC<TableProps> = ({ children }) => {
  return <div className={styles.table}>{children}</div>
}

export default Table
