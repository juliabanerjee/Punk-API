import React from "react";

import "./SideNav.scss";
import SearchBox from "../SearchBox/SearchBox";
import FilterList from "../FilterList/FilterList";

const SideNav = () =>{
  
  return(
    <>
    <div className="sidenav">

<SearchBox/>
  
<FilterList/>
    </div>
    </>
  );
};





export default SideNav;