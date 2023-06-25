import ScaleLoader from "react-spinners/ScaleLoader";
import { useState, CSSProperties } from "react";
const Loader = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#");
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <div style={{ marginTop: "200px" }}>
      <div className="sweet-loading text-center mt-5">
        <ScaleLoader
          color="#000"
          loading={loading}
          cssOverride=""
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader "
        />
      </div>
    </div>
  );
};

export default Loader;
