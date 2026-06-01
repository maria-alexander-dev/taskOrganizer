// component imports
import TasksList from './TasksList';
import TasksForm from './TasksForm';
// MUI imports
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
//context
import { TasksProvider } from './contexts/tasks.context';


function TasksApp() {
  return (
    <Paper elevation={0} sx={{padding: '0', margin: '0', height: '100vh', backgroundColor: '#fafafa'}}>
      <AppBar color='primary' position='static' sx={{height: '64px'}}>
        <Toolbar>
            <Typography color='inherit'>Tasks App</Typography>
        </Toolbar>
      </AppBar>
      <Grid container direction="column" sx={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: '1rem'
        }}>
        <Grid item size={{xs: 11, md: 8, lg: 4}}>
          <TasksProvider>
            <TasksList />
            <TasksForm />
          </TasksProvider>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TasksApp