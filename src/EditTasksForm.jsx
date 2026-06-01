import { useContext } from 'react';
//hooks
import useInputState from './hooks/useInputState'
//MUI imports
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { DispatchContext } from './utils/contextUtils';

function EditTasksForm(props) {
    const dispatch = useContext(DispatchContext);
    const { task, id, toggleEditForm } = props;
    const [value, handleChange, reset] = useInputState(task);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "EDIT", id: id, newTask: value});
        reset();
        toggleEditForm();
    }

    const handleClick = () => {
        toggleEditForm();
    }

    return (
        <Box component='form' onSubmit={handleSubmit}sx={{marginLeft: '1rem', width: '100%'}}>
            <Grid container justifyContent='space-between' rowSpacing={1}>
                <Grid size={10}>
                    <TextField autoFocus id="standard-basic" variant="standard" value={value} onChange={handleChange}/>
                </Grid>
                <Grid size={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton type='submit'>
                        <SaveIcon/>
                    </IconButton>
                    <IconButton onClick={handleClick}>
                        <CancelIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
        
    )
}

export default EditTasksForm;