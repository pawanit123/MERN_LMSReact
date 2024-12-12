import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import SingleBook from './pages/singleBook/SingleBook'
import AddBook from './pages/addBook/AddBook'
import EditBook from './pages/editBook/EditBook'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:id" element={<SingleBook />} />
      <Route path='/addBook' element={<AddBook/>} />  
      {/* useparams use garn mildain because yo static ho. */}
      <Route path='/editBook/:id' element={<EditBook/>} />
      {/* useparams use garn milx because yo dynamic ho. e.g :id */}

    </Routes>
    </BrowserRouter>
  )
}

export default App