
const FoodCard = ({item}) => {
  //from category item start
  const {name,image,price,recipe} = item;
  return (
    //card from daisyui khala start
    <div className="card bg-base-100 w-96 shadow-xl ">
      <figure>
        <img
          src={image}
          alt="Shoes" />
      </figure>
      <p className="absolute right-0  mr-4  rounded mt-4 px-4 bg-slate-900 text-white ">${price}</p>
      <div className="card-body flex flex-col items-center ">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-orange-400 bg-slate-100 border-b-4 mt-4">Add to card</button>
        </div>
      </div>
    </div>
    //card from daisyui khala start
  );
};

export default FoodCard;