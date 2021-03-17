import { Button, Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Header from './homeHeader';
import { placeData } from './jsonData/lunchData';

const useStyles = makeStyles({
    root: {
      maxWidth: 800,
    },
    media: {
      height: 140,
    },
  });

const Particular = () => {
    const classes = useStyles();
    const placeName = sessionStorage.getItem('place').replace(' ','');

    return(
        <div style={{marginLeft: "20%"}}>
            <Header clr="#fff" txtClr="#191919" width="70%" align= "center"/>
            <Card className={classes.root} style={{width: "800px", height: "400px", border:"2px", borderColor: "#999966", margin: "20px"}}>
        <CardMedia
          style={{height: "75%"}}
          image={placeData[placeName].picture}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: "serif", textAlign: "left", fontSize: "30px", fontWeight: "600"}}>
            {sessionStorage.getItem('place')}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign: "left"}}>
            {placeData[placeName].desc}
          </Typography>
        </CardContent>
        </Card>
        <div style={{textAlign: "left", marginLeft: "20px"}}>
        <Button  variant="contained" color="secondary" style={{marginRight:"10px"}}>Add Review</Button> 
        <Button  variant="contained" style={{backgroundColor: "white", marginRight:"10px"}}>Direction</Button>
        <Button  variant="contained" style={{backgroundColor: "white", marginRight:"10px"}}>Bookmark</Button>
        <Button  variant="contained" style={{backgroundColor: "white"}}>Share</Button>
        </div>
        </div>
    );

}

export default Particular;