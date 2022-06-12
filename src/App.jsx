import "./App.css";
import Header from "./components/Header";
import CardArea from "./components/CardArea.jsx/CardArea";
import DataTable from "./components/DataTable";
import { Box, Card, Stack } from "@mui/material";
import Map from "./components/Map";

function App() {
  return (
    <div class="App">
      <Header />
      <CardArea />
      <Stack direction="row">
        <DataTable />

        <Box sx={{ width: 300 }}>
          <Card>
            <Map />
          </Card>
        </Box>
      </Stack>
    </div>
  );
}

export default App;
