import * as React from 'react'

export interface TableProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  size?: 'compact' | 'normal'
  hasResizeableColumns?: boolean
}

const Table: React.FC<TableProps> = React.forwardRef(({ children }) => {
  return <div className='Table'>{children}</div>
})

export default Table
