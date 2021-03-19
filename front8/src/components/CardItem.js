import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export const CardItem = ({description,responsible,status,dueDate}) => {
    

    const useStyles = makeStyles((theme)=>({
        
        root: {
            width: "350px",
            minWidth: 275,
           
        },
        title: {
            fontSize: 14,
        },
    }));

    const classes = useStyles();
    return (
        
        <div>
            <Grid  item xs={10}>
            <Card variant="outlined">
                <CardContent>
                    
                    <Typography variant="h5" component="h2">
                        {description}
                    </Typography>

                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {`${status} - ${new Date(dueDate).toLocaleString()}`}
                    </Typography>

                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {responsible.name}
                    </Typography>
            
                </CardContent>
                
            </Card>
            </Grid>
            </div>    
    )
}
