/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

     const AddBook = () => {

//   const [bookName, setBookName] = useState("");
//   const [bookPrice, setBookPrice] = useState("");
//   const [isbNumber, setIsbNumber] = useState(null);
//   const [authorName, setAuthorName] = useState("");
//   const [publishedAt, setPublishedAt] = useState("");
//   const [publication, setPublication] = useState("");
//   const [image, setImage] = useState(null);

//   const handleSubmit = async (e) =>{    //yo function le Api hit hanx sab backend ma
//     e.preventDefault()
//     const formData = new FormData()
//     formData.append('bookName', bookName)
//     formData.append('bookPrice', bookPrice)
//     formData.append('isbNumber', isbNumber)
//     formData.append('authorName', authorName)
//     formData.append('publishedAt', publishedAt)
//     formData.append('publication', publication)
//     formData.append('image', image)
//     const response = await axios.post('http://localhost:3000/book', formData)
//   }

const navigate = useNavigate()
const [data, setData] = useState({
  bookName : "",
  bookPrice : "",
  isbNumber : "null",
  authorName : "",
  publishedAt : "",
  publication : "",
  });
  const [image, setImage] = useState(null)

  const handleChange = (e) =>{
    // console.log(e.target.value, e.target.name)
  const {name, value} = e.target //object destructuring
  setData({
    ...data,
    [name]: value
  })
  }

//API hit handa
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const formData = new FormData()

    Object.entries(data).forEach(([key,value])=>{
      formData.append(key,value)
    })
    formData.append('image',image)

   const response = await axios.post("http://localhost:3000/book", formData)
  if(response.status === 201){
    navigate("/")
  }else{
    alert("something went wrong")
  }
}
  return (
    <>
      <Navbar />
     <div className="bg-white rounded-lg shodow-md p-8 w-full mx-auto my-16 max-w-md">
      <h2 className="text-2xl font-semibold text-blue-600 mb-6">Add Book</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="bookName"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Book Name
                  </label>
                  <input
                    type="text"
                    name="bookName"
                    id="bookName"
                    className="mt-1 p-2 w-full border rounded-md text-gray-800" 
                    onChange={handleChange} 
                    required=""
                    />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="bookPrice"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Book Price
                  </label>
                  <input
                    type="number"
                    name="bookPrice"
                    id="bookPrice"
                    className="mt-1 p-2 w-full border rounded-md text-gray-800" 
                    onChange={handleChange}
                    required=""
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="isbNumber"
                    className="block text-sm font-medium text-gray-900"
                  >
                    IsbNumber
                  </label>
                  <input
                    type="number"
                    name="isbNumber"
                    id="isbNumber"
                    className="mt-1 p-2 w-full border rounded-md text-gray-800"
                    onChange={handleChange}
                    required=""
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="authorName"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Author Name
                  </label>
                  <input
                    type="text"
                    name="authorName"
                    id="authorName"
                    className="mt-1 p-2 w-full border rounded-md text-gray-800"
                    onChange={handleChange}
                    required=""
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="publication"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Publication
                  </label>
                  <input
                    type="text"
                    name="publication"
                    id="publication"
                    className="mt-1 p-2 w-full border rounded-md text-gray-800"
                    onChange={handleChange}
                    required=""
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="publishedAt"
                    className="block text-sm font-medium text-gray-900"
                  >
                    PublishedAt
                  </label>
                  <input
                    type="date"
                    name="publishedAt"
                    id="publishedAt"
                    className="mt-1 p-2 w-full border rounded-md text-gray-800"
                    onChange={handleChange}
                    required=""
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="booImage"
                    className="block text-sm font-medium text-gray-900"
                  >
                    BookImage
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="bookImage"
                    className="mt-1 p-2 w-full border rounded-md text-gray-800"
                    onChange={(e)=>setImage(e.target.files[0])} //type=file vayma files[0] garnu parx.
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  class="w-full p-2 text-white bg-blue-500 hover:bg-blue-700 rounded-md"
                >
                  Add Book
                </button>
              </form>
            </div>
          
    </>
  ); 
};

export default AddBook;
