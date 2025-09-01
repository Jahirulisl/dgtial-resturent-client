import { useState } from "react";
import orderImg from "../../../assets/shop/order.jpg"
import Cover from "../../Home/Home/Shared/Cover/Cover";

//for react tabs start 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../Components/SectionTitle/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
//for react tabs end 

const Order = () => {
  //for tabs 
  const [tabIndex, setTabIndex] = useState(0);

  //import from menu.json start all category
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === 'dessert');
  const salad = menu.filter(item => item.category === 'salad');
  const offered = menu.filter(item => item.category === 'offered');
  const drinks = menu.filter(item => item.category === 'drinks');
  const soup = menu.filter(item => item.category === 'soup');
  const pizza = menu.filter(item => item.category === 'pizza');
  //import from menu.json end all category
  return (
    <div>
      <Cover img={orderImg} title="Order Food" ></Cover>

      {/*tab from react tab uncontrol mood*/}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        {/* for salad start */}
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        {/* for salad end*/}

        {/* for pizza start */}
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        {/* for pizza end */}

        {/* for soup start */}
        <TabPanel>
           <OrderTab items={soup}></OrderTab>
        </TabPanel>
        {/* for soup end */}

        {/* for Dessert start */}
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        {/* for Dessert end */}

        {/* for drinks start */}
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
        {/* for drinks end */}

      </Tabs>
    </div>
  );
};

export default Order;