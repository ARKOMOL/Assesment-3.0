import React from 'react';
import trophy from './asserts/1.png'
import persons from './asserts/2.png'

const Body = () => {
    return (
        <div style={{"display":"flex","alignContent":"center"}}>
            <div>
                <img width={250} src={trophy} alt="" />
            </div>

            <div>
                <div>
                    <h2>
                        C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
                    </h2>
                    <ul>
                        <li>
                            C.R.I's energy efficient products are well recognized by various Government instittions,as trustworthy products for various projects across the globe to save energy.
                        </li>
                        <li>
                            C.R.I is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with LoT enabled control panel.
                        </li>
                    </ul>
                </div>

            <img width={550} src={persons} alt="" />
            <p>
                Government of India has awarded the <span>
                    "National Energy Conservation Award 2018".
                </span> Mr. G. Selvaraj, joint Managing Director of C.R.I.Group received the award from Smt. Sumitra Mahajan, Speker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
            </div>
        </div>
        
    );
};

export default Body;