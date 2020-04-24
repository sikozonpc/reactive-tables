import * as React from 'react'
// import styles from '../../index.module.css'
import useReactiveTable from '../../hooks/useReactiveTable'
import ResizableHead from '../Headers/ResizableHead/ResizableHead'

interface TableHeadProps extends React.HTMLAttributes<HTMLDivElement> {
  columnIndex: number,
}

const TableHead: React.FC<TableHeadProps> = ({ children, ...other }) => {
  const { columnSizeHandler } = useReactiveTable()

  const onResizeHead = (columnIndex: number, width: number) => {
    columnSizeHandler(columnIndex, width)
  }

  return (
    <ResizableHead onResize={onResizeHead} {...other}>
      {children}
    </ResizableHead>
  )
}

export type TableHeadElement = React.ReactElement<TableHeadProps, typeof TableHead>

export default TableHead
