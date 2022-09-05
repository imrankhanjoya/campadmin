import React from 'react'
import Table from '../../components/Table'
import axios from 'axios'

export default function Campaings() {
  return (
    <div>
      <Table TableHead = {['Photo','Brand','Campaing','Introduction','Platform']} TableData = {''}></Table>
    </div>
  )
}


// export async function getServerSideProps(context) {
//   let call = await axios.get(process.env.API + '/')
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }