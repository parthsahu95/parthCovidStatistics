import { Divider, Stack, Box, Container } from "@mui/material";
import React from "react";
import DataCard from "./DataCard";

const CardArea = () => {
  return (
    <Container>
      <Box sx={{ px: 3, mb: 3 }}>
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
    </Container>
  );
};

export default CardArea;
