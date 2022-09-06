import React from 'react'
import BrandTable from '../../components/BrandTable'

export default function Submissions() {
  return (
    <div>
        <BrandTable TableHead={['Photo', 'Title', 'Description', 'Keywords', 'Post URL', 'Influancer Name', 'Instagram Handler', 'FaceBook Handler', 'YouTube Handler', 'Twitter Handler']} TableData={''}/>
    </div>
  )
}
