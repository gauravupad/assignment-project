import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const history = useHistory();
  const searchOptions = ["Delivery", "Breakfast", "Lunch", "Dinner", "Cafes"];
  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{backgroundColor: props.clr || "#dc143c", width: props.width, alignContent:  props.align}}>
        <Toolbar style={{alignItems:"center"}}>
          <Typography className={classes.title} variant="h6" noWrap style={{marginRight:"20px", fontSize:"25px", color: props.txtClr, fontWeight: 600, fontFamily: "Times New Roman", width: "100px"}} onClick={()=> history.push("/")}>              
            Zomato
          </Typography>

          <Autocomplete
        id="size-small-outlined"
        size="small"
        options={["Bangalore"]}
        defaultValue={"Bangalore"}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" placeholder="Favorites" style={{backgroundColor:'white'}}
          />
        )}
      />

          <div className={classes.search}>
          <Autocomplete
        id="size-small-outlined"
        size="small"
        options={searchOptions}
        style={{ width: 500 }}
        onChange={(event, value)=> history.push(value)}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" placeholder="Search for restaurants or cuisines.." style={{backgroundColor:'white'}}
          />
        )}
      />
          </div>
          <Button  variant="contained" color="secondary">Search</Button>
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
