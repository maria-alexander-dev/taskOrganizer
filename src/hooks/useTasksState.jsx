import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuidv4 } from "uuid";

export default function useTasksState (initialTasks) {
    const [tasks, setTasks] = useLocalStorageState('tasks', initialTasks);

    const addTask = (newTask) => {
    setTasks([...tasks, {id: uuidv4(), task: newTask, completed: false}])
    }

    const deleteTask = (taskId) => {
        const updatedTaskList = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTaskList);
    }

    const toggleTaskCompletion = (taskId) => {
        const updatedTasks = tasks.map((task) => (
        task.id === taskId ? {...task, completed: !task.completed} : task
        ));
        setTasks(updatedTasks);
    }

    const editTask = (taskId, editedTask) => {
        const updatedTasks = tasks.map((task) => (
        task.id === taskId ? {...task, task: editedTask} : task
        ));
        setTasks(updatedTasks);
    }

    return {
        tasks,
        addTask: addTask,
        deleteTask: deleteTask,
        toggleTaskCompletion: toggleTaskCompletion,
        editTask: editTask
    }


}
