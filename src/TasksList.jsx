import { Fragment } from 'react';
import Task from './Task';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

function TasksList (props) {
    const { tasks, deleteTask, toggleTaskCompletion, editTask } = props
    if (tasks.length)
        return (
        <Paper>
            <List>
                {tasks.map((task, i) => (
                    <Fragment key={task.id}>
                        <Task {...task} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} editTask={editTask}/>
                        {i < tasks.length -1 && <Divider/>}
                    </Fragment>
                ))}
            </List> 
        </Paper>
    )
    //return null if no tasks are found
    return null;
}

export default TasksList;