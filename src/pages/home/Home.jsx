import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const response = await axios.get("https://mern-node-0rt9.onrender.com/book");
    if (response.status === 200) {
      setBooks(response.data.data);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  console.log(books);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-evenly mt-20">
        {books.length > 0 && books.map((book) => {
            // eslint-disable-next-line react/jsx-key
            return <Card book={book} />;
          })}
      </div>
    </>
  );
};

export default Home;
