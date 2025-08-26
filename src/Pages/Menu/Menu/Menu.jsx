// for helmet start
import { Helmet} from 'react-helmet-async';
import coverImg from "../../../assets/menu/banner3.jpg";
import Cover from '../../Home/Home/Shared/Cover/Cover';
import PopulerMenu from '../../Home/PopulerMenu/PopulerMenu';

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title> Eduction | Munu</title>
      </Helmet>
      <Cover img ={coverImg} title="Our Munu"></Cover>
      <PopulerMenu></PopulerMenu>
    </div>
  );
};

export default Menu;