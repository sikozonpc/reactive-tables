import React from 'react'
import { FixedSizeList as List } from 'react-window'

import { Table, TableCell, TableHead, TableHeader, TableRow } from 'reactive-tables'
import 'reactive-tables/dist/index.css'

import generateName from './randomNamegenerator'

function seedRandomData(size) {
  const data = []

  for (let i = 0; i < size; i++) {
    data.push({ id: i, name: generateName(), email: "some-dummy-email@email.com", phone: "913312312311", address: generateName() })
  }

  return data
}

const InfiniteScroll = () => {

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
        <List
          height={500}
          itemCount={100}
          itemSize={37}
          width='100%'
        >
          {({ index, style }) => {
            const row = data[index]
            return (
              <TableRow key={row.id} style={style}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.address}</TableCell>
              </TableRow>
            )
          }}
        </List>
      </Table>
    </div>
  )
}

export default InfiniteScroll
