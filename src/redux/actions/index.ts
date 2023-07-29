import {ADD_TODO, CLEAR_ALL_TODO, DELETE_TODO} from "./actionTypes";

export const addNewTodo = (title: string) => {
    console.log("hello", title);
    return {
        type: ADD_TODO,
        id: Date.now(),
        title,
    };
};

export const deleteTodo = (id: Date) => {
    return {
        type: DELETE_TODO,
        id,
    };
};

export const clearAllTodo = () => {
    return {
        type: CLEAR_ALL_TODO,
    };
};
