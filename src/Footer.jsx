import React from 'react';
import { BsFillTelephoneFill,BsFacebook,BsGlobe } from 'react-icons/bs';

const Footer = () => {
    return (
        <div style={{"display":"flex","itemsAlign":"center","justifyItems":"center","background":"red","padding":"40px"}} >
            <div>
            <BsFillTelephoneFill/> Toll Free 1800 200 1234
            </div>
            <div>
            <BsFacebook/> www.facebook.com/cripumps
            </div>
             <div>
             <BsGlobe/> www.crigroups.com
            </div>
        </div>
    );
};

export default Footer;