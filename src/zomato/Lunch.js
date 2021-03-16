import lunchData from './jsonData/lunchData';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from "./homeHeader"
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

const Lunch = ()=> {
    
    const classes = useStyles();

  return (
      <div>
          <Header />

<Grid container spacing={3} style={{padding:"20px"}}>
   {lunchData.map(lunch =>  
   <Grid item >
   <Card className={classes.root} style={{width: "700px", height: "400px", border:"2px", borderColor: "#999966"}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {lunch.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {lunch.description}
          </Typography>
        </CardContent>
    </Card> 
    </Grid>
    )}
    </Grid>          
    </div>
  );

}

export default Lunch