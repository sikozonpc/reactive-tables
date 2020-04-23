import * as React from 'react'
import styles from '../index.module.css'

const TableHead: React.FC = ({ children }) => {
  return <div className={styles.th}>{children}</div>
}

export default TableHead
