import React from 'react'

const Aboutus = () => {
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src="./images/react.jfif" alt="aboutus" />
            </div>

            <div className="col-12 col-lg-7 our-service-list">
              <h3 className='mini-title'>
                -- AVAILABLE FOR BUILD SINGLE PAGE WEBSITE
              </h3>
              <h1 className="main-heading">How To make a website</h1>
              <div className="row our-services-info">
                <div className="col-1 our-services-number">1</div>
                <div className="col-10 our-services-data">
                  <h2>Sign In</h2>
                  <p className="main-hero-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolores placeat tenetur dolore reiciendis quae culpa iusto temporibus iure esse vero cupiditate aut. Veniam id corporis animi eaque, perferendis quam!</p>
                </div>
              </div>
              <button className="btn-style btn-style-border">Learn More</button>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutus
