import React from 'react'

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
              <h1 className="display-2">Lorem ipsum dolor sit <br /> amet consectetur.</h1>
              <p className="main-hero-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam impedit omnis praesentium nihil pariatur, veniam quos rerum quae dolorum autem delectus, nesciunt dignissimos voluptates, tempora eaque dolores minima voluptatibus eos!
              </p>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <div className="input-group mt-3">
                <input type="text" className="rounded-pill w-50 w-lg-75 me-3 p-2 form-control-text" placeholder="Enter Your Email"/>
                <div className="input-group-button">
                  get it now
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                <img src="./images/react2.jpg" alt="react-1" className="img-fluid"/>
                <img src="./images/react.jfif" alt="react-2" className="img-fluid main-hero-img2"/>
              </div>
          </div>
        </section>
      </header>
    </>
  )
}

export default Header
