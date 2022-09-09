import React from "react";
import axios from "axios";
import TableHead from "../../components/TabelHeader";


export default function Submissions({ submissionslist }) {
  return (
    <div>
      <div className="w-full">
        <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
          <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky top-0">
            <TableHead></TableHead>
          </div>
          <div className="sm:p-7 p-4">
            <div className="flex w-full items-center mb-7">
              <button className="inline-flex mr-3 items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 mr-2 text-gray-400 dark:text-gray-600"
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
                  className="w-4 ml-1.5 text-gray-400 dark:text-gray-600"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <button className="inline-flex items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0">
                Filter by
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 ml-1.5 text-gray-400 dark:text-gray-600"
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
                <tr className="text-gray-400">
                  <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                    Brand
                  </th>
                  <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                    Website
                  </th>
                  <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">
                    Phone
                  </th>
                  <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-gray-100">
                {submissionslist.map((e, index)=>{
                  return(<tr key={index}>
                  <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-800">{e.camp_id}</td>
                  <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-800">
                  {e.facebook_followers}
                  </td>
                  <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-800">
                  {e.instagram_followers}
                  </td>
                  <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-800">
                  {e.youtube_followers}
                  </td>
                  <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-800">
                  {e.twitter_followers}
                  </td>
                  <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-800">
                  {e.user_email}
                  </td>

                  <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                    <button className="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
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
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/api/submissionsapi");
  const submissionslist = response.data.data;
console.log('Data Of submissionslist =========================>', submissionslist)
  return { props: { submissionslist } };
}
