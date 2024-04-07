import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './NavBar'; // Import NavBar component
import LoginScreen from './LoginScreen';
import StudentHomeScreen from './StudentHomeScreen';
import EducatorHomeScreen from './EducatorHomeScreen';
import About from './About';
import BookOfTheDay from './BookOfTheDay';
import Recommendations from './Recommendations';

const Layout = ({ children }) => {
  const location = useLocation(); 

  return (
    <>
      {location.pathname !== '/' && <NavBar />}
      <div>{children}</div>
    </>
  );
};

const book = {
  title: "From the Desk of Zoey Washington",
  author: "Janae Marks",
  isbn: "9780062875853",
  summary: "Zoe Washington isn’t sure what to write. What does a girl say to the father she’s never met, hadn’t heard from until his letter arrived on her twelfth birthday, and who’s been in prison for a terrible crime? A crime he says he never committed. Could Marcus really be innocent? Zoe is determined to uncover the truth. Even if it means hiding his letters and her investigation from the rest of her family. Everyone else thinks Zoe’s worrying about doing a good job at her bakery internship and proving to her parents that she’s worthy of auditioning for Food Network’s Kids Bake Challenge. But with bakery confections on one part of her mind, and Marcus’s conviction weighing heavily on the other, this is one recipe Zoe doesn’t know how to balance. The only thing she knows to be true: Everyone lies.",
  cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1560957404i/45169415.jpg",
  ageRange: "Middle Grade",
  genre: "Realistic Fiction",
  purchaseLinks: {
    amazon: "https://www.amazon.com/gp/product/006287585X?ref_=dbs_m_mng_rwt_calw_thcv_0&storeType=ebooks",
    barnesAndNoble: "https://www.barnesandnoble.com/w/from-the-desk-of-zoe-washington-janae-marks/1130055617?ean=9780062875853",
    libraries: "https://search.worldcat.org/search?loc=&q=bn:006287585X"
  },
  diversity: {
    blackAuthor: true,
    asianAuthor: false,
    palestinianAuthor: false,
    womenAuthor: true,
    nativeAuthor: false,
  },
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/book-of-the-day" element={<Layout><BookOfTheDay book={book} /></Layout>} />
        <Route path="/recommendations" element={<Layout><Recommendations /></Layout>} />
        <Route path="/student" element={<Layout><StudentHomeScreen /></Layout>} />
        <Route path="/educator" element={<Layout><EducatorHomeScreen /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
