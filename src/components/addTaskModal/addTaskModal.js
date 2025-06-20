import React, { useState } from "react";
import { Modal, Box, Button, TextField, Typography } from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const AddTaskModal = ({ open, handleClose, handleSave, initialValue = "" }) => {
  const [taskTitle, setTaskTitle] = useState(initialValue);

  React.useEffect(() => {
    setTaskTitle(initialValue);
  }, [initialValue]);

  const handleSubmit = () => {
    if (taskTitle.trim()) {
      handleSave(taskTitle.trim());
      setTaskTitle("");
      handleClose();
    }
  };
  const handleCancel = () => {
    handleClose();
    setTaskTitle("");
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" mb={2}>
          {initialValue ? "Edit Task" : "Add New Task"}{" "}
        </Typography>
        <TextField
          fullWidth
          label="Task Title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          autoFocus
        />
        <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddTaskModal;
