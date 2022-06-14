import { Divider, Stack, Box, Container } from "@mui/material";
import React from "react";
import DataCard from "./DataCard";

const CardArea = ({ covidData }) => {
  const colors = ["primary", "green", "red"];
  const cardData = (covidData.summary || []).map((data, i) => {
    return { ...data, hdColor: colors[i] };
  });

  return (
    <Container>
      <Box sx={{ px: 3, mb: 3 }}>
        <Stack
          justifyContent="center"
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          divider={<Divider orientation="vertical" flexItem />}
        >
          {cardData &&
            cardData.map((data) => {
              return (
                <DataCard
                  key={data.name}
                  heading={data.name}
                  hdColor={data.hdColor}
                  number={data.people}
                />
              );
            })}
        </Stack>
      </Box>
    </Container>
  );
};

export default CardArea;
