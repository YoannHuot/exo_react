import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
	/* BrowserRouter route l'ensemble des routes
  Switch test les routes
  Routes, c'est les routes
  Path = chemin
  Exact permet de dire qu'on veut que le chemin soit URL soit précisément ce qu'il y a dans le Path, c'est à dire que le path / correspond à Home
  Si je ne mets pas de / celà veut dire que c'est une page qui n'existe pas dans l'URL donc, not found
  Il correspond au chemin vers les component qui s'appelle ... */

	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/a-propos" component={About} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
