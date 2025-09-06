
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

//for carousel we will use swiper react and slider start
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

// for rating we will use smastrm react- rating start 
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
// for rating we will use smastrm react- rating end 

//for carousel we will use swiper react and slider end

const Testimonial = () => {
  //for reviews data start
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/review')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, []);
  //for reviews data end
  return (
    <section className='my-20'>
      <SectionTitle
        subHeading={"what our clients say"}
        heading={"Testimonials"}
      >
      </SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
          reviews.map(review => <SwiperSlide
            key={review._id}>
            <div className=' flex flex-col items-center my-16 mx-24'>
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className='py-8'>{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>

          </SwiperSlide>)
        }
      </Swiper>
    </section>
  );
};


export default Testimonial;