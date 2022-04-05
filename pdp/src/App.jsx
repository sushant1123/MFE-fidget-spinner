import React from "react";
import ReactDOM from "react-dom";

//components from the other app
import Header from "home/Header";
import Footer from "home/Footer";
import SafeComp from "./components/SafeComp";

import "./index.css";

const App = () => (
	<div className="container">
		<SafeComp>
			<Header />
		</SafeComp>

		<div>Name: pdp</div>
		<div>Framework: react</div>
		<div>Language: JavaScript</div>
		<div>CSS: Empty CSS</div>

		<Footer />
	</div>
);
ReactDOM.render(<App />, document.getElementById("app"));
