import React from "react";
import './App.scss';

import SideNav from "./components/SideNav/SideNav";
import BeerCard from "./components/BeerCard/BeerCard";
import CardList from "./containers/CardList/CardList"
import Main from "./components/Main/Main";

import beers from "./data/data.js";

const App = () =>{
  

  return (
    <>
    <div className="App">
    <section>
        <SideNav/>
    </section>
      
      <section>
        <Main />
      </section>
    </div>

    </>
  );
}

export default App;
