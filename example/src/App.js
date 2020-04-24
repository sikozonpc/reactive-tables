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
          <TableHead>Phone number</TableHead>
          <TableHead>Adress</TableHead>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>0</TableCell>
            <TableCell>Tiago Taquelim</TableCell>
            <TableCell>sikozonbatata@gmail.com</TableCell>
            <TableCell>913168440</TableCell>
            <TableCell>Rua dos lagostinhos</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Tiago Taquelim</TableCell>
            <TableCell>sikozonbatata@gmail.com</TableCell>
            <TableCell>913168440</TableCell>
            <TableCell>Rua dos lagostinhos</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Tiago Taquelim</TableCell>
            <TableCell>sikozonbatata@gmail.com</TableCell>
            <TableCell>913168440</TableCell>
            <TableCell>Rua dos lagostinhos</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>)
}

export default App
