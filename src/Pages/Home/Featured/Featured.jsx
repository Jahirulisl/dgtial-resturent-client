import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8">
      <SectionTitle 
      subHeading={'check it out'}
      heading={'Featured items'}>
      </SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 space-y-4">
          <p>Aug 20, 2009</p>
          <p className="uppercase">wher can i get some?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, consequuntur optio corrupti aspernatur consectetur ducimus culpa quo odio. Aperiam iusto optio praesentium eaque quasi nemo aut voluptates id facilis quod.</p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;