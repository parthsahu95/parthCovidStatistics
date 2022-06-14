import { useEffect, useState } from "react";
import { Card, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "S. No.", width: 90 },
  {
    field: "state",
    headerName: "Name of State / UT",
    width: 200,
  },
  {
    field: "active",
    headerName: "Active Cases",
    width: 150,
  },
  {
    field: "recovered",
    headerName: "Recovered",
    type: "string",
    width: 110,
  },
  {
    field: "deceased",
    headerName: "Deceased",
    type: "string",
    width: 110,
  },
];

//   [
//   {
//     id: 1,
//     name: "Andaman and Nicobar Islands",
//     active: "32",
//     recovered: 35,
//     deceased: 40,
//   },
//   {
//     id: 2,
//     state: "Andhra Pradesh",
//     active: "Jon",
//     recovered: 35,
//     deceased: 40,
//   },
//   {
//     id: 3,
//     state: "Arunachal Pradesh",
//     active: "Jon",
//     recovered: 35,
//     deceased: 40,
//   },
//   { id: 4, state: "Assam", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 5, state: "Bihar", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 6, state: "Chandigarh", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 7, state: "Chhattisgarh", active: "Jon", recovered: 35, deceased: 40 },
//   {
//     id: 8,
//     state: "Dadra and Nagar Haveli and Daman and Diu",
//     active: "Jon",
//     recovered: 35,
//     deceased: 40,
//   },
//   { id: 9, state: "Delhi", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 10, state: "Goa", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 11, state: "Gujarat", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 12, state: "Haryana", active: "Jon", recovered: 35, deceased: 40 },
//   {
//     id: 13,
//     state: "Himachal Pradesh",
//     active: "Jon",
//     recovered: 35,
//     deceased: 40,
//   },
//   {
//     id: 14,
//     state: "Jammu and Kashmir",
//     active: "Jon",
//     recovered: 35,
//     deceased: 40,
//   },
//   { id: 15, state: "Jharkhand", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 16, state: "Karnataka", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 17, state: "Kerala", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 18, state: "Ladakh", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 19, state: "Lakshadweep", active: "Jon", recovered: 35, deceased: 40 },
//   {
//     id: 20,
//     state: "Madhya Pradesh",
//     active: "Jon",
//     recovered: 35,
//     deceased: 40,
//   },
//   { id: 21, state: "Maharashtra", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 22, state: "Manipur", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 23, state: "Meghalaya", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 24, state: "Mizoram", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 25, state: "Nagaland", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 26, state: "Odisha", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 27, state: "Puducherry", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 28, state: "Punjab", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 29, state: "Rajasthan", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 30, state: "Sikkim", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 31, state: "Tamil Nadu", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 32, state: "Telangana", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 33, state: "Tripura", active: "Jon", recovered: 35, deceased: 40 },
//   { id: 34, state: "Uttarakhand", active: "Jon", recovered: 35, deceased: 40 },
//   {
//     id: 35,
//     state: "Uttar Pradesh",
//     active: "Jon",
//     recovered: 35,
//     deceased: 40,
//   },
//   { id: 36, state: "West Bengal", active: "Jon", recovered: 35, deceased: 40 },
//   { id: "", state: "Total", active: "Jon", recovered: 35, deceased: 40 },
// ];

export default function DataTable({ covidData }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const rowArray = (covidData.state || []).map((state, i) => {
      return {
        id: i,
        state: state.name,
        active: state.active_total,
        recovered: state.cured_discharged_migrated_cumulative,
        deceased: state.deaths_cumulative,
      };
    });
    setRows([...rowArray]);
  }, [covidData]);

  return (
    <Box sx={{ px: 3, mb: 3, width: { xs: "680", sm: "680", md: "100%" } }}>
      <Card sx={{}}>
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
        />
      </Card>
    </Box>
  );
}
