import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Experience from './Experience'
import Projects from './Projects';
import Skills from './Skills';
export default function About() {
  return (
    <div style={{ marginLeft: '250px' }}>
      <Accordion style={{ backgroundColor: '#116D6E', padding: '20px' }}>



        <Typography color="white" style={{ fontSize: '35px' }}>
          ABOUT
        </Typography>

      </Accordion>
      <br></br>
      <Typography color="#795548" style={{ fontSize: '25px' }}>
        "As a purpose-driven full-stack developer, I'm passionate about creating user-friendly solutions, emphasizing thoughtful UI design, collaboration, and knowledge sharing. With a mission-oriented approach, I strive for technical excellence to positively impact users and communities."
      </Typography>
      <br></br>
      <Typography color="black" style={{ fontSize: '25px' }}>"Throughout my professional journey, I've consistently sought out meaningful opportunities and embraced challenges that resonate with my values. Despite the twists and turns in my path, my unwavering passion for helping others and solving problems has remained constant."
      </Typography>
      <br></br>
      <Typography color="black" style={{ fontSize: '25px' }}>In my role as a Software engineer, I channel my meticulous attention to detail, genuine love for creating, and a mission-driven work ethic to bring about tangible change. The prospect of making a substantial impact at a high-growth company excites me, and I am eager to contribute my skills to drive meaningful transformation.
      </Typography>

      <h3>Current Focus:<a color='primary' href="https://example.com/faq.html"> React Native </a> //<a color='green' href="https://example.com/faq.html"> Firebase & FireStore </a> //<a color='green' href="https://example.com/faq.html"> Node.JS </a></h3>
      <br></br>
      <Accordion style={{ backgroundColor: '#116D6E', padding: '20px' }}>



        <Typography color="white" style={{ fontSize: '35px' }}>
          EXPERIENCE
        </Typography>

      </Accordion>
      
      {/* <Typography color="#795548" style={{ fontSize: '25px' }}>
        "As a purpose-driven full-stack developer, I am deeply passionate about creating impactful and user-friendly solutions.
        My commitment extends beyond code to embrace thoughtful UI design, fostering collaboration, and sharing knowledge through teaching.
        With a mission-oriented approach, I aim to build applications that not only meet technical excellence but also positively impact users and communities."
      </Typography> */}
      <br></br>
      {/* <Typography color="black" style={{ fontSize: '25px' }}>"Throughout my professional journey, I've consistently sought out meaningful opportunities and embraced challenges that resonate with my values. Despite the twists and turns in my path, my unwavering passion for helping others and solving problems has remained constant."
      </Typography> */}
      <br></br>
      {/* <Typography color="black" style={{ fontSize: '25px' }}>In my role as a Software engineer, I channel my meticulous attention to detail, genuine love for creating, and a mission-driven work ethic to bring about tangible change. The prospect of making a substantial impact at a high-growth company excites me, and I am eager to contribute my skills to drive meaningful transformation.
      </Typography> */}
<Experience></Experience>
<br></br>
<br></br>
<Experience></Experience>
<br></br>
<br></br>
<Experience></Experience>
<br></br>
<br></br>

<Accordion style={{ backgroundColor: '#116D6E', padding: '20px' }}>



<Typography color="white" style={{ fontSize: '35px' }}>
  PROJECTS
</Typography>

</Accordion>
<br></br>
<Projects></Projects>
<br></br>
<Accordion style={{ backgroundColor: '#116D6E', padding: '20px' }}>



<Typography color="white" style={{ fontSize: '35px' }}>
  SKILLS
</Typography>

</Accordion>
<br></br>
<br></br>
<Skills></Skills>
    </div>

  );
}
