import { Box } from "@mui/material";
import AddTaskBtn from "../../components/addTaskBtn/addTaskBtn";
import CategorySelector from "../../components/categorySelector/categorySelector";
import TaskColumn from "../../components/taskColumn/taskColumn";
import "./toDoHome.css";
import { formatTimestamp, generateId } from "../../utils/helpers";
import { useState } from "react";
import AddTaskModal from "../../components/addTaskModal/addTaskModal";

const ToDoHome = () => {
  const [category, setCategory] = useState("all");
  const [checkedItems, setCheckedItems] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [content, setContent] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleAddTask = (title) => {
    if (isEditMode && taskToEdit) {
      // Update the task
      setContent((prev) =>
        prev.map((task) =>
          task.id === taskToEdit.id ? { ...task, title } : task
        )
      );
      setIsEditMode(false);
      setTaskToEdit(null);
    } else {
      // Add new task
      const newTask = {
        id: generateId(),
        title,
        timestamp: formatTimestamp(Date.now()),
      };
      setContent((prev) => [...prev, newTask]);
    }
  };

  const handleDeleteTask = (id) => {
    setContent((prev) => prev.filter((task) => task.id !== id));
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setIsEditMode(true);
    setModalOpen(true);
  };
  console.log("content.title", content.title);
  return (
    <Box className="toDoHome">
      <div className="toDoHomeSection">
        <p className="title">TODO LIST</p>
        <div className="homeMenu">
          <AddTaskBtn setModalOpen={setModalOpen} />
          <AddTaskModal
            open={modalOpen}
            handleClose={() => {
              setModalOpen(false);
              setIsEditMode(false);
              setTaskToEdit(null);
            }}
            handleSave={handleAddTask}
            initialValue={taskToEdit?.title || ""}
          />
          <CategorySelector category={category} setCategory={setCategory} />{" "}
        </div>
        <div className="taskColumnWrapper">
          <TaskColumn
            content={content}
            category={category}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
          />{" "}
        </div>
      </div>
    </Box>
  );
};

export default ToDoHome;
