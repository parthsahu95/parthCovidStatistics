import { Divider, Stack, Box } from "@mui/material";
import React from "react";
import DataCard from "./DataCard";

const CardArea = () => {
  return (
    <Box sx={{ px: 3 }}>
      <Stack
        justifyContent="center"
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <DataCard heading="Active" hdColor="primary" />
        <DataCard heading="Recovered" hdColor="green" />
        <DataCard heading="Deceased" hdColor="red" />
      </Stack>
    </Box>
  );
};

export default CardArea;
