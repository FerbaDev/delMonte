import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div>
      <h1>Error 420</h1>
      <p>Este sitio se está armando</p>
      <Link to={-1}>
        <Button variant="contained">volver</Button>
      </Link>
    </div>
  );
};
