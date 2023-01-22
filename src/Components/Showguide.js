import { React } from "react";
import Dialog from "@mui/material/Dialog";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
function Showguide({ opendialog, closedialogbox }) {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <>
      <Dialog
        open={opendialog}
        onClose={closedialogbox}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "#fff",
            borderRadius: "15px",
            width: "300px",
            height: "auto",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            padding: "20px",
          },
        }}
      >
        <div className="sweet-loading">
          <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </Dialog>
    </>
  );
}

export default Showguide;
