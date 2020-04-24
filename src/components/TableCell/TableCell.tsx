import * as React from 'react'

import styles from '../../index.module.css'

const TableCell: React.FC = ({ children, ...other }) => {
  return <div className={styles.td} {...other}>{children}</div>
}

export default TableCell
