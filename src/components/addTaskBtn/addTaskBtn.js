import { Button } from "@mui/material";
import React from "react";

const AddTaskBtn = ({ setModalOpen }) => {
  return (
    <Button
      onClick={() => setModalOpen(true)}
      variant="contained"
      sx={{ height: "40px", alignSelf: "center" }}
    >
      Add Task
    </Button>
  );
};

export default AddTaskBtn;
