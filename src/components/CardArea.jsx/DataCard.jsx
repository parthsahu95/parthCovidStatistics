import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function DataCard({ heading, hdColor }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" color={hdColor} gutterBottom>
            {heading}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            (10.00%)
          </Typography>
          <Typography variant="body2">Number of cases.</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
