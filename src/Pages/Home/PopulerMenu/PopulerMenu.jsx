
import { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItems from '../Home/Shared/MenuItems/MenuItems';


const PopulerMenu = () => {
  //for state set start
  const [menu, setMenu] = useState([]);
  //for state set end
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item =>item.category === 'popular');
        setMenu(popularItems)
      })
  }, [])

  return (
    <section>
      <SectionTitle
        subHeading=" popular items "
        heading="From our menu"
      >
      </SectionTitle>
      <div>


        {menu.map((item) => (
          <MenuItems
          key={item._id} item={item}>
          </MenuItems>
        ))}
      </div>
    </section>

  );
};

export default PopulerMenu;