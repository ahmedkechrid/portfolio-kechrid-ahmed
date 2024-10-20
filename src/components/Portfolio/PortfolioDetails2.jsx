import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import HomeGalaxy from '../../assests/Home-galaxy.jpg';
import Home2Galaxy from '../../assests/Home2-galaxy.jpg';
import ProductManagment from '../../assests/product-managment-galaxy.jpg';
import UserManagment from '../../assests/User-managment-galaxy.jpg';
import './PortfolioDetails.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const PortfolioDetails2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div>→</div>,  
    prevArrow: <div>←</div>
  };

  return (
    <div className='container-view-portfolio'>
      <Link to='/' className='btn'>Back</Link>

      <article className="view-portfolio__container">
        <h2>User Home Page</h2>
        <Slider {...settings}>
          <div className="project__container-img">
            <img src={HomeGalaxy} alt='home page' />
          </div>
          <div className="project__container-img">
            <img src={Home2Galaxy} alt='user Page'/>
          </div>
        </Slider>
        <p>
          After the User logs in, they will be redirected to the main interface, 
          featuring the official website picture, providing a welcoming introduction to the site. 
          Users can explore a variety of products displayed on the page, 
          with the option to click on any product to view more detailed information. 
          Additionally, there are filters available that allow users to sort products by name or price, 
          making it easier to find exactly what they're looking for.
        </p>
      </article>
      <article className="view-portfolio__container">
        <h2>Product managment Interface</h2>

        <div className="project__container-img">
            <img src={ProductManagment} alt='Next Tool' />
        </div>
        <p>In the admin interface , 
            administrator have the ability to efficiently manage products within the system. 
            They can easily add new products by providing relevant details, delete products that are no longer needed, 
            or modify existing products to update their information. 
            This interface is designed to offer admins full control over the product catalog,
             ensuring that the product listings are always up-to-date and accurately reflect the available inventory.
        </p>
        </article>

        <article className="view-portfolio__container">
        <h2>User Managment Interface</h2>
        <div className="project__container-img">
            <img src={UserManagment} alt='home prod' />
        </div>
        <p>In the admin interface, the admin has access to the user management section,
             where they can view a list of all registered users. This interface allows the admin to easily add new users,
              providing necessary details for their accounts. 
            Additionally, the admin can delete existing users from the system as needed, 
            ensuring efficient management of user information.</p>
        </article>
    </div>
  );
}

export default PortfolioDetails2;
