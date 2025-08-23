
const MenuItems = ({item}) => {
  const {name,image,price,recipe} = item;
  return (
    <div>
      <img src={image} alt="" />
      <div>
        <h3>{name}----</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default MenuItems;