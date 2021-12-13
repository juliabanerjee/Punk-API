import React from "react";


const SearchBox = (props) =>{

  const {handleSearchChange} = props;
  return(
    <>
<input type="search" name="" id="" className="searchbox" onChange={handleSearchChange}/>
  
</>
  )
}

export default SearchBox;