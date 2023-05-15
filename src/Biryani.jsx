import React, { useState } from 'react';
import Navbar1 from './Navbar1';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import Data2 from './api/Data2';

import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Biryanimodel from './Biryanimodel';
import { LazyLoadImage } from "react-lazy-load-image-component";



const Biryani = () => {
    const [model, setModel] = useState(false);
    const [tempdata, setTempdata] = useState([]);

    const getData = (img, title, para1, para2) => {
        let tempData = [img, title, para1, para2];
        setTempdata(item => [1, ...tempData]);
        return setModel(true);
    }
    return (
        <>
            <div className='content1'>
                <Navbar1 />

                <div className='title1'>
                    <h1>Biryani recipes</h1>
                </div>
                <section className='py-4 py-lg5 container section01'>
                    <div className='row justify-content-center align-item-center'>
                        {Data2.cardData2.map((item, index) => {
                            return (
                                <div className='col-11 col-lg-4 col-md-6 col-lg-3 mx-0 mb-4' key={index}>
                                    <div className="card p-0 overflow-hidden h-100 shadow " >
                                        {/* <img src={item.img} className="card-img-top " alt="..." /> */}
                                        <LazyLoadImage className="card-img-top " src={item.img}
                                            alt="Image Alt"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.para}</p>
                                            <button className='btn btn1' onClick={() => getData(item.img, item.title, item.para1, item.para2)}>Recipe<RestaurantMenuIcon/></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>

                </section>
                {
                    model === true ? <Biryanimodel img={tempdata[1]} title={tempdata[2]} para1={tempdata[3]} para2={tempdata[4]} hide={() => setModel(false)} /> : ''
                }

            </div>
        </>
    )
}

export default Biryani;







