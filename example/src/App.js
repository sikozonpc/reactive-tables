import React from 'react'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'reactive-tables'
import 'reactive-tables/dist/index.css'

const App = () => {
  return (
    <div className='test'>
      <Table>
        <TableHeader>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>0</TableCell>
            <TableCell>Tiago Taquelim</TableCell>
            <TableCell>sikozonbatata@gmail.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Tiago Taquelim</TableCell>
            <TableCell>sikozonbatata@gmail.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Tiago Taquelim</TableCell>
            <TableCell>sikozonbatata@gmail.com</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>)
}

export default App
