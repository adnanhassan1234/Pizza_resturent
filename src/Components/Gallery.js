import React from 'react';

const Gallery = (props) => {
    return (
        <>
            <div className="col-lg-3 col-md-6 m-0 p-0">
                <div className="full">
                    <img src={props.image} alt="" width="100%" />
                </div>
            </div>
        </>
    )
}

export default Gallery;