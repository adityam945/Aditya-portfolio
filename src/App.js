import logo from './logo.svg';
import './App.css';
// import "./styles.css";
import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import { Home } from "./pages/home";
import { One } from "./pages/one";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/one",
      element: <One />
    },
    
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
    <main>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          
          <Typography variant="h6" color="inherit" component="div">
          <ul>
        <li>
          <Link to="/amsterdam">Amsterdam Zuid nightwalk</Link>
        </li>
        <li>
          <Link to="/london">White lines of Canary Wharf</Link>
        </li>
      </ul>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </main>

      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default App;
