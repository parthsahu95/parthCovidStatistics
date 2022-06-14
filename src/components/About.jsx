import React from "react";
import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="sm">
      <ul>
        <li>
          <Typography variant="h6">
            This is a Covid India Statistics website made using ReactJS and
            Express.
          </Typography>
        </li>
        <li>
          <Typography variant="h6">
            The Github link for the repo:{" "}
            <a href="https://github.com/parthsahu95/parthCovidStatistics">
              {" "}
              Covid Stats India
            </a>
          </Typography>
        </li>
        <li>
          <Typography variant="h6">
            Data is being fetched from:{" "}
            <a href="https://www.mohfw.gov.in/">www.mohfw.gov.in</a>
          </Typography>
        </li>
      </ul>

      <br />
    </Container>
  );
};

export default About;
