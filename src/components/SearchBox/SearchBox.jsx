import React from "react";

import Searching from "../../containers/Searching/Searching"

const SearchBox = (props) =>{

  const {handleSearchChange} = props;
  return(
    <>
<input type="search" name="" id="" className="searchbox" onChange={handleSearchChange}/>
  
</>
  )
}

export default SearchBox;