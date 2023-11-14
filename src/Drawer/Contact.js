import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { brown } from '@mui/material/colors';

const Contact = () => {
  const handleClick = (text) => {
    // Handle click logic
    console.log(`Clicked: ${text}`);
  };

  const icons = [
    { icon: <EmailIcon sx={{ color: brown[500], fontSize: 50, cursor: 'pointer' }} />, text: 'Email Janith' },
    { icon: <GitHubIcon sx={{ color: brown[500], fontSize: 50, cursor: 'pointer' }} />, text: 'View Janith GitHub' },
    { icon: <LinkedInIcon sx={{ color: brown[500], fontSize: 50, cursor: 'pointer' }} />, text: 'View Janith LinkedIn' },
    // Uncomment the following line if you want to include LocalPhoneIcon
    // { icon: <LocalPhoneIcon sx={{ color: brown[500], fontSize: 50, cursor: 'pointer' }} />, text: 'View Janith Phone' },
  ];

  return (
    <Stack direction="column" spacing={5}>
      {icons.map(({ icon, text }, index) => (
        <Tooltip title={text} key={`icon-${index}`}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => handleClick(text)}
          >
            {icon}
            <Typography style={{ marginLeft: '8px' }}>{text}</Typography>
          </div>
        </Tooltip>
      ))}
    </Stack>
  );
};

export default Contact;
