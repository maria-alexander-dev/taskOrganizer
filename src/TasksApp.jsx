// component imports
import TasksList from './TasksList';
import TasksForm from './TasksForm';
//hooks
import useTasksState from './hooks/useTasksState';
// MUI imports
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';


function TasksApp() {
  const storedTasks = [{id: 1, task: 'Clean Garage', completed: false}];
  const { tasks, addTask, deleteTask, toggleTaskCompletion, editTask } = useTasksState(storedTasks)
    // const seedData = [
    //     {id: uuidv4(), task: 'Clean Litterbox', completed: false},
    //     {id: uuidv4(), task: 'Get Groceries', completed: true},
    //     {id: uuidv4(), task: 'Do Laundry', completed: false},
    // ]
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
            <TasksList deleteTask={deleteTask} tasks={tasks} toggleTaskCompletion={toggleTaskCompletion}  editTask={editTask}/>
            <TasksForm addTask={addTask}/>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TasksApp