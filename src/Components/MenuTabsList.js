import React from 'react';
import {Link } from 'react-router-dom';

const MenuTabsList = (props) => {
    return (
        <>
            <div className="col-lg-6 col-12  menu-item filter-starters" >
                <div className="full p-2 my-2 ">
                    <div className="menu-content">
                        <Link to="/menu">{props.name}</Link><span> <strong>{props.price}</strong> </span>
                    </div>
                    <div className="menu-ingredients">
                       {props.list}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuTabsList;