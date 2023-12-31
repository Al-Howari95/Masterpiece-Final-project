import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Card2 = () => {
  const [data, setData] = useState([]);
  const [newCard, setNewCard] = useState({
    emp_name: "",
    emp_position: "",
    image: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingCardId, setEditingCardId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;

  useEffect(() => {
    AOS.init();
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fetchData = () => {
    axios
      .get("http://127.0.0.1:3001/dashboard/allemployees")
      .then((response) => {
        setData(response.data.employees);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  };

  const handleAddCard = async () => {
    try {
      const formData = new FormData();
      formData.append("emp_name", newCard.emp_name);
      formData.append("emp_position", newCard.emp_position);
      formData.append("image", newCard.image);

      await axios.post(
        "http://127.0.0.1:3001/dashboard/addemployee",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setNewCard({ emp_name: "", emp_position: "", image: "" });
      fetchData();
    } catch (error) {
      console.error("Error adding card: ", error);
    }
  };

  const handleEditCard = (editingCardId) => {
    try {
      const formDataWithImage = new FormData();
      formDataWithImage.append("emp_name", newCard.emp_name);

      formDataWithImage.append("emp_position", newCard.emp_position);
      formDataWithImage.append("image", newCard.image);

      axios
        .put(
          `http://127.0.0.1:3001/dashboard/employee/update/${editingCardId}`,
          formDataWithImage

          // headers: {
          //   "Content-Type": "multipart/form-data",
          // },
        )

        .then((response) => {
          setIsEditing(false);
          setEditingCardId(null);
          setNewCard({ emp_name: "", emp_position: "", image: "" });
          console.log("Card updated successfully: ", response.data);
          fetchData(); // Refresh the data after successful update
        })
        .catch((error) => console.error("Error updating card: ", error));
    } catch (error) {
      console.error("Error updating card: ", error);
    }
  };

  const handleDeleteCard = (cardId) => {
    axios
      .put(`http://127.0.0.1:3001/dashboard/employee/delete/${cardId}`)
      .then((response) => {
        fetchData();
      })
      .catch((error) => console.error("Error deleting card: ", error));
  };

  return (
    <div>
      <h1 data-aos="fade-up">Meet Our Team</h1>
      <br />
      <br />
      <br />

      <div id="lk" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {currentItems.map((item, index) => (
          <div key={index} data-aos="fade-up" className="mr-4 ml-4">
            <div
              id="lalala"
              className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              {/* <a href="#"> */}
              <img
                className="w-full rounded-t-lg"
                src={item.image_url}
                alt=""
              />
              <img className="w-full rounded-t-lg" src={item.image} alt="" />
              {/* </a> */}
              <div className="p-3">
                {/* <a href="#"> */}
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
                {/* </a> */}
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">
                  {item.position}
                </p>

                <div className="flex justify-between">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => handleEditCard(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleDeleteCard(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mr-4 ml-4">
          <div
            id="lalala"
            className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="p-3">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                {isEditing ? "Edit Card" : "Add New Card"}
              </h5>
              <form>
                <input
                  type="text"
                  placeholder="Name"
                  value={newCard.emp_name}
                  onChange={(e) =>
                    setNewCard({ ...newCard, emp_name: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Position"
                  value={newCard.emp_position}
                  onChange={(e) =>
                    setNewCard({ ...newCard, emp_position: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  value={newCard.image}
                  onChange={(e) =>
                    setNewCard({ ...newCard, image: e.target.value })
                  }
                />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                  type="button"
                  onClick={
                    isEditing ? () => handleEditCard(newCard) : handleAddCard
                  }
                >
                  {isEditing ? "Edit Card" : "Add Card"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center my-32">
          {data.length > itemsPerPage && (
            <ul className="flex space-x-2">
              {Array(Math.ceil(data.length / itemsPerPage))
                .fill()
                .map((_, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer px-3 py-1 rounded ${
                      index + 1 === currentPage
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300"
                    }`}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card2;
