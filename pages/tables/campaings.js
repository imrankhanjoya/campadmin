import React from 'react'
import BrandTable from '../../components/BrandTable'
import axios from 'axios'

export default function Campaings() {
  return (
    <div>
      <BrandTable TableHead = {['Photo','Brand','Campaign','Introduction','Platform']} TableData = {''}></BrandTable>
    </div>
  )
}


// export async function getServerSideProps(context) {
//   let call = await axios.get(process.env.API + '/')
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }