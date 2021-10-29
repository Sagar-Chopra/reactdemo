import React from 'react';
import { useState } from 'react/cjs/react.development';
import serviceapi from './API/ServiceAPI';

const Services = () => {
  const[serviceData, setServiceData] = useState(serviceapi);
  return (
    <>
     <section className="service-main-container">
       <div className="container service-container">
         <h1 className="main-heading text-center fw-bold">
           How To Send Money
         </h1>
         <div className="row Services-main-row">
         {
           serviceData.map((curElement) => {
             const{id, logo, title, info} = curElement;
             return(
               <>
              <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv-2" key={id}>
              <i className={`fontawesome ${logo}`}></i>
                <h2 className="sub-heading">{title}</h2>
                <p className="main-hero-para">{info}</p>
              </div>
              </>
             );
           })
         } 
         </div>
       </div>
     </section> 
    </>
  )
}

export default Services
