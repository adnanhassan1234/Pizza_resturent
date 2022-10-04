import React, { useState } from 'react';
import CardItem from '../CardItem';
import CardList from '../CardList';
import MenuBar from "../Components/MenuBar";


const Menu = () => {

 

  return (
    <>   
   
             {/* ================ menu_section =================== */}
             <div className="menu_section pb-5" >   <br /> <br /><br /> <br /><br /> <br />
                <div className="container">
                    <div className="title text-center">
                        <h2>OUR MENU</h2>
                    </div>
                    <div className="row" style={{ marginTop: '55px' }}>
                        {
                            CardList.map((data, index) => {
                                return (
                                    <CardItem
                                        key={index}
                                        image={data.image}
                                        title={data.title}
                                        des={data.des}
                                        price={data.price}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
    </>
  )
}

export default Menu;