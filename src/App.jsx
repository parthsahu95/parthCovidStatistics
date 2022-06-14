import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import CardArea from "./components/CardArea.jsx/CardArea";
import DataTable from "./components/DataTable";
import { Stack } from "@mui/material";
import Map from "./components/Map";
import axios from "axios";

function App() {
  let [covidData, setCovidData] = useState("");
  useEffect(() => {
    async function getData() {
      const response = await axios.get("http://localhost:4242");
      await setCovidData(response.data);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <Header />
      <CardArea covidData={covidData} />
      <Stack direction={{ xs: "column", sm: "column", md: "row" }}>
        <DataTable covidData={covidData} />
        <Map covidData={covidData} />
      </Stack>
    </div>
  );
}

export default App;
