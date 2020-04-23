import * as React from 'react'
import styles from '../index.module.css'

const TableCell: React.FC = ({ children }) => {
  return <div className={styles.td}>{children}</div>
}

export default TableCell
