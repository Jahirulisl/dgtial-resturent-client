import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecur from '../../../hooks/useAxiosSecur';
import Swal from 'sweetalert2';

//import imgbb  hosting url start
const image_hostion_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hostion_key}`
//import imgbb  hosting url end


const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  //for  axiosSecqure 
  const axiosSecqure = useAxiosSecur();

  const { register, handleSubmit,reset} = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    //image upload to imgbb and then get an url start
    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    //now send the menu item data to the server with the image start
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.display_url
      }
      //now send the menu item data to the server with the image end
      //
      const menuRes = await axiosSecqure.post('/menu', menuItem);
      console.log(menuRes.data)
      if (menuRes.data.insertedId) {
        //show POPup 
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is addaed to the menue`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log('with image url', res.data);
    //image upload to imgbb and then get an url end
  };

  return (
    <div>
      <SectionTitle heading="add an Items" subHeading="what's new?"></SectionTitle>
      {/* from react hook form */}
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-control w-full my-6'>
            <label className='label-text'>
              <span>Recipe name</span>
            </label>
            <input type="text" placeholder='Recipe Name'
              {...register('name', { required: true })}
              className='input input-bordered w-full ' />
          </div>
          {/* make for two continer start */}
          <div className='flex gap-6'>
            {/* category */}
            <div className='form-control w-full my-6'>
              <label className='label-text'>
                <span>category</span>
              </label>
              <select defaultValue="default" {...register('category')} className="select select-bordered w-full ">
                <option value="default" > select a catagory </option>

                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>

              </select>
            </div>

            {/* price*/}
            <div className='form-control w-full my-6'>
              <label className='label-text'>
                <span>Price</span>
              </label>
              <input type="number" placeholder='Price'
                {...register('price', { required: true })}
                className='input input-bordered w-full ' />
            </div>
          </div>
          {/* make for two continer end */}
          {/*Recipe details*/}
          <div className='form-control'>
            <label className='label' >
              <span className='label-text'>Recipe Details</span>
            </label>
            <textarea {...register('recipe')} className="textarea textarea-border w-full h-24 " placeholder="Bio"></textarea>
          </div>

          {/*for file/ image*/}
          <div>
            <input {...register('image', { required: true })} type="file" className="file-input w-full my-6" />

            <button className='btn'>
              Add Item <FaUtensils className='m-4'></FaUtensils>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;