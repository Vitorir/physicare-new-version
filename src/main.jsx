import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes.jsx";
import "bulma/css/bulma.min.css";
import { ChakraProvider } from "@chakra-ui/react";
// import './assets/styles/globalStyles.css';
// import { ThemeProvider, createTheme} from "@mui/material";

// const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <ChakraProvider>
      <App />
    </ChakraProvider>
    {/* </ThemeProvider> */}
  </React.StrictMode>,
);
