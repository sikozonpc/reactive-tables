import * as React from 'react'
import styles from '../index.module.css'

const TableHeader: React.FC = ({ children }) => {
  return <div className={styles['td-header']}>{children}</div>
}

export default TableHeader
