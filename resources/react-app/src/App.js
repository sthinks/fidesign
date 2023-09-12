import { BrowserRouter } from 'react-router-dom'
import AppRoute from './Routes/AppRoute'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import "./i18n/i18n";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Navbar />
        <AppRoute />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
