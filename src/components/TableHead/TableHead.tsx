import * as React from 'react'
import useReactiveTable from '../../hooks/useReactiveTable'
import ResizableHead from '../Headers/ResizableHead/ResizableHead'
import { TableHeadProps } from '../../types'

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

export default TableHead
