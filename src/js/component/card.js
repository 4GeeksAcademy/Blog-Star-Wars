import React, {useContext, useState} from "react";
import { Link, Navigate, Route, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext"
import PropTypes from "prop-types";



export const Card = props => {

    const { actions, store } = useContext(Context);

    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        if (!isFavorite) {
            actions.addFavorites(props.name);
        }
    }

    return (
        <div className="me-3 my-3 rounded" >
            <div className="card" style={{width: "18rem"}}>
            <img className="rounded-top" src={props.id === "1" ? props.type === "planets" ? "https://starwars-visualguide.com/assets/img/placeholder.jpg" : "https://starwars-visualguide.com/assets/img/"+ props.type + "/" + props.id + ".jpg" : "https://starwars-visualguide.com/assets/img/"+ props.type + "/" + props.id + ".jpg"} />

                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <div className="d-flex justify-content-between">
                        <Link  className="btn btn-outline-primary" to={props.route}>Learn more!
                        </Link>

                        <span className="btn btn-outline-warning" onClick={toggleFavorite}>
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
    id: PropTypes.string,
    route: PropTypes.string
};





