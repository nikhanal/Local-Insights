import React from "react";
import "./tourists.css";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
function Tourists() {
  const SN = 1;
  return (
    <>
      <div className="tourists-category">
        <div className="tourists-category-title">
          <h6>SN</h6>
          <h6>Tourists Name</h6>
          <h6>Selected Location</h6>
          <h6>Price</h6>
          <h6>Accept</h6>
          <h6>Reject</h6>
        </div>
        <div className="tourists tourists-category-title">
          <h6>1</h6>
          <h6>Nimesh Pradhan</h6>
          <h6>Pimbahal</h6>
          <h6>350 nrs</h6>
          <h6>
            <DoneIcon
              sx={{
                color: "green",
              }}
            />
          </h6>
          <h6>
            <CloseIcon
              sx={{
                color: "red",
              }}
            />
          </h6>
        </div>
      </div>
    </>
  );
}
export default Tourists;
