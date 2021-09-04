import React from 'react';
import {NavLink} from 'react-router-dom';
const Common=(props)=>{

    return(
        <div>
             <section id="header" className="d-flex align-items-center">   
                <div className="container-fluid nav-bg">
                    <div className="row">
                        <div className="col-10 mx-auto mt-5">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1><b>{props.name} 
                                <strong className="brand-name"> NeilTechnical</strong></b></h1>
                                <h3 className="my-3">
                                    We are the team of talented developers making websites.
                                </h3>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn custom-btn">{props.btnname}</NavLink>

                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgsrc} className="img-fluid animated" alt=""/>

                            </div>
                            </div>

                        </div>
                    </div>
                </div>
             </section>  
        </div>

    );
};







export default Common;