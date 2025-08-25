import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import Featured from "../Featured/Featured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Templet from "../Templet/Templet";
import Testimonial from "../Testimonials/Testimonial";

const Home = () => {
  return (
    <div>
      {/* for helmet start */}
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      {/* for helmet start */}
      <Banner></Banner>
      <Catagory></Catagory>
      <Templet></Templet>
      <PopulerMenu></PopulerMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>

    </div>
  );
};

export default Home;