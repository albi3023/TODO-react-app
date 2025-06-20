import { Box } from "@mui/material";
import AddTaskBtn from "../../components/addTaskBtn/addTaskBtn";
import CategorySelector from "../../components/categorySelector/categorySelector";
import TaskColumn from "../../components/taskColumn/taskColumn";
import "./toDoHome.css";
import { formatTimestamp } from "../../utils/timeStampConverter";
import { useState } from "react";
import AddTaskModal from "../../components/addTaskModal/addTaskModal";

const ToDoHome = () => {
  const [category, setCategory] = useState("all");
  const [checkedItems, setCheckedItems] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [content, setContent] = useState([]);
  const [editValue, setEditValue] = useState("");

  const generateId = () => `${Date.now()}-${Math.floor(Math.random() * 10000)}`;

  const handleAddTask = (title) => {
    const newTask = {
      id: generateId(),
      title,
      timestamp: formatTimestamp(Date.now()),
    };
    setContent((prev) => [...prev, newTask]);
  };

  const handleDeleteTask = (id) => {
    setContent((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <Box className="toDoHome">
      <div className="toDoHomeSection">
        <p className="title">TODO LIST</p>
        <div className="homeMenu">
          <AddTaskBtn setModalOpen={setModalOpen} />
          <AddTaskModal
            open={modalOpen}
            handleClose={() => setModalOpen(false)}
            handleSave={handleAddTask}
          />
          <CategorySelector category={category} setCategory={setCategory} />{" "}
        </div>
        <div>
          <TaskColumn
            content={content}
            category={category}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
            onDelete={handleDeleteTask}
          />{" "}
        </div>
      </div>
    </Box>
  );
};

export default ToDoHome;
