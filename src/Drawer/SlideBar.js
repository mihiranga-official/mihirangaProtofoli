import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { colors } from '@mui/material';
import MovingIcon from '@mui/icons-material/Moving';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import DescriptionIcon from '@mui/icons-material/Description';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ margin: 0, padding: 0, textAlign: 'center' }}>
            {/* <Toolbar /> */}
            
            <div style={{textAlign: 'center'}}>
                <h3>Janith</h3>
                <h3>Gunawardana</h3>
                <h4>Software Engineer</h4>
            </div>
          
            <Divider />
            <List>
                {/* About Section */}
                <ListItem key="About" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                        <Avatar style={{ backgroundColor: '#f00' }}>
                  
                  </Avatar>
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
                <ListItem key="Experience" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Avatar style={{ backgroundColor: '#00ff00' }}>
                                <MovingIcon /> {/* Replace with the desired icon for the avatar */}
                            </Avatar>
                        </ListItemIcon>
                        <ListItemText primary="Experience" />
                    </ListItemButton>
                </ListItem>
                <ListItem key="Projects" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Avatar style={{ backgroundColor: '#00ff00' }}>
                                <AccountTreeIcon /> {/* Replace with the desired icon for the avatar */}
                            </Avatar>
                        </ListItemIcon>
                        <ListItemText primary="Projects" />
                    </ListItemButton>
                </ListItem>
                <ListItem key="Skills" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Avatar style={{ backgroundColor: '#00ff00' }}>
                                <EqualizerIcon /> {/* Replace with the desired icon for the avatar */}
                            </Avatar>
                        </ListItemIcon>
                        <ListItemText primary="Skills" />
                    </ListItemButton>
                </ListItem>
                <ListItem key="Contact" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Avatar style={{ backgroundColor: '#00ff00' }}>
                                <ContactEmergencyIcon /> {/* Replace with the desired icon for the avatar */}
                            </Avatar>
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </ListItem>
                <ListItem key="Education" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Avatar style={{ backgroundColor: '#00ff00' }}>
                                <SchoolIcon /> {/* Replace with the desired icon for the avatar */}
                            </Avatar>
                        </ListItemIcon>
                        <ListItemText primary="Education" />
                    </ListItemButton>
                </ListItem>
                <ListItem key="Blog" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Avatar style={{ backgroundColor: '#00ff00' }}>
                                <RssFeedIcon /> {/* Replace with the desired icon for the avatar */}
                            </Avatar>
                        </ListItemIcon>
                        <ListItemText primary="Blog" />
                    </ListItemButton>
                </ListItem>
                <ListItem key="Resume" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Avatar style={{ backgroundColor: '#00ff00' }}>
                                <DescriptionIcon /> {/* Replace with the desired icon for the avatar */}
                            </Avatar>
                        </ListItemIcon>
                        <ListItemText primary="Resume" />
                    </ListItemButton>
                </ListItem>

                {/* Other Sections */}
                {[].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {/* Avatar in Main Content */}
                {/* <Avatar style={{ backgroundColor: '#f00' }}>
                  
                </Avatar> */}
                {/* Rest of the content */}
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
};

export default ResponsiveDrawer;
