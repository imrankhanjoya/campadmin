import React from 'react'
import TableHeader from './TabelHeader'


function InfluencerTable({TableData}) {
  return (
    <div className='w-full'>
       <div className="flex-grow  bg-white dark:bg-gray-900 overflow-y-auto">
          <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky top-0">
            
            <TableHeader></TableHeader>
          </div>
          <div className="sm:p-7 p-4">
            
            <table className="w-full text-left">
              <thead>
                {TableData.map((item,index)=>{
                  return(

                    <tr key={index} className="text-gray-400">
                  <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">{item.facebook_followers}</th>
                  <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">{item.instagram_followers}</th>
                  <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">{item.youtube_followers}</th>
                  <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">{item.twitter_followers}</th>
                  <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">{item.user_email}</th>

                </tr>
                  
                  )
                })}
              </thead>
              <tbody className="text-gray-600 dark:text-gray-100">
                
              
              </tbody>
            </table>
           
          </div>
        </div> 
    </div>
  )
}

export default InfluencerTable