// for helmet start
import { Helmet} from 'react-helmet-async';
import coverImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";

import pizzaImg from "../../../assets/menu/pizza-bg.jpg"; 

import saladImg from "../../../assets/menu/salad-bg.jpg";

import soupImg from "../../../assets/menu/soup-bg.jpg";

import Cover from '../../Home/Home/Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MuneCategory from '../MunuCategory/MuneCategory';
const Menu = () => {
  //import use hooks start
 const [menu] = useMenu();

 //import from menu.json start all category
  const desserts = menu.filter(item => item.category === 'dessert');
  const salad = menu.filter(item => item.category === 'salad');
  const offered = menu.filter(item => item.category === 'offered');
  const drinks = menu.filter(item => item.category === 'drinks');
  const soup = menu.filter(item => item.category === 'soup');
  const pizza = menu.filter(item => item.category === 'pizza');
 //import from menu.json end all category
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Munu</title>
      </Helmet>
      <Cover img ={coverImg} title="Our Munu"></Cover>
      {/* main cover */}
      <SectionTitle
      subHeading="Don't Miss"
      heading="Today's offer"
      >
      </SectionTitle>
      {/* offered menu items */}
     <MuneCategory items={offered}></MuneCategory>
     {/* desert menu items */}
     <MuneCategory items= {desserts} title="Desert" img={dessertImg}></MuneCategory>
     {/* pizza menu items */}
     <MuneCategory items ={pizza} title={"pizza"} img={pizzaImg}></MuneCategory>
     {/*salad menu items */}
     <MuneCategory items ={pizza} title={"salad"} img={saladImg }></MuneCategory>
     {/*soup menu items */}
     <MuneCategory items ={soup} title={"soup"} img={soupImg}></MuneCategory>
    </div>
  );
};

export default Menu;