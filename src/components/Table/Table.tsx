import * as React from 'react'
import styles from '../../index.module.css'
import { TableProvider } from '../../hooks/useReactiveTable'
import { TableProps } from '../../types'

export const DEFAULT_INITIAL_COL_SIZE = 200
export const DEFAULT_MIN_COL_SIZE = 36
export const DEFAULT_TABLE_MIN_WIDTH = 650

/**
 * Wrapper for all of the other table components
 */
const Table: React.FC<TableProps> = ({
  children,
  height,
  width = DEFAULT_TABLE_MIN_WIDTH,
  horizontalSlide = false,
  resizeableColumns = true,
  ...rest
}) => {
  const computedStyles: React.CSSProperties = {
    height: height || '100%',
    width: width ? `${width}px` : '100%',
    overflowX: horizontalSlide ? 'auto' : 'hidden'
  }

  return (
    <TableProvider
      tableWidth={width}
      resizeableColumns={resizeableColumns}
      horizontalSlide={horizontalSlide}
    >
      <div
        className={styles.table}
        style={computedStyles}
        {...rest}
      >
        {children}
      </div>
    </TableProvider>
  )
}

export default Table
