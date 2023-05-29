
import React from 'react';

import "../../styles/Card.css"

function Card () {
    return ( 

<div className='container'>
    <form action="">
        <div className='inputBox'>
            <span>Card Number</span>
            <input type="text" maxLength={"16"} className='card-number-input'/>  
        </div>
        <div className='inputBox'>
            <span>card holder</span>
            <input type="text" className='card-holder-input'/> 
        </div>
        <div className="flexbox">
            <div className="inputbox">
            <span>expiration mm</span>
                <select name="" id="" className='month-input'>
                <option value = "month" selected disabled>month</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>

                </select>
            </div>
            <div className="inputbox">
            <span>expiration yy</span>
                <select name="" id="" className='year-input'>
                <option value = "year" selected disabled>year</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
                <option value="2031">2031</option>
                

                </select>
            </div>
            <div className="inputbox">
            <span>cvv</span>
            <input type="text" maxLength={"4"} className='cvv-input'/>
            </div>
        </div>
        <input type='submit' value='submit' className='submit-btn'/>
    </form>
</div>
     );
}

export default Card;
