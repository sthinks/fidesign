import { BrowserRouter } from 'react-router-dom'
import AppRoute from './Routes/AppRoute'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import "./i18n/i18n";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AppRoute />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
