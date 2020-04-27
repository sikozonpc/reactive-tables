import TableHead from './components/TableHead/TableHead'

export interface Column {
  width: number;
}

export interface Table {
  columns: Column[];
  width: number;
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
  /** Maximum width the table can have, the content will fit automatically */
  width?: number;
  /** Space and size of the data for each row */
  size?: 'compact' | 'normal';
  /** Flag to tell if the collumns should be resizable  */
  resizeableColumns?: boolean;
  /** Should the table have horizontal scroll. (Note t hat if you have resizable columns they'll be limited by the table width) */
  horizontalSlide?: boolean;
}

export interface TableHeadProps extends React.HTMLAttributes<HTMLDivElement> {
  columnIndex: number;
}

export type TableHeadElement = React.ReactElement<TableHeadProps, typeof TableHead>

export type TableRowProps = React.HTMLAttributes<HTMLDivElement>

export interface TableProviderProps {
  tableWidth: number;
  resizeableColumns: TableProps['resizeableColumns'];
  horizontalSlide: TableProps['horizontalSlide'];
}
