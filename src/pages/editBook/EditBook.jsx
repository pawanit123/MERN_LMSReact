/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import Navbar from '../components/Navbar'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EditBook =()=>{

  const {id} = useParams()
  console.log(id)
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

   const response = await axios.patch("https://mern-node-0rt9.onrender.com/book/" + id, formData)
  if(response.status === 200){
    navigate("/book/" + id)
  }else{
    alert("something went wrong")
  }
  }


  const fetchBook = async()=>{
   const response = await axios.get("http://localhost:3000/book/" + id)
   if(response.status == 200){
    console.log(response.data.data)
   setData(response.data.data)
  }
  }
  useEffect(() => {
    fetchBook()
  },[])


  return (
    <div>
       <>
       <Navbar />
     <div className="bg-white rounded-lg shodow-md p-8 w-full mx-auto my-16 max-w-md">
      <h2 className="text-2xl font-semibold text-blue-600 mb-6">Edit Book</h2>
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
                    value={data.bookName}
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
                    value={data.bookPrice}
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
                    value={data.isbNumber}
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
                    value={data.authorName}
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
                    value={data.publication}
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
                    value={data.publishedAt}
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
                  className="w-full p-2 text-white bg-blue-500 hover:bg-blue-700 rounded-md"
                >
                  Edit Book
                </button>
              </form>
            </div>
          
    </>

    </div>
  )
}

export default EditBook
