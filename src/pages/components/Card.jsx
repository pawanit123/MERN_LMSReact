/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({ book }) => {
  // const navigate =useNavigate()
  console.log(book);
  return (
    <div className="max-w-sm rounded overflow-hidden shodow-lg my-10" key={book._id}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg my-10">
        <img
          className="w-full"
          src={book.imageUrl ? book.imageUrl: "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip"} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{book.bookName}</div>
          <p className="text-gray-700 text-base">
          Rs. {book.bookPrice}
          </p>
          <p className="text-gray-700 text-base">
         {book.authorName}
          </p>
          {/* <button><a href="/book">See More</a></button> */}
          {/* <button onClick={()=>navigate("/book")}></button> */}
        <Link to={`/book/${book._id}`}>See More</Link>

        </div>
      </div>
    </div>
  );
};

export default Card;
