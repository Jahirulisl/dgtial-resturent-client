// Import Swiper React components start
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import Swiper React components end

//for img import
import slidImg1 from '../../../assets/home/slide1.jpg';
import slidImg2 from '../../../assets/home/slide2.jpg';
import slidImg3 from '../../../assets/home/slide3.jpg';
import slidImg4 from '../../../assets/home/slide4.jpg';
import slidImg5 from '../../../assets/home/slide5.jpg';
import SectionTetle from '../../../Components/SectionTitle/SectionTitle';

const Catagory = () => {
  return (
    <section>
      <SectionTetle subHeading={"From 11.00am to 10.00pm "}
      heading={"order online"} >
      </SectionTetle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slidImg1} alt="" />
          <h3 className='text-xl uppercase text-center text-white -mt-8'>salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidImg2} alt="" />
          <h3 className='text-xl uppercase text-center text-white -mt-12'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidImg3} alt="" />
          <h3 className='text-xl uppercase text-center text-white -mt-8'>soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidImg4} alt="" />
          <h3 className='text-xl uppercase text-center text-white -mt-8'>disirts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidImg5} alt="" />
          <h3 className='text-xl uppercase text-center text-white -mt-8'>salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidImg1} alt="" />
          <h3 className='text-xl uppercase text-center text-white -mt-8'>katakhaki school</h3>
        </SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Catagory;