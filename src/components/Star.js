import React, { useState } from 'react';

const Star = ({value}) => {
    
    const [star, setStar] = useState(Number(value))
    
    // variable for red star
    const starGrey =   <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/>
                       </svg>
    
    // variable for grey star
    const starRed =  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060"/>
                     </svg>
    
    const arrayStar = [];
    
    // add te redStar in the array 
    for(let i = 0; i < star ; i++){
       arrayStar.push(starRed)
      
    }
    // add the gray star to complete the five-star rating
    if(arrayStar.length < 5){
        for(let i = arrayStar.length ; i < 5 ; i++){
            arrayStar.push(starGrey)
        }
    }
    
    return (
        <div>
          {arrayStar.map((s,index) => (
            <span key={index}>{s}</span>
          ))}
        </div>
    );
};

export default Star;