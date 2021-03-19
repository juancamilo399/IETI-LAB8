import React, { useState } from 'react'
import './App.css';
import { TodoList } from './TodoList';
import { DrawerComponent } from './DrawerComponet';
import Button from '@material-ui/core/Button';
import { FilterModal } from './FilterModal';
import { NewTask } from './NewTask';

export const TodoApp = ({items,addTask}) => {

    const[filters,setFilters] = useState({
        dueDate:null,
        status:"",
        responsible:""
    });

    const handleFilters = (filters) => {
        setFilters(filters);
    };

    let list = items;

    if(filters.dueDate !== null){
        list = list.filter(item => item.dueDate === filters.dueDate);
    }
    if(filters.status !== ""){
        list = list.filter(item => item.status === filters.status);
    }
    if(filters.responsible !== ""){
        list = list.filter(item => item.responsible.name === filters.responsible);
    }

    const [drawer, setdrawer] = useState({
        left: false
    })

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setdrawer({ ...drawer, [anchor]: open });
    };

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };


    return (

        <div>
            <header className="App-header">
                <div style={{ textAlign: "left" }}>
                    <Button variant="contained" disableElevation onClick={toggleDrawer('left', true)}>{'Menu'}</Button>
                </div>
                <h1 className="App-title">Task Planner</h1>
            </header>

            <br></br>

            <DrawerComponent drawer={drawer} toggleDrawerf={toggleDrawer}></DrawerComponent>


            <TodoList todoList={list} />
            <br></br>
            <br></br>

            <div style={{ textAlign: "center" }}>
                <Button variant="contained" color="primary" onClick={handleOpenModal}>
                    Filter
                </Button>
                <FilterModal open={openModal} closeAction={handleCloseModal} applyFilters={handleFilters}/>
                <br/>
                    <br/>
                <NewTask  addTask={addTask}/>
            </div>
            


        </div>

    )
}
