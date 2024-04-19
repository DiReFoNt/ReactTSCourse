import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import TodosPage from "./pages/TodosPage";
import { Link } from "react-router-dom";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {
    return (
        <div>
            <div>
                <Link to="/users">Users</Link>
                <Link to="/todos">Todos</Link>
            </div>
            <Routes>
                <Route path="/users" element={<UserPage />} />
                <Route path="/todos" element={<TodosPage />} />
                <Route path="/users/:id" element={<UserItemPage />} />
                <Route path="/todos/:id" element={<TodoItemPage />} />
            </Routes>
        </div>
    );
};

export default App;
