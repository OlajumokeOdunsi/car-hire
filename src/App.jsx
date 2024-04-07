import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomeIndex from "./pages/home/HomeIndex";
import AboutIndex from "./pages/about/AboutIndex";
import CarsIndex from "./pages/cars/CarsIndex";
import BlogsIndex from "./pages/blogs/BlogsIndex";
import ContactsIndex from "./pages/contacts/ContactsIndex";
import CarsDetails from "./pages/cars/carsDetails/CarsDetails";
import BlogDetails from "./pages/blogs/blogDetails/BlogDetails";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeIndex />} />
          <Route path="/about" element={<AboutIndex />} />
          <Route path="/cars" element={<CarsIndex />} />
          <Route path="/cars/:carId" element={<CarsDetails />} />
          <Route path="/blogs" element={<BlogsIndex />} />
          <Route path="/blogs/:blogId" element={<BlogDetails />} />
          <Route path="/contacts" element={<ContactsIndex />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
