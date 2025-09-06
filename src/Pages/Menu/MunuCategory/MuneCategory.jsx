
import MenuItems from '../../Home/Home/Shared/MenuItems/MenuItems';
import Cover from '../../Home/Home/Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MuneCategory = ({items,title,img}) => {
      // console.log("Title prop:",title);
  return (
    <div className='pt-8'>
      {title && <Cover img={img} title ={title}></Cover>}
      <div className='grid md:grid-cols-2 gap-10 my-16'>
        {items.map(item => 
          <MenuItems
            key={item._id} item={item}>
          </MenuItems>
        )}
      </div>
       {/* for order button strt */}
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
      </Link>
    </div>
  );
};

export default MuneCategory;