import React from 'react'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'reactive-tables'
import 'reactive-tables/dist/index.css'

import generateName from './randomNamegenerator'


function seedRandomData(size) {
  const data = []

  for (let i = 0; i < size; i++) {
    data.push({ id: i, name: generateName(), email: "some-dummy-email@email.com", phone: "913312312311", address: generateName() })
  }

  return data
}

const App = () => {

  const data = seedRandomData(100)

  return (
    <div className='test'>
      <Table
        height={500}
      >
        <TableHeader>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone number</TableHead>
          <TableHead>Adress</TableHead>
        </TableHeader>
        <TableBody>
          {data.map((row) => {
            return (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.address}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default App
