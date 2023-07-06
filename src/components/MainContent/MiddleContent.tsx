
import React, {useState} from "react";
import AboutMe from './AboutMe';
import Projects from './Projects';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import  TabContext  from "@mui/lab/TabContext";

const cats = require ("../../assets/cats_header.jpg");

const tabStyles = {
  "& .MuiTab-root": {
    minWidth: 0,
    mr: "20px",
    fontSize: "20px",
    textTransform: "capitalize",
    opacity: 1,
    color: 'black', 
    fontFamily: "windows95",
    "&.Mui-selected": {
      opacity: 1,
      color: 'black',
      fontWeight: "bold",
      border: "1px solid #000",
    },
  },
};


const MiddleContent: React.FC = () => {
  const [value, setValue] = useState('1'); //tab value
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  
  return (
    <div className="middleContent w-1/2 flex flex-col ">
    <img src={cats} alt="header" className="header_img h-28 object-cover" />
      <div className="middle-content-text border-2 border-t-0">
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value} >
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={tabStyles}
            >
              <Tab label="About Me" value="1" />
              <Tab label="Projects" value="2" />
              {/* <Tab label="Riley" value="3" /> */}
            </TabList>
          </Box>
          <TabPanel value="1"><AboutMe/></TabPanel>
          <TabPanel value="2"><Projects /></TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
            </Box>
      </div>
    </div>
  )
}
export default MiddleContent