import React from 'react';
import '../../css/Topbar.css';

const Topbar = () => {
    return (
        <>
        <div className="topbar">
            <div className="left pt-1">
                <p className="text-center text-light" >A procedding co-education school for pre-kindergarten through 10th grade</p>
            </div>
            <div className="right p-2">
                <p className="text-light"><i className='fas fa-map-marker-alt' style={{'fontSize':'20px', 'paddingRight':'10px'}}></i> Location</p> 
                <p className="text-light"><i className='fas fa-headphones-alt' style={{'fontSize':'20px', 'paddingLeft':'10px'}}></i> (+91)-(6901313297)</p>
            </div>
        </div>
        </>
    );
};

export default Topbar;