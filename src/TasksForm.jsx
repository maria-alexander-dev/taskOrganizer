import { useContext } from 'react';
import useInputState from './hooks/useInputState';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { DispatchContext } from './utils/contextUtils';

function TasksForm () {
    const dispatch  = useContext(DispatchContext);
    const [value, handleChange, reset] = useInputState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "ADD", task: value});
        reset();
    }
    return (
        <Paper sx={{margin: '1rem 0', padding: '0 1rem'}}>
            <Box component='form' onSubmit={handleSubmit}>
                <TextField fullWidth id="standard-basic" label="Add New Task" variant="standard" value={value} onChange={handleChange} sx={{display: 'inline-block', width: '80%'}}/>
            </Box>
        </Paper>
    )
}

export default TasksForm;