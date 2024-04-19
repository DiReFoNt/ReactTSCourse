import React, { useEffect, useState } from "react";
import { ITodo } from "../types/types";
import axios from "axios";
import List from "../components/List";
import TodoItem from "../components/TodoItem";

const TodosPage = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    async function fetchTodos() {
        try {
            const responce = await axios.get<ITodo[]>(
                "https://jsonplaceholder.typicode.com/todos?_limit=10"
            );

            setTodos(responce.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <List
            items={todos}
            renderItem={(todo: ITodo) => {
                return <TodoItem todo={todo} key={todo.id} />;
            }}
        />
    );
};

export default TodosPage;
