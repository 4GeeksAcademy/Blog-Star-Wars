import React from "react";
import PropTypes from "prop-types";


export const Card = props => {

    return (
        <div className="me-3 my-3 rounded" >
            <div className="card" style={{width: "18rem"}}>
            <img className="rounded-top" src={props.id === "1" ? props.type === "planets" ? "https://starwars-visualguide.com/assets/img/placeholder.jpg" : "https://starwars-visualguide.com/assets/img/"+ props.type + "/" + props.id + ".jpg" : "https://starwars-visualguide.com/assets/img/"+ props.type + "/" + props.id + ".jpg"} />

                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <div className="d-flex justify-content-between">
                        <a href="#" className="btn btn-primary">Learn more!</a>

                        <span className="btn btn-outline-warning">
                            <i className="fa-regular fa-heart"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

};

Card.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string
};





