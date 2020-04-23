import * as React from 'react'
import styles from '../index.module.css'

const TableBody: React.FC = ({ children }) => {
  return <div className={styles['tb-body']}>{children}</div>
}

export default TableBody
