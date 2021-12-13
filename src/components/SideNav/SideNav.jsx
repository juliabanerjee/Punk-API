import React from "react";

import "./SideNav.scss";
import SearchBox from "../SearchBox/SearchBox";
import FilterList from "../FilterList/FilterList";

const SideNav = (props) =>{
  
  const {handleSearchChange} = props;

  return(
    <>
    <div className="sidenav">

<SearchBox handleSearchChange={handleSearchChange}/>
  
<FilterList/>
    </div>
    </>
  );
};





export default SideNav;