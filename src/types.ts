import TableHead from './components/TableHead/TableHead'

export interface Column {
  width: number;
}

export interface Table {
  columns: Column[];
  headerMinWidth: number;
}

export interface UseReactiveTable {
  table: Table;
  loadTable: (table: Table) => void;
  columnSizeHandler: (columnIndex: number, width: number) => void;
  generateColumns: (count: number) => void;
}

export interface ResizableHeadProps extends React.HTMLAttributes<HTMLDivElement> {
  columnIndex: number;
  onResize: (columnIndex: number, width: number) => void;
}

export interface TableProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  height?: number;
  size?: 'compact' | 'normal';
  hasResizeableColumns?: boolean;
}

export interface TableHeadProps extends React.HTMLAttributes<HTMLDivElement> {
  columnIndex: number;
}

export type TableHeadElement = React.ReactElement<TableHeadProps, typeof TableHead>

export type TableRowProps = React.HTMLAttributes<HTMLDivElement>
