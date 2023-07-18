import React from "react";
import { Link } from "react-router-dom";
import Logo_Star_Wars from "../../img/Star_Wars-logo.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<span>
				<img className=" ms-5" style={{height: "90px", width: "120px"}} src={Logo_Star_Wars} />
			</span>
			<div className="me-5">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle me-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
