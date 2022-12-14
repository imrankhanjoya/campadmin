import axios from 'axios'
import React from 'react'
import TableHead from '../../components/TabelHeader'

export default function Influancer({influencerlist}) {
  return (
    <div>
      <div className="w-full">
        <div class="flex-grow bg-white  overflow-y-auto">
          <div class="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white    sticky top-0">
            <TableHead></TableHead>
          </div>
          <div class="sm:p-7 p-4">
            <div class="flex w-full items-center mb-7">
              <button class="inline-flex mr-3 items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700   border border-gray-200 leading-none py-0">
                <svg
                  viewBox="0 0 24 24"
                  class="w-4 mr-2 text-gray-400 "
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Last 30 days
                <svg
                  viewBox="0 0 24 24"
                  class="w-4 ml-1.5 text-gray-400 "
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <button class="inline-flex items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700   border border-gray-200 leading-none py-0">
                Filter by
                <svg
                  viewBox="0 0 24 24"
                  class="w-4 ml-1.5 text-gray-400 "
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr class="text-gray-400">
                  <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 ">
                    Name
                  </th>
                  <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 ">
                    Email
                  </th>
                  <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200  hidden md:table-cell">
                    Type
                  </th>
                  <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 ">
                    Bio
                  </th>
                  <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 ">
                    City
                  </th>
                  <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 ">
                    Country
                  </th>
                </tr>
              </thead>
              <tbody class="text-gray-600 ">
                {influencerlist.map((e)=>{
                  return(<tr>
                  <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-gray-800">
{e.name}
                  </td>
                  <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-gray-800">
                  {e.email}
                  </td>
                  <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-gray-800">
                  {e.type}
                  </td>
                  <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-gray-800">
                  {e.bio}
                  </td>
                  <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-gray-800">
                  {e.city}
                  </td>
                  <td class="sm:p-3 py-2 px-1 border-b border-gray-200  text-gray-800">
                  {e.country}
                  </td>

                  <td class="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                    <button class="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </button>
                  </td>
                </tr>)})}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}


export async function getServerSideProps(){
  const respoance = await axios.get("http://localhost:3000/api/influencerapi")
  console.log("=========>",respoance.data)

  const influencerlist = respoance.data.data

  return({props:{influencerlist}})


}
