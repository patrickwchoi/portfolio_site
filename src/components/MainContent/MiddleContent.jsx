
import React, {useState} from "react";
import Tab from "@material-ui/core/Tab";
import AppBar from '@material-ui/core/AppBar';
import Tabs from "@material-ui/core/Tabs";
import { makeStyles } from '@material-ui/core/styles';
import AboutMe from './AboutMe';
import Projects from './Projects';



const useStyles = makeStyles({
  root: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    color: 'inherit',
  },
  tabs: {
    '& .MuiTab-root': {
      minWidth: 0,
      marginRight: '20px',
      fontSize: '16px',
      textTransform: 'capitalize',
      opacity: 0.6,
      fontFamily: 'windows95', 
      '&.Mui-selected': {
        opacity: 1,
        fontWeight: 'bold',
        border: '1px solid #000',
      }
    }
  }
});

export default function MiddleContent() {
  const classes = useStyles();
  const [value, setValue] = useState(0); //tab value
  let content;
  if (value === 0) {
    content = <AboutMe />;
  } else if (value === 1) {
    content = <Projects />;
  } else {
    // content = <Riley />;
  }
  
  return (
    <div className="middleContent">
      <AppBar 
        position='relative' className={classes.root}>
        <Tabs
          value={value} 
          // textColor="black"
          // indicatorColor="primary"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className={classes.tabs}
        >
          <Tab label="About Me" />
          <Tab label="Projects" />
          <Tab label="Riley" />
        </Tabs>
      </AppBar>

      {content}
    </div>
  )
}