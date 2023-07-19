import React, { useContext} from "react";
import { Link } from "react-router-dom";
import Logo_Star_Wars from "../../img/Star_Wars-logo.png"
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context);
	const favoritesMap = store.favorites;


	return (
		<nav className="navbar navbar-light mb-5 fixed-top" style={{background: "black", borderBottom: "2px solid yellow"}}>
			<span>
				<img className=" ms-5" style={{height: "90px", width: "120px"}} src={Logo_Star_Wars} />
			</span>
			<div className="me-5">
				<div className="dropdown">
					<button className="btn btn-warning dropdown-toggle me-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
						<span className="btn btn-warning text-light">{favoritesMap.length > 0 ? favoritesMap.length : " " }</span>
					</button>
					<ul className="dropdown-menu">
						{favoritesMap.map((item, i) => (<li key={i} className="dropdown-item d-flex justify-content-between">
							{item}
							<span onClick={() => actions.deleteFavorite(item)}>
								<i className="fa-solid fa-trash " style={{cursor: "pointer"}}></i>
							</span>
						</li>))}

						
					</ul>
				</div>
			</div>
		</nav>
	);
};
