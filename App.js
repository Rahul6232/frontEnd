import Navbar from './components/Navbar';
import Footer from './components/footer';
import SignUp from './components/signUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateComponent from './components/privateComponent';
import './App.css';
import Login from './components/Login';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Footer />


        <Routes>
          <Route element= {< PrivateComponent />}> 
            <Route path="/" element={<h1>Product Listing Component</h1>} />
            <Route path="/add" element={<AddProduct/>} />
            <Route path="/update" element={<h1>Update product Listing Component</h1>} />
            <Route path="/logout" element={<h1>Logout</h1>} />
            <Route path="/profile" element={<h1>Profile</h1>} />
            </Route>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
