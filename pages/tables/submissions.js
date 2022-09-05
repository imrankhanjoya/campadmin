import React from 'react'
import Table from '../../components/Table'

export default function Submissions() {
  return (
    <div>
        <Table TableHead={['Photo', 'Title', 'Description', 'Keywords', 'Post URL', 'Influancer Name', 'Instagram Handler', 'FaceBook Handler', 'YouTube Handler', 'Twitter Handler']} TableData={''}/>
    </div>
  )
}
