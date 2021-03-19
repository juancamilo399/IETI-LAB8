import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DatePicker from 'react-datepicker';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export const FilterModal = (props) => {
    const classes = useStyles();

    const [dueDate, setDueDate] = useState(null);
    const [status, setStatus] = useState("");
    const [responsible, setResponsible] = useState("");



    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const handleResponsibleChange = (e) => {
        setResponsible(e.target.value);
    };

    const handleDateChange = (date) => {
        setDueDate(date);
    };

    const handleCleanFilters = () => {
        setDueDate(null);
        setResponsible("");
        setStatus("");
    };

    const handleFilters = (e) => {
        e.preventDefault();
        const filters = {
            dueDate:dueDate,
            status:status,
            responsible:responsible
        };
        props.applyFilters(filters);
        props.closeAction();
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.open}
                onClose={props.closeAction}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <div className={classes.paper}>
                        <Typography variant="h3" >Task Filter</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>

                                <DatePicker
                                    id="due-date"
                                    selected={dueDate}
                                    placeholderText="Due date"
                                    onChange={(dueDate) => handleDateChange(dueDate)}
                                >
                                </DatePicker>

                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="responsible">Responsible</InputLabel>
                                <Input
                                    onChange={handleResponsibleChange}
                                    id="responsible"
                                    name="responsible"
                                    value={responsible}
                                    autoComplete="responsible"
                                    autoFocus
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="status">Status</InputLabel>
                                <Select
                                    labelId="status"
                                    id="status"
                                    value={status}
                                    onChange={handleStatusChange}
                                >
                                    <MenuItem value={"Ready"}>Ready</MenuItem>
                                    <MenuItem value={"In Progress"}>In Progress</MenuItem>
                                    <MenuItem value={"Done"}>Done</MenuItem>
                                </Select>
                            </FormControl>
                        </form>

                        <br></br>
                        <br></br>

                        <Button
                            onClick={handleFilters}
                            fullWidth
                            variant="contained"
                            color="primary"
                        >Filter</Button>

                    <br></br>
                        <br></br>
                        <Button
                            onClick={handleCleanFilters}
                            fullWidth
                            variant="contained"
                            color="primary"
                        >Clear All</Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
