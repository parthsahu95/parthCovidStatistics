import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function DataCard({ heading, hdColor, number }) {
  const headingWords = heading.split(" ");

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" color={hdColor} gutterBottom>
            {headingWords[0]}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color={hdColor}>
            {headingWords[1]}
          </Typography>
          <Typography>{number}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
