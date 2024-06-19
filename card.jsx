import React from "react";

const Card = ({src , title , alt , description}) => {
    return(
        <>
        <div className="card-item">
            <img src={src} alt={alt} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        </>
    )
}

export default Card