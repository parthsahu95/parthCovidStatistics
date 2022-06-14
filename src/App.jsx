import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import CardArea from "./components/CardArea.jsx/CardArea";
import About from "./components/About";
import DataTable from "./components/DataTable";
import { Stack } from "@mui/material";
import Map from "./components/Map";
import axios from "axios";

function App() {
  let [covidData, setCovidData] = useState("");
  let [currentPage, setCurrentPage] = useState("Home");
  useEffect(() => {
    async function getData() {
      const response = await axios.get("http://localhost:4242/data");
      await setCovidData(response.data);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "About" ? (
        <About />
      ) : (
        <>
          <CardArea covidData={covidData} />
          <Stack direction={{ xs: "column", sm: "column", md: "row" }}>
            <DataTable covidData={covidData} />
            <Map covidData={covidData} />
          </Stack>
        </>
      )}
    </div>
  );
}

export default App;
