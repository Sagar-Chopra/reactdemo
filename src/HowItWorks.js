import React from 'react';
import { useState } from 'react/cjs/react.development';
import Workapi from './WorkAPI';

const HowItWorks = () => {

  const [workdata, serWorkData] = useState(Workapi);
  console.log(Workapi);

  return (
    <>
      <section className="work-container container">
        <h1 className="main-heading text-center">How Does It Work</h1>
        <div className="row">
        {
          Workapi.map((curElement) =>{
            return (
              <>
              <div className="col-12 col-lg-4 text-center work-container-subdiv">
                <i className={`fontawesome ${curElement.logo}`}></i>
                <h2 className="sub-heading">{curElement.title}</h2>
                <p className="main-hero-para w-100">{curElement.info}</p>
              </div>
              </>
            )
          })
        }
        </div>
      </section>
    </>
  )
}

export default HowItWorks
