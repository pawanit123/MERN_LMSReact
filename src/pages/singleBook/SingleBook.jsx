import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const SingleBook = () => {
const {id}= useParams()
const navigate = useNavigate({});
 const [book, setBook] = useState([]);
 console.log(id)
 const fetchBook = async () => {
   const response = await axios.get(`http://localhost:3000/book/${id}`);
   if (response.status === 200) {
     setBook(response.data.data);
   }
 };

 useEffect(() => {
   fetchBook();
 }, []);
//  console.log(book);

// Delete
const deleteBook = async () => {
  const response = await axios.delete(`http://localhost:3000/book/${id}`)
  if (response.status == 200){
  navigate("/")
  }else{
    console.log("error")
  }
}

 
  return (
    <>
    <Navbar/>
        
          <img
            className="w-full" 
            src={book.imageUrl ? book.imageUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9vayUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"} />

          
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{book.bookName}</div>
            <p className="text-gray-700 text-base">Rs.{book.bookPrice}</p>
            <p className="text-gray-700 text-base">{book.authorName}</p>
            <p className="text-gray-700 text-base">{book.authorName}</p>
            <p className="text-gray-700 text-base">{book.publishedAt}</p>

          
          <button onClick={deleteBook} className="bg-blue-300 p-2">Delete</button>
          <Link to={`/editBook/${book._id}`}>
          <button className="bg-blue-300 p-2 ml-2">Edit</button>
          </Link>
          </div>

      
    </>
  );
};

export default SingleBook;
