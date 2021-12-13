import React, {useState} from "react";
import './App.scss';

import SideNav from "./components/SideNav/SideNav";
import BeerCard from "./components/BeerCard/BeerCard";
import CardList from "./containers/CardList/CardList"
import Main from "./components/Main/Main";

import mockData from "./data/data.js";

const App = () =>{
  
  const [mockArr, setMockArr] = useState(mockData);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(mockData)

  const handleSearchChange = event =>{
    
    const textInput = event.target.value.toLowerCase()
    console.log(textInput);
    
   setSearchTerm(textInput) 
   
  //  console.log(setMockArr)
  //return handleSearchChange
  }
  
  const filteredArr = mockArr.filter(beer => {
    const lowerCaseBeer = beer.name.toLowerCase()

  return lowerCaseBeer.includes(searchTerm)

  })

  return (
    
    <div className="App">
    <section>
        <SideNav handleSearchChange ={handleSearchChange}/>
    </section>
      
      <section>
        <Main beers={filteredArr} />
      </section>
    </div>

    
  );
}

export default App;
