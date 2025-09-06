import FoodCard from "../../../Components/SectionTitle/FoodCard/FoodCard";
//FOR PAGNITION START
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
//FOR PAGNITION END

const OrderTab = ({ items }) => {

  //MAKE PAGINATION 
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div>

      {/* FROM PAGNATION CUSTOM  */}
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid md:grid-cols-3 gap-10">
            {
              items.map(item => <FoodCard key={item._id}
                item={item}></FoodCard>)
            }
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderTab;