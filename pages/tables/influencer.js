import axios from 'axios'
import React from 'react'
import InfluencerTable from '../../components/InfluencerTable'

export default function Influancer({influencerlist}) {
  return (
    <div>
      <InfluencerTable TableHead={['Name','Phone No','Email','Twitter handler','YouTube Handler', 'Instagram Handler' ]} TableData={influencerlist}/>
      </div>
  )
}


export async function getServerSideProps(){
  const respoance = await axios.get("http://localhost:3000/api/influencerapi")
  console.log("=========>",respoance.data)

  const influencerlist = respoance.data.data

  return({props:{influencerlist}})


}
