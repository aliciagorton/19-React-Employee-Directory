import React, { useContext } from "react";
import "./searchBox.css";
import DataAreaContext from "../../utils/DataAreaContext";

function SearchBox({ handleSearchChange }) {
  const context = useContext(DataAreaContext);
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => context.handleSearchChange(e)}
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
export default SearchBox;