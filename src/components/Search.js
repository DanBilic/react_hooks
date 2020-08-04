import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  //console.log(results);

  //the callback function passed to UseEffect can't be marked as async
  //so only can use await with a workarounf
  useEffect(() => {
    //wait 5ms before firing query
    const timeoutId = setTimeout(() => {
      //IFFE -> workaround to use await in useEffect
      if (term) {
        (async () => {
          const { data } = await axios.get(
            "https://en.wikipedia.org/w/api.php",
            {
              params: {
                action: "query",
                list: "search",
                origin: "*",
                format: "json",
                srsearch: term,
              },
            }
          );

          setResults(data.query.search);
        })();
      }
    }, 500);

    //useEffect cleanup function
    //returns function after intial component render
    //calls returned function every time before new call of useEffect
    return () => {
      clearTimeout(timeoutId);
    };

    // alternative mit Promises
    // axios.get("").then((response) => {
    //   console.log(response.data);
    // });
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="rigth floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {result.snippet}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
