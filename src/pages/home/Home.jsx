import { Button } from "@mui/material";
import { useGlitch } from "react-powerglitch";
import "../../index.css";
import { red } from "@mui/material/colors";

const color = red[500];

export const Home = () => {
  const glitch = useGlitch({
    timing: { duration: 7000 },
    glitchTimeSpan: { start: 0.76, end: 0.85 },
    shake: { velocity: 10, amplitudeX: 0.15, amplitudeY: 0.04 },
  });
  return (
    <div>
      <h1 ref={glitch.ref}>Del Monte</h1>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#616161",
          ":hover": { backgroundColor: "#757575" },
        }}
      >
        ir a la app
      </Button>
    </div>
  );
};
