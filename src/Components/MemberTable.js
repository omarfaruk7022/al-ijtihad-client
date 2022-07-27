import React from "react";

const MemberTable = ({ member }) => {
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        
      <div className="overflow-x-auto">
          <table className="w-full p-6 text-xs text-left ">
            
            <tbody className=" dark:bg-gray-900 dark:border-gray-600">
              <tr>
               
                <td className="p-3">
                  <p>{member.name}</p>
                </td>
                <td className="px-3 py-2">
                  <span>UI Designer</span>
                  <p className="dark:text-gray-400">Spirit Media</p>
                </td>
                <td className="px-3 py-2">
                  <p>555-873-9812</p>
                </td>
                <td className="px-3 py-2">
                  <p>dwight@adams.com</p>
                </td>
                <td className="px-3 py-2">
                  <p>71 Cherry Court, SO</p>
                  <p className="dark:text-gray-400">United Kingdom</p>
                </td>
                <td className="px-3 py-2">
                  <button
                    type="button"
                    title="Open details"
                    className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
              
            </tbody>
            </table>
            </div>
          
      </div>
    </div>
  );
};

export default MemberTable;
