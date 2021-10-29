import React, {useState} from 'react';

const Contact = () => {
  const[userData, setUserData] = useState({
    firstName:'',
    lastName:'',
    phone:'',
    email:'',
    address:'',
    message:'',
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({...userData, [name]:value});
  };

  // connect with firebase

  const submitData = async (event) => {
    event.preventDefault();
    const {firstName, lastName, phone, email, address, message} = userData;

    if(firstName && lastName && phone && email && address && message){
    const res = await fetch('https://reactfirebasewebsite-f7add-default-rtdb.firebaseio.com/userDataRecords.json',
    {
      method: "POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body:JSON.stringify({firstName, lastName, phone, email, address, message}),
    }
    );
    if(res){
      setUserData({
        firstName:'',
        lastName:'',
        phone:'',
        email:'',
        address:'',
        message:'',
      });
      alert('Data Stored');
    }else{
      alert('Please Fill The Data');
    }
  }else{
    alert('Please Fill The Data');
  }
  };

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
                          <input type="text" name="firstName" id="" className="form-control" placeholder="First Name" value={userData.firstName} onChange={postUserData}/>
                        </div>
                        <div className="col-12 col-lg-6 contact-input-field">
                          <input type="text" name="lastName" id="" className="form-control" placeholder="First Name" value={userData.lastName} onChange={postUserData}/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-6 contact-input-field">
                          <input type="text" name="phone" id="" className="form-control" placeholder="Phone Number" value={userData.phone} onChange={postUserData}/>
                        </div>
                        <div className="col-12 col-lg-6 contact-input-field">
                          <input type="text" name="email" id="" className="form-control" placeholder="Email Id" value={userData.email} onChange={postUserData}/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <input type="text" className="form-control contact-input-field" name="address"  placeholder="Add Address" value={userData.address} onChange={postUserData}/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <input type="text" className="form-control" name="message" placeholder="Enter Your Message" value={userData.message} onChange={postUserData}/>
                        </div>
                      </div>
                      <div className="form-check form-checkbox-style">
                        <input  className="form-check-input" type="checkbox" value="" id="flexCheckCheckout"/>
                        <label htmlFor="flexCheckCheckout" className="form-check-label"><p className="main-hero-para">I agree to the term and condition*</p></label>
                      </div>
                      <button type="submit" className="btn btn-style w-100" onClick={submitData}>Submit</button>
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
