import { useEffect, useState } from "react";

import "./App.css";
import { fetchDataFromApi } from "./utils/api.js";
import { useFetcher } from "react-router-dom";

function App() {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
    });
  };

  return <div>app</div>;
}

export default App;
