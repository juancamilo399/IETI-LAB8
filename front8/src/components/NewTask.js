import React, { useState } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


export const NewTask = ({addTask}) => {

    const [responsible, setresponsible] = useState('')

    const [statei, setstatei] = useState('')

    const [dueDate, setdueDate] = useState(null)

    const [description, setdescription] = useState('')

    const[openState,setOpenState] = useState(false);

    const handleOpenDialog = () => {
        setOpenState(true);
    };

    const handleCloseDialog = () => {
        setOpenState(false);
    };

    const handleResponsibleChange = (e) => {
        setresponsible(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setdescription(e.target.value)
    }

    const handleStateChange = (e) => {
        setstatei(e.target.value)
    }

    const handleDateChange = (date) => {
        console.log(date)
        setdueDate(date)
    }

    const handleSubmit = (e) =>{
        
       e.preventDefault();
       const newTask={
            "description":description,
            "responsible":responsible,
            "status":statei,
            "dueDate":dueDate.toString()
       }
       addTask(newTask)
    }

    return (

        <div>
            <div>
                <Fab color="primary" aria-label="add" onClick={handleOpenDialog}>
                    <AddIcon />
                </Fab>
            </div>
            <Dialog open={openState} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" disableTypography>
                    <Typography variant="h3" style={{textAlign:"center"}}>New Task</Typography>
                </DialogTitle>
                <DialogContent>
                    <form className="form">
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="description">Description</InputLabel>
                            <Input
                                onChange={handleDescriptionChange}
                                id="description"
                                name="description"
                                autoComplete="description"
                                autoFocus
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="responsible">Responsible</InputLabel>
                            <Input
                                onChange={handleResponsibleChange}
                                id="responsible"
                                name="responsible"
                                autoComplete="responsible"
                                autoFocus
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="status">Status</InputLabel>
                            <Select
                                labelId="status"
                                id="status"
                                value={statei}
                                onChange={handleStateChange}
                            >
                            <MenuItem value={"Ready"}>Ready</MenuItem>
                            <MenuItem value={"In Progress"}>In Progress</MenuItem>
                            <MenuItem value={"Done"}>Done</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                           
                                <DatePicker
                                id="due-date"
                                selected={dueDate}
                                placeholderText="Due date"
                                onChange={(dueDate)=>handleDateChange(dueDate)}>
                            </DatePicker>
                            
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <div style={{textAlign:"center"}}>
                                <Fab style={{backgroundColor:"red"}} aria-label="Add" onClick={handleCloseDialog}>
                                    <CloseRoundedIcon />
                                </Fab>
                                <Fab style={{backgroundColor:"green"}} aria-label="Cancel" onClick={handleSubmit}>
                                    <CheckRoundedIcon />
                                </Fab>
                            </div>
                        </FormControl>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
