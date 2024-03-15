import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from '@mui/system';
import Grid from '@mui/system/Unstable_Grid';
import './styles/kidvento.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Typography } from '@mui/material';
import ListComponent from "./ListComponent";
import ListDataComponent from "./ListDataComponent";

const KidventoApp = () => {
  const core = [
    "Finance & Entrepreneurship",
    "Maths",
    "Commerce",
    "Science",
    "Language & communication",
  ];
  const skills = ["Space Tech", "Robotics", "Electronics"];
  const creative = ["Graphic Noval", "Yoga", "Music", "Dance", "Guitar"];

  const [activeCore, setCore] = useState(core);
  const [activeSkills, setSkills] = useState(skills);
  const [activeCreative, setCreative] = useState(creative);

  const [school, setSchool] = useState([]);
  const [home, setHome] = useState([]);

  const handleDrop = (item, list) => {
    if (list === "school") {
      setSchool([...school, item]);
    } else if (list === "home") {
      setHome([...home, item]);
    }
  };

  const handleReturn = (item, list) => {
    if (list === "school") {
      setSchool(school.filter((i) => i !== item));
    } else if (list === "home") {
      setHome(home.filter((i) => i !== item));
    }
    if (core.includes(item)) {
      setCore([...activeCore, item]);
    } else if (skills.includes(item)) {
      setSkills([...activeSkills, item]);
    } else {
      setCreative([...activeCreative, item]);
    }
  };

  const handleHome = (item) => {
    if (core.includes(item)) {
      setCore(core.filter((i) => i !== item && activeCore?.includes(i)));
    } else if (skills.includes(item)) {
      setSkills(skills.filter((i) => i !== item && activeSkills?.includes(i)));
    } else {
      setCreative(creative.filter((i) => i !== item && activeCreative?.includes(i)));
    }
    setSchool(school.filter(i => i !== item));
    setHome([...home, item]);
  };

  const handleSchool = (item) => {
    if (core.includes(item)) {
      setCore(core.filter((i) =>  i !== item && activeCore?.includes(i)));
    } else if (skills.includes(item)) {
      setSkills(skills.filter((i) => i !== item && activeSkills?.includes(i)));
    } else {
      setCreative(creative.filter((i) => i !== item && activeCreative?.includes(i)));
    }
    setHome(home.filter(i => i !== item));
    setSchool([...school, item]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <React.Fragment>
        <div className="SchoolheaderMain">
          <div className="SchoolHeader">

            <Grid container className='SchoolLevel'>
              <Grid xs={2} className='SchoolLevelContent' >
                <div className='SchoolClass'>
                  School Level

                </div>
                <div className='SchoolContent'>
                  <p className='SchoolText'>Level 0</p>
                  <ArrowRightAltIcon style={{ paddingTop: '13px' }} />
                </div>
              </Grid>

              <Grid xs={5} className="SkillSelectedCol">
                <div className='SchoolClass'>
                  Skills Selected

                </div>
                <Container fixed className="specialHeaderMain">
                  <div className='specialHeader'>
                    <Typography className="specialHeaderContent">Core <i style={{ color: '#3A67FA' }}>(Level 0)</i></Typography>
                    <div className='coreHeader'>
                      <ListComponent handleDrop={handleDrop} core={core} skills={skills} creative={creative} handleReturn={handleReturn} items={activeCore} list="core" />
                    </div>
                  </div>
                  <div className='specialHeader'>
                    <Typography className="specialHeaderContent">Special <i style={{ color: '#3A67FA' }}>(Level 0)</i></Typography>
                    <div className='coreHeader'>
                      <ListComponent handleDrop={handleDrop} core={core} skills={skills} creative={creative} handleReturn={handleReturn} items={activeSkills} list="skills" />
                    </div>
                  </div>
                  <div className='specialHeader'>
                    <Typography className="specialHeaderContent" >Creative <i style={{ color: '#3A67FA' }}>(Level 0)</i></Typography>
                    <div className='coreHeader'>
                      <ListComponent handleDrop={handleDrop} core={core} skills={skills} creative={creative} handleReturn={handleReturn} items={activeCreative} list="creative" />
                    </div>
                  </div>

                </Container>
              </Grid>
              <Grid xs={4} className="SchoolClassMain">
                <div className='SchoolClass'>
                  Set Skill Priority
                </div>

                <div className="schoolContentMain">
                  <Typography className="schoolConText">School Priority</Typography>
                  <div className='schoolContent'>
                    <ListDataComponent handleReturn={handleReturn} handleDrop={handleSchool} core={core} skills={skills} creative={creative} items={school} list="school" />
                  </div>
                </div>
                <div className='schoolContentMain'>
                  <Typography className="schoolConText">Home Priority</Typography>
                  <div className='schoolContent'>
                    <ListDataComponent handleReturn={handleReturn} handleDrop={handleHome} core={core} skills={skills} creative={creative} items={home} list="home" />
                  </div>
                </div>



              </Grid>
            </Grid>

          </div>
        </div>
      </React.Fragment>
    </DndProvider>

  )
}

export default KidventoApp