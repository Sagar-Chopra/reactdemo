import React from 'react';
import { NavLink } from 'react-router-dom';


const Error404 = () => {
  return (
    <>
     <div id="notfound">
        <div className="notfound container text-center d-flex justify-content-center align-items-center">
          <div className="notfound-404">
            <h1>404</h1>
            <h2>WE ARE SORRY, PAGE NOT FOUND</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente beatae numquam ratione quod id blanditiis aspernatur itaque. Facere dicta explicabo repellat laboriosam.</p>
            <NavLink to="/">Back To Home</NavLink>
          </div>
          
        </div>
     </div>
    </>
  )
}

export default Error404
