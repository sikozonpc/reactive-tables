import * as React from 'react'
import styles from '../index.module.css'

const TableRow: React.FC = ({ children }) => {
  return <div className={styles.tr}>{children}</div>
}

export default TableRow
