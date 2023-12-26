import React, { useState, useEffect } from "react";
import axios from "axios";

const Submit = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:3001/getbooking");
      console.log("hhhhhhhhhhshshshhsh", response.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.put(`http://127.0.0.1:3001/deletebooking/${userId}`);
      fetchData(); // Refresh the data after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div id="table" className="max-w-screen-xl mx-auto mt-8">
      <>
        <table className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 border-collapse block md:table mx-auto mr-auto">
          <thead className="block md:table-header-group">
            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
              <th className="bg-blue-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                ID
              </th>
              <th className="bg-blue-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                date
              </th>
              <th className="bg-blue-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                time
              </th>
              <th className="bg-blue-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                location
              </th>
              <th className="bg-blue-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {users.map((user) => (
              <tr
                key={user.id}
                className="bg-blue-100 border border-blue-100 md:border-none block md:table-row"
              >
                <td className="p-2 md:border md:border-blue-300 text-left block md:table-cell">
                  {user.id}
                </td>
                <td className="p-2 md:border md:border-blue-300 text-left block md:table-cell">
                  {user.date}
                </td>
                <td className="p-2 md:border md:border-blue-300 text-left block md:table-cell">
                  {user.time}
                </td>
                <td className="p-2 md:border md:border-blue-300 text-left block md:table-cell">
                  {user.location}
                </td>
                <td className="p-2 md:border md:border-blue-300 text-left block md:table-cell">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4"></div>
      </>
    </div>
  );
};

export default Submit;
