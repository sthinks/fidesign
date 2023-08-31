import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SimpleCarousel from '../../components/Carousel/SimpleCarousel';
import Architecture from '../../assets/image/architecture.jpg';
import Urban from '../../assets/image/urban.jpg';
import Interıor from '../../assets/image/interior.png';
import SimpleForm from '../../components/SimpleForm';
import HomeBg from "../../assets/image/home-bg.png"

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // GET isteği için kullanılacak URL
    const url = 'http://127.0.0.1:8000/api/get-categories';

    // Axios ile GET isteği yapma
    axios.get(url)
      .then(response => {
        console.log(response.data)
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('An error occurred:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <img src={HomeBg} width="25%" height="auto" className='absolute right-0 bottom-0' alt='Background' />
      <SimpleCarousel />
      <section className='container mx-auto lg:px-40 py-16 text-center'>
        <p className='font-semibold text-black'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tenetur consequatur voluptates aut atque deserunt magnam
          ut voluptatum debitis reprehenderit culpa velit, accusamus
          ipsam magni corporis veritatis officiis eius nobis nostrum
          numquam! Tempore eius fugiat sint dolore, sed explicabo!
          Facere excepturi architecto corrupti numquam perferendis
          quas fugit soluta ipsa laudantium deleniti.
        </p>
      </section>
      <div className='container mx-auto lg:px-40 py-4 text-center'>
        <p className="font-semibold text-[30px]">PROJECTS</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:px-40">
        {data?.map((item) => (
          <a href='/projects' className="max-md:mb-10 overflow-hidden">
            <div className="relative home-card group">
              <img
                src={item.image}
                alt="Architecture"
                className="w-full h-[550px] object-cover group-hover:scale-125 transition-transform duration-500"
              />
              <div className='w-full h-full bg-[#0000007d] absolute left-0 top-0 group-hover:bg-transparent transition-colors duration-300' />
              <div className="home-card_text absolute bottom-10 right-0 pl-16 pr-3 bg-white text-end py-2 uppercase transition-bg duration-300">
                <h3 className="text-xl font-semibold transition-colors duration-300">{item.title}</h3>
              </div>
            </div>
          </a>
        ))}
      </div>

      <SimpleForm />
    </div>
  )
}

export default Home