import React from 'react'
import status from  '../img/historia.jpg';
const Status = () => {
    return (
        <div className="Carousel">
        <div className="Carousel-List">
        {[...Array(9)].map((x, i) =>
           <div className="Carousel-Item" key={i}>
           <div className="Carrousel-Item-img">
             <img src={status} alt="Status" />
           </div>
           <div>
             <p>Nombre</p>
           </div>
         </div>
        )}

        </div>
    </div>
    )
}

export default Status
