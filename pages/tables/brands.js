import React from 'react'
import BrandTable from '../../components/BrandTable'
import axios from 'axios'

export default function Brands({datalist}) {
  return (
    <div>
      <BrandTable TableHead = {['Brand Name', 'Phone No', 'Email','Address', 'City', 'State']} tableData = {datalist}/>
    </div>
  )
}


export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/api/brandapi")
  const datalist = response.data.data

  return( { props: { datalist} })
  

}