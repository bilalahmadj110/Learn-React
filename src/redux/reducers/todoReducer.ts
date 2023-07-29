import {ADD_TODO, CLEAR_ALL_TODO, DELETE_TODO} from "../actions/actionTypes";

const initialState = {
    todos: [
        {
            id: Date.now(),
            title: "TodoList 1",
        },
    ],
};

const todoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TODO:
            const {id, title} = action;
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id,
                        title,
                    },
                ],
            };
        case DELETE_TODO:
            const newTodoList = state.todos.filter((item) => item.id != action.id);
            return {
                ...state,
                todos: newTodoList,
            };
        case CLEAR_ALL_TODO:
            return {
                ...state,
                todos: [],
            };
        default:
            return state;
    }
}

export default todoReducer;