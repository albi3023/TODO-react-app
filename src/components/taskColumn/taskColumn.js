import { Box, Checkbox } from "@mui/material";
import React from "react";
import Delete from "../../assets/delete.svg";
import Edit from "../../assets/edit.svg";
import NoTask from "../../assets/no-task.svg";
import "./taskColumn.css";

const TaskColumn = ({
  content,
  category,
  checkedItems,
  setCheckedItems,
  onDelete,
  onEdit,
}) => {
  const handleChange = (id) => (event) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: event.target.checked,
    }));
  };

  const filteredContent = content?.filter((item) => {
    const isChecked = !!checkedItems[item.id];
    if (category === "completed") return isChecked;
    if (category === "pending") return !isChecked;
    return true;
  });

  return (
    <Box className="taskColumn">
      {filteredContent.length > 0 ? (
        filteredContent.map((item) => (
          <div
            key={item.id}
            className={`taskItem ${checkedItems[item.id] ? "completed" : ""}`}
          >
            <div className="taskSection">
              <Checkbox
                checked={!!checkedItems[item.id]}
                onChange={handleChange(item.id)}
              />
              <div
                className={`taskContent ${
                  checkedItems[item.id] ? "completed" : ""
                }`}
              >
                <div className="content">{item.title}</div>
                <div className="timestamp">{item.timestamp}</div>
              </div>
            </div>
            <div className="optionBtns">
              <img
                className="deleteBtn"
                src={Delete}
                alt="Delete"
                onClick={() => onDelete(item.id)}
              />
              <img
                className="editBtn"
                src={Edit}
                alt="Edit"
                onClick={() => onEdit(item)}
              />
            </div>
          </div>
        ))
      ) : (
        <div className="noTasksContainer">
          <img className="noTasks" src={NoTask} alt="No tasks available" />
        </div>
      )}
    </Box>
  );
};

export default TaskColumn;
