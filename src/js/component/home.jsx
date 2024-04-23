import React from "react";
import  Button from "./button";
import Card from "./card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

let person = {
	  "name": "Yvener",
}

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello {
				person.name === 'Yvener' ? person.name : "unknown"
			}!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<div>
				<Button />
			</div>
			<div>
				<div className="row">
					<div className="col-3"><Card /></div>
					<div className="col-3"><Card /></div>
					<div className="col-3"><Card /></div>
					<div className="col-3"><Card /></div>
				</div>
			</div>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
