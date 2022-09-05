import React from 'react'
import Table from '../../components/Table'

export default function Brands() {
  return (
    <div>
      <Table TableHead = {['Brand Name', 'Phone No', 'Email','Address', 'City', 'State']} tableData = {''}/>
    </div>
  )
}
