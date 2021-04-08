import React from "react";
import { NavLink } from "react-router-dom";

// activeClassName = quand on ennonce la classe nav-active dans le css, on lui donne un style

const Navigation = () => {
	return (
		<div>
			<NavLink exact to="/" activeClassName="nav-active">
				Acceuil
			</NavLink>
			<NavLink exact to="/a-propos" activeClassName="nav-active">
				A propos
			</NavLink>
		</div>
	);
};

export default Navigation;
