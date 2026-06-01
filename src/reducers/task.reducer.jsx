
import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD":
            return [...state, {id: uuidv4(), task: action.task, completed: false}]
        case "REMOVE": 
            return state.filter(task => task.id !== action.id)
        case "TOGGLE":
            return state.map((task) => (task.id === action.id ? {...task, completed: !task.completed} : task))
        case "EDIT":
            return state.map((task) => (task.id === action.id ? {...task, task: action.newTask} : task))
        default:
            return state
    }
}

export default reducer;