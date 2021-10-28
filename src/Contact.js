import React from 'react'

const Contact = () => {
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div class="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">Connect with our sales team.</h1>
                  <p className="main-hero-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laudantium aliquam a labore maiores in at autem ipsum optio id.</p>
                  <figure>
                    <img src="./images/react2.jpg" alt="contactus" className="img-fluid"/>
                  </figure>
                </div>
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 col-lg-6 contact-input-field">
                          <input type="text" name="" id="" className="form-control" placeholder="First Name"/>
                        </div>
                        <div className="col-12 col-lg-6 contact-input-field">
                          <input type="text" name="" id="" className="form-control" placeholder="First Name"/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-6 contact-input-field">
                          <input type="text" name="" id="" className="form-control" placeholder="Phone Number"/>
                        </div>
                        <div className="col-12 col-lg-6 contact-input-field">
                          <input type="text" name="" id="" className="form-control" placeholder="Email Id"/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <input type="text" className="form-control contact-input-field"  placeholder="Add Address"/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <input type="text" className="form-control" placeholder="Enter Your Message"/>
                        </div>
                      </div>
                      <div className="form-check form-checkbox-style">
                        <input  className="form-check-input" type="checkbox" value="" id="flexCheckCheckout"/>
                        <label htmlFor="flexCheckCheckout" className="form-check-label"><p className="main-hero-para">I agree to the term and condition*</p></label>
                      </div>
                      <button type="submit" className="btn btn-style w-100">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
