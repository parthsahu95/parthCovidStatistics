import React, { useState, useEffect } from "react";
import "./Map.css";

import DatamapsIndia from "react-datamaps-india";
import { Box } from "@mui/material";

const Map = ({ covidData }) => {
  const [regionData, setRegionData] = useState([]);

  useEffect(() => {
    const dataObj = {};

    (covidData.state || []).forEach((state, i) => {
      dataObj[state.name] = {
        value: state.active_total,
        recovered: state.cured_discharged_migrated_cumulative,
        deceased: state.deaths_cumulative,
      };
    });

    setRegionData({ ...dataObj });
  }, [covidData]);

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <DatamapsIndia
        // regionData={{
        //   Maharashtra: {
        //     value: "10",
        //   },
        // }}
        regionData={regionData}
        hoverComponent={({ value }) => {
          return (
            <div style={{ pointerEvents: "none" }}>
              <b>
                <p>{value.name}</p>
              </b>
              <p>Active: {value.value}</p>
              <p>Recovered: {value.recovered}</p>
              <p>Deceased: {value.deceased}</p>
            </div>
          );
        }}
        mapLayout={{
          title: "",
          legendTitle: "Active Cases",
          startColor: "#FFDAB9",
          endColor: "#FF6347",
          hoverTitle: "Count",
          noDataColor: "white",
          borderColor: "#8D8D8D",
          hoverBorderColor: "#8D8D8D",
          hoverColor: "green",
        }}
      />
    </Box>
  );
};

export default Map;
