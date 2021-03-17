
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Header from "./homeHeader"
import { Grid } from '@material-ui/core';
import lunchData, { breakfastData, cafeData, deliveryData, dinnerData } from './jsonData/lunchData';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
  },
  media: {
    height: 140,
  },
});

const onClickHandler = (e, history) => {
  console.log(e,'evnet');
  sessionStorage.setItem('place', e);
  history.push('/particular');
}

const Lunch = ()=> {
    
    const classes = useStyles();
  const DataHeading = {
    Lunch: "Lunch places near you",
    Dinner: "Dinner places near you",
    Breakfast: "Breakfast places near you",
    Cafes: "Cafes near you",
    Delivery: "Delivery Restaurants near you"
  };
  const history = useHistory();
  const path = history.location.pathname.replace('/','');
  const jsonData = {
    Lunch: lunchData,
    Dinner: dinnerData,
    Breakfast: breakfastData,
    Cafes: cafeData,
    Delivery: deliveryData
  };

  return (
    <div style={{marginLeft: "20%"}}>
      <Header clr="#fff" txtClr="#191919" width="70%" align= "center"/>
      <h4 style={{fontSize:"25px", textAlign: "left", marginLeft: "20px" }}>{DataHeading[path]}</h4>
      <Grid container spacing={3} style={{padding:"20px" , width: "80%"}}>
        {jsonData[path].map(lunch =>  
        <Grid item >
        <Card className={classes.root} style={{width: "400px", height: "400px", border:"2px", borderColor: "#999966"}} onClick= {() => onClickHandler(lunch.name, history)}>
        <CardMedia
          style={{height: "75%"}}
          image={lunch.picture}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: "serif"}}>
            {lunch.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {lunch.desc}
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