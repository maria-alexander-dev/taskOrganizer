import { Fragment, useContext, memo } from 'react';
import Task from './Task';
//context
import { TasksContext } from './utils/contextUtils';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

function TasksList () {
    const tasks  = useContext(TasksContext)
    if (tasks.length)
        return (
        <Paper>
            <List>
                {tasks.map((task, i) => (
                    <Fragment key={task.id}>
                        <Task {...task} />
                        {i < tasks.length -1 && <Divider/>}
                    </Fragment>
                ))}
            </List> 
        </Paper>
    )
    //return null if no tasks are found
    return null;
}

export default memo(TasksList);