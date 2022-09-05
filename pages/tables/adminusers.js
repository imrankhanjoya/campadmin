import React from 'react'
import Table from '../../components/Table'

export default function Adminusers() {
  return (
    <div>
      <Table TableHead = {['Admin Name', 'User Name', 'Phone No', 'Email',]} tableData = {''}/>
    </div>
  )
}
