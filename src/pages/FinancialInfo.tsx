import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function FinancialInfo() {
  return (
    <div>
      <h1>Financial Info</h1>
      <Button
        component={Link}
        to="/register"
        variant="contained"
        color="primary"
      >
        Back
      </Button>
      <Button
        component={Link}
        to="/complete"
        variant="contained"
        color="primary"
      >
        Next
      </Button>
    </div>
  );
}
