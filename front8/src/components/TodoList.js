import React from 'react'
import { CardItem } from './CardItem'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

export const TodoList = ({todoList}) => {

    const useStyles = makeStyles(() => ({
        root: {
          flexGrow: 1,
        }
      }));
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid  container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}>
                {todoList.map(({description,responsible,status,dueDate},i)=>(
                    <CardItem key={i} description={description}
                    responsible={responsible} status={status} dueDate={dueDate} />
                ))}
            </Grid>

        </div>
    )
}



