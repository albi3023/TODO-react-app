import { Route, Routes } from "react-router-dom";
import "./App.css";
import ToDoHome from "./pages/toDoHome/toDoHome";
import appRoutes from "./routes/routes";

function App() {
  return (
    <Routes>
      {appRoutes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default App;
