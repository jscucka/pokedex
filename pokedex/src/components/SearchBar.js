import React from "react";
import "../Styles/SearchBar.css";
const SearchBar = (props) => {
  return(
    <div className="finder">
      <input type="text" onChange={props.handleChange} form="form" required></input>
      <button type="submit" form="form">Find</button>
      </div>
  )
}

export default SearchBar;