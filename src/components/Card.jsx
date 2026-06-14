import { useState } from 'react'

const Card = (props) =>{
    const [front, setFront] = useState(true);

    const display =()=>{
        setFront(!front);

       
    };


    return(
        <div className='border' onClick={display}>
            <div className="card" style = {{backgroundColor:props.theColor}} id ={String(front)}></div>
            <p id={String(!front)}>smth</p>

        </div>
    );
};

export default Card;