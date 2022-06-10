import React from 'react';
import machine from './asserts/3.png';

const Machine = () => {
    return (
        <div>
            <h4>
                INSTALL OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE4 SAVING OF MORE THAN 9,000 MILLION UNIT OF POWER FOR THE NATION.
            </h4>
            <div>
                <img src={machine} alt="" />
                <h4 style={{"border-bottom":"solid ","border-color":"red"}} >
                    Valves-Pumps-Pipes-loT Drives & Controllers-Wires & Cables-Solar Systems-Motors
                </h4>
                <h5>
                    CHEMICALS & PROCESS |POWER|WATER & WASTE WATER|OIL & GAS|PHARMA|SUGARS & DISTILERIES|PAPER & PULP| MARINE & DEFENCE| METAL & MINING|FOOD & BEVERAGE|PETROCHEMICAL & REFINERIES|SOLAR|BUILDING|HVAC|FIRE FIGHTING|AGRICULTURE & RESIDENTIAL
                </h5>
            </div>
        </div>
    );
};

export default Machine;