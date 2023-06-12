import { Routes, Route } from "react-router-dom";
import React from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Datainfo from "./pages/Datainfo/Datainfo";
import Navbar from "./components/Navbar/Navbar";
import Books from "./pages/Books/Books";
import Admin from "./components/Admin/Admin";
import Admin_Pop from "./pages/AdminPage/AdminPage";
import Login from "./components/Login/Login.jsx";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Author from "./components/Author/Author";
import Registration from "./pages/Registration/Registration";
import { ToastContainer, toast } from "react-toastify";
import Profile from "./pages/Profile/Profile.jsx"
import NotFound from "./pages/NotFound/NotFound.jsx"
import Update from "./pages/Update/Update";

function App() {
  return (
    <div>
      <ToastContainer theme="colored"></ToastContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<Datainfo />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/profile"element={<Profile/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/privateAdmin" element={<Admin_Pop />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/update/:id"element={<Update/>}/>
        <Route path="/author" element={<Author />} />
        <Route path="registration" element={<Registration />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
