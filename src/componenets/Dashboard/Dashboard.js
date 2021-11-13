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
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import AddAProduct from './Admin/AddAProduct/AddAProduct';
import Explore from '../Explore/Explore';
import ManageAllOrders from './Admin/ManageAllOrders/ManageAllOrders';
import MyOrders from './Users/MyOrders/MyOrders';
import Pay from './Users/Pay/Pay';
import Review from './Users/Review/Review';
import ManageProducts from './Admin/ManageProducts/ManageProducts';
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';
import AdminRoute from '../Login/AdminRoute/AdminRoute';


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, user, logout, isLoading } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            {/* <Divider /> */}
            <Link to="/explore"><Button color="inherit">Explore</Button></Link>
            <br/>
            <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
           { admin  ? 
            (  
              <Box> 
                <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                <Link to={`${url}/addAProduct`}><Button color="inherit">Add A Product</Button></Link>
                <Link to={`${url}/manageAllOrders`}><Button color="inherit">Manage All Orders</Button></Link>
                <Link to={`${url}/ManageProducts`}><Button color="inherit">Manage Products</Button></Link>
            </Box>
            ):(
             <Box>
                <Link to={`${url}/myOrders`}><Button color="inherit">My Orders</Button></Link><br/>                
                <Link to={`${url}/pay`}><Button color="inherit">Pay</Button></Link> <br/>               
                <Link to={`${url}/review`}><Button color="inherit">Review</Button></Link> <br/>
                
            </Box>
             )} 
            
            
            <Link to={`${url}`}><Button onClick={logout} color="inherit">Logout</Button></Link>
            
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)`, },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor:'#f1f3f2',
                    color:'black'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
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
                        keepMounted: true, // Better open performance on mobile.
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
{/* {isLoading} */}
                {/* <Switch>
                <Route exact path={path}>
                      <Explore></Explore>
                    </Route>
                    <AdminRoute  path={`${path}/addAProduct`}>
                       <AddAProduct></AddAProduct>
                    </AdminRoute>
                    <AdminRoute  path={`${path}/manageAllOrders`}>
                       <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <Route  path={`${path}/myOrders`}>
                      <MyOrders></MyOrders>
                    </Route>
                    <Route  path={`${path}/pay`}>
                      <Pay></Pay>
                    </Route>
                    <Route  path={`${path}/review`}>
                    <Review></Review>
                    </Route>
                    <AdminRoute path={`${path}/manageProducts`}>
                      <ManageProducts></ManageProducts>
                    </AdminRoute> */}
                    {/* <Route  path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                    </Route> */}
                    {/* <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                  
                </Switch> */}
               {
                  !admin && <Switch>
                    <Route exact path={path}>
                      <Explore></Explore>
                    </Route>
                  <Route  path={`${path}/myOrders`}>
                      <MyOrders></MyOrders>
                    </Route>
                    <Route  path={`${path}/pay`}>
                      <Pay></Pay>
                    </Route>
                    <Route  path={`${path}/review`}>
                    <Review></Review>
                    </Route>
                  </Switch>
               } 
               {
                 admin && <Switch>
                   <Route exact path={path}>
                      <Explore></Explore>
                    </Route>
                    <Route  path={`${path}/addAProduct`}>
                       <AddAProduct></AddAProduct>
                    </Route>
                    <Route  path={`${path}/manageAllOrders`}>
                       <ManageAllOrders></ManageAllOrders>
                    </Route>
                    
                    <Route path={`${path}/manageProducts`}>
                      <ManageProducts></ManageProducts>
                    </Route>
                    {/* <Route  path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                    </Route> */}
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </ Route>
                  
                </Switch>
               }
                

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;