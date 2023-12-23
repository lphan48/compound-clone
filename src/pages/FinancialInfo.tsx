import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../styles/colors";

const fontTheme = createTheme({
  typography: {
    h1: {
      color: colors.blueBold,
      fontSize: "20px",
      fontWeight: "800",
      lineHeight: 1.3333,
      fontFamily: "Manrope, sans-serif",
    },
    h2: {
      color: colors.navy,
      fontSize: "31px",
      fontWeight: "550",
      lineHeight: 1.3333,
      fontFamily: "Manrope, sans-serif",
    },
    h3: {
      color: colors.navy,
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: 1.3333,
      fontFamily: "Manrope, sans-serif",
    },
  },
});

export default function FinancialInfo() {
  return (
    <div>
      <Box
        style={{
          backgroundColor: colors.crisp,
          width: "100%",
          height: "20vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      ></Box>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          width: "100%",
          marginTop: "4%",
        }}
      >
        <ThemeProvider theme={fontTheme}>
          <Typography variant="h2">
            Tell us a little more about your financial personality
          </Typography>
        </ThemeProvider>
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: "5%",
        }}
      >
        <ThemeProvider theme={fontTheme}>
          <Typography variant="h3">Financial Information</Typography>
        </ThemeProvider>
        <ThemeProvider theme={fontTheme}>
          <Typography variant="h3">My Financial Interests</Typography>
        </ThemeProvider>
      </div>
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
