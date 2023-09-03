import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div>
      <h1>Error 420</h1>
      <p>Este sitio se está armando</p>
      <Link to={-1}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#616161",
            ":hover": { backgroundColor: "#757575" },
          }}
        >
          volver
        </Button>
      </Link>
    </div>
  );
};
