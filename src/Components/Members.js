import React, { useEffect, useState } from "react";
import MemberTable from "./MemberTable";

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/members")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  console.log(members?.name);
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-xs text-left whitespace-nowrap">
            <colgroup>
              <col className="w-5"></col>
              <col></col>
              <col></col>
              <col></col>
              <col></col>
              <col></col>
              <col className="w-5"></col>
            </colgroup>
            <thead>
              <tr className="dark:bg-gray-700">
                <th className="p-3">A-Z</th>
                <th className="p-3">Name</th>
                <th className="p-3">Job title</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Email</th>
                
                <th className="p-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
              {members.map((member) => {
                return (
                  <tr>
                    <td className="px-3 text-2xl font-medium dark:text-gray-400">
                      A
                    </td>
                    <td className="px-3 py-2">
                      <p>{member.name}</p>
                    </td>
                    <td className="px-3 py-2">
                      <span>{member.taka}</span>
                      <p className="dark:text-gray-400">Amount</p>
                    </td>
                    <td className="px-3 py-2">
                      <p>555-873-9812</p>
                    </td>
                    <td className="px-3 py-2">
                      <p>dwight@adams.com</p>
                    </td>
                    
                    <td className="px-3 py-2">
                      <button
                        type="button"
                        title="Open details"
                        className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Members;
