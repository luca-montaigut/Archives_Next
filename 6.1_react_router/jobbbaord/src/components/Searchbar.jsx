import React, { useState, useEffect } from "react";
import Search from "../images/search.svg";

const search = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1em",
  paddingRight: "1em",
  paddingTop: "5px",
  paddingBottom: "5px",
  border: "2px solid #000",
  borderRadius: "25em",
  maxWidth: "25vw",
};

const Searchbar = ({ getJob }) => {
  const [suggest, setSuggest] = useState([]);
  const [lastSearch, setLastSearch] = useState([]);

  const launchSearch = (e) => {
    if (e.charCode === 13) {
      console.log("coucou");
      return;
    }
    if (e.type === "click") {
      document.getElementById("search").value = e.currentTarget.innerHTML;
      setLastSearch([...lastSearch, e.currentTarget.innerHTML]);
      return;
    }
  };

  useEffect(() => {
    console.log(lastSearch);
  }, [lastSearch]);

  const handleChange = (e) => {
    if (e.currentTarget.value.length > 2) {
      fetch(
        `http://api.dataatwork.org/v1/jobs/autocomplete?begins_with=${e.currentTarget.value}`
      )
        .then((response) => response.json())
        .then((response) => {
          setSuggest([]);
          console.log(response);
          if (response.error) {
            console.log(response.error.message);
            return;
          }
          response.map((job) => {
            setSuggest((suggest) => [...suggest, job]);
          });
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div id="searchbar" style={search}>
        <img src={Search} />
        <input
          type="text"
          id="search"
          defaultValue=""
          placeholder="Find a dream job... or not"
          style={{ width: "85%", border: "none", padding: "0.6em" }}
          onChange={handleChange}
          onKeyPress={launchSearch}
        />
      </div>
      {suggest.length > 0 && (
        <ul>
          {suggest.slice(0, 10).map(({ uuid, suggestion }) => (
            <li key={uuid} data-uuid={uuid} onClick={launchSearch}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      {lastSearch.length > 0 && <p>Your shitty search:</p>}
      {lastSearch.length > 0 && lastSearch.map((last) => <li>{last}</li>)}
    </>
  );
};

export default Searchbar;
