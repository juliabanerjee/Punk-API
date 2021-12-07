import React from "react";
import './App.scss';

import SideNav from "./components/SideNav/SideNav";
import BeerCard from "./components/BeerCard/BeerCard";
import CardList from "./components/CardList/CardList"

import beers from "./data/data.js";

const App = () =>{
  

  return (
    <>
    <div className="App">
    <section>
        <SideNav/>
    </section>
      <section className="beerCards">
<BeerCard photo = {beers[0].image_url} name = {beers[0].name} tagline = {beers[0].tagline} brewDate = {beers[0].first_brewed}/>
      </section>
      <section>
        <CardList/>
      </section>
    </div>

    </>
  );
}

export default App;
