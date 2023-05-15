import React from 'react';
import back from "../src/img/bg1.jpg";
import "../src/components/menu.css";
import breaks from '../src/img/breakfast1.jpg';
import Datam from "../src/api/Datam";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Link } from 'react-router-dom';

import RestaurantIcon from '@mui/icons-material/Restaurant';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Menu = () => {
  return (
    <div>
      <div className='menu1'>
        <div className='img'>
          <img src={back} />
        </div>
        <div className='contents01'>
          <div className='menutitle1'>
            <h1>the recipe website</h1>
          </div>
          <div className='menutitle2'>
            <div className='box'>
              <h1>Dont't Know,</h1>
              <h1>What's the recipe of your favorite food?</h1>
              <h1>Don't worry Here we are</h1>
              <div className='menubtn'>
                <button><a href='#menu'> Click here for recipe</a>
              
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className='menu2' id='menu'>
        {/* <div className='menulist'>
          <div className='menulist1'>
            <img src={breaks} />
           
          </div>
          <div className='listbtn'>
            <button>Recipe</button>
          </div>
        </div> */}

        <section className='py-4 py-lg5 container section01'>
          <div className='row justify-content-center align-item-center'>
            {Datam.cardDatam.map((item, index) => {
              return (
                <div className='col-11 col-lg-4 col-md-6 col-lg-3 mx-0 mb-4' key={index}>
                  <div className="card p-0 overflow-hidden h-100 shadow " >
                    {/* <img src={item.img} className="card-img-top " alt="..." /> */}
                    <LazyLoadImage className="card-img-top " src={item.img}
                                            alt="Image Alt"
                                        />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                     
                      <button className='btn btn1'><Link exact to={item.link}>Recipe<RestaurantIcon/></Link></button>
                    </div>
                  </div>
                </div>
              )
            })}


          </div>
        </section>

      </div>

    </div>
  )
}

export default Menu;
