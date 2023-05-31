import { motion, useIsPresent } from "framer-motion";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
export function Home() {
  const isPresent = useIsPresent();
  return (
    <main>
<ul>
        <li>
          <Link to="/amsterdam">Amsterdam Zuid nightwalk</Link>
        </li>
        <li>
          <Link to="/london">White lines of Canary Wharf</Link>
        </li>
      </ul>
        home
    </main>
  );
}
