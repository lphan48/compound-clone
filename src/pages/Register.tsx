import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../styles/colors";
import star from "../images/star.jpeg";
import purpleCrowdfunding from "../images/purpleCrowdfunding.jpeg";
import orangeCrowdfunding from "../images/orangeCrowdfunding.jpeg";
import yellowCrowdfunding from "../images/yellowCrowdfunding.jpeg";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

export default function Register() {
  return (
    <div>
      <Box
        style={{
          backgroundColor: colors.crisp,
          width: "100%",
          height: "10vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "2%" }}
        >
          <img
            src={star}
            alt="star"
            style={{ width: "3%", height: "100%", marginRight: "10px" }}
          />
          <ThemeProvider theme={fontTheme}>
            <Typography variant="h1">Compound</Typography>
          </ThemeProvider>
        </div>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "calc(90vh - 10vh)",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "31%",
            margin: "auto",
          }}
        >
          <img
            src={purpleCrowdfunding}
            alt="purple guy"
            style={{
              position: "absolute",
              top: "40%",
              left: "7%",
              width: "15%",
              height: "23%",
            }}
          />
          <img
            src={orangeCrowdfunding}
            alt="purple guy"
            style={{
              position: "absolute",
              top: "20%",
              right: "7%",
              width: "15%",
              height: "20%",
            }}
          />
          <img
            src={yellowCrowdfunding}
            alt="purple guy"
            style={{
              position: "absolute",
              top: "65%",
              right: "7%",
              width: "18%",
              height: "22%",
            }}
          />
          <ThemeProvider theme={fontTheme}>
            <Typography variant="h2">
              Your start to financial literacy.
            </Typography>
          </ThemeProvider>
          <div
            style={{
              textAlign: "left",
              width: "100%",
              marginBottom: "10px",
              marginTop: "25px",
            }}
          >
            <ThemeProvider theme={fontTheme}>
              <Typography variant="h3">Email address</Typography>
            </ThemeProvider>
            <TextField
              fullWidth
              id="filled-search"
              label="Enter email address"
              type="search"
              variant="filled"
              InputProps={{
                disableUnderline: true,
                sx: { borderRadius: "10px", marginTop: "5px" },
              }}
            />
          </div>
          <div
            style={{
              textAlign: "left",
              width: "100%",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            <ThemeProvider theme={fontTheme}>
              <Typography variant="h3">Password</Typography>
            </ThemeProvider>
            <TextField
              fullWidth
              id="filled-search"
              label="Enter password"
              type="search"
              variant="filled"
              InputProps={{
                disableUnderline: true,
                sx: { borderRadius: "10px", marginTop: "5px" },
              }}
            />
          </div>
          <div
            style={{
              marginTop: "10px",
              textAlign: "left",
              width: "100%",
              marginBottom: "10px",
            }}
          >
            <Button
              component={Link}
              to="/financialinfo"
              variant="contained"
              color="primary"
              fullWidth
              style={{
                height: "45px",
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              Sign Up Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
