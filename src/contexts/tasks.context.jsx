import { TasksContext, DispatchContext } from "../utils/contextUtils";
import  useLocalStorageReducer  from '../hooks/useLocalStorageReducer'
import reducer from '../reducers/task.reducer';


const defaultTasks = [
    {id: 1, task: "Mow Lawn", completed: false}, {id: 2, task: "Feed Dogs", completed: true}
];
export function TasksProvider(props) {
    const [tasks, dispatch] = useLocalStorageReducer("tasks", defaultTasks, reducer)
    
    return (
        <TasksContext.Provider value={tasks}>
            <DispatchContext.Provider value={dispatch}>{props.children}</DispatchContext.Provider>
        </TasksContext.Provider>
    )
}