//react imports
import { Fragment, useContext } from 'react';
//component imports
import EditTasksForm from './EditTasksForm';
//hooks
import useToggle from './hooks/useToggle';
//MUI imports
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import CheckBox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
//context
import { DispatchContext } from './utils/contextUtils';

function Task (props) {
    const dispatch  = useContext(DispatchContext)
    const { task, id, completed } = props;
    const [isEditActive, toggle] = useToggle(false);
    // content render when we are not actively editing a task
    const editInactive = <Fragment>
                            <CheckBox tabIndex={-1} checked={completed} onClick={() => dispatch({type: "TOGGLE", id: id})}/>
                            <ListItemText sx={{textDecoration: completed ? 'line-through' : 'none'}}>
                                {task}
                            </ListItemText>
                            <ListItemSecondaryAction>
                                <IconButton aria-label='delete' onClick={() => dispatch({type: "REMOVE", id: id})}>
                                    <DeleteIcon/>
                                </IconButton>
                                <IconButton aria-label='edit' onClick={toggle}>
                                    <EditIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </Fragment>
    return (
        <ListItem sx={{height: '64px'}}>
            {isEditActive ? <EditTasksForm id={id} task={task} toggleEditForm={toggle}/> : editInactive}
        </ListItem>
    )
}

export default Task;