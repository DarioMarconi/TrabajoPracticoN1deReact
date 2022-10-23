import React,{useState, useEffect} from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    IconButton,
    Container,
    Avatar,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Collapse,

    } from '@mui/material';
    import { Outlet, useLocation, useNavigate } from 'react-router-dom';
    import { drawerMenu } from '../../constants/menu';
    import MenuIcon from "@mui/icons-material/Menu"
    import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
    import ChevronRightIcon from '@mui/icons-material/ChevronRight'

    const drawerWidth = 280

    const MenuItem = ({item}) => {
        const navigate = useNavigate()
        const {children, title, path} = item
        const [open, setOpen] = useState(false)
        if(children){
        return (
        <>
        <ListItem onClick={()=>setOpen(status=>!status)} >
        <ListItemButton>
        <ListItemText sx={{fontWeight:400}} primary={item.title}
        disableTypography />
        </ListItemButton>
        {open?(<ExpandMoreIcon />):(<ChevronRightIcon />)}
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
        <List component="div" disablePadding>
        {
        children.map((child, index)=> {
        return(
        <ListItem key={index}
        onClick={()=>navigate(child.path)} disablePadding>
        <ListItemButton sx={{height:42, fontWeight:'200',
        padding: th=> th.spacing(0,2.5,0,3) }} >
        <ListItemIcon sx={{width:26, height:26,
        display:'flex', alignItems:'center', justifyContent:'center', padding:
        th=>th.spacing(0,2,0,0)}} >
        <Box
        component='span'
        sx={{width:4, height:4, display:'flex',
        borderRadius:'50%', alignItems:'center', justifyContent:'center',
        backgroundColor:'text.disabled'}}
        />
        </ListItemIcon>
        <ListItemText sx={{fontWeight:400}}
        primary={child.title} />
        </ListItemButton>
        </ListItem>
        )
        })
        }
        </List>
        </Collapse>
        </>
        )
        }
        return (
        <>
        <ListItem onClick={()=>navigate(path)} >
        <ListItemButton>
        <ListItemText sx={{fontWeight:400}} primary={title}
        disableTypography />
        </ListItemButton>
        </ListItem>
        </>
        )
        }
        

    const Menu = ({items}) => {
        return(
        <List>
        {
        items.map((item, index)=><MenuItem key={item.title} item={item} />)
        }
        </List>
        )
        }
        

    const SideMenu = ({open, onClose}) => {
        const { pathname } = useLocation()
        useEffect(()=>{
        if(open){
        onClose()
        }
        }, [pathname] )
        return(
        <Box sx={{display:'flex'}}>
        <Drawer open={open} onClose={onClose} sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        },
        }}>
        <Menu items={drawerMenu} />
        </Drawer>
        </Box>
        )
        }

const DashboardLayout = () => {
    const [open, setOpen] = useState(false)
    return (
        <Box sx={{ display: 'flex' }}>
        <AppBar position="absolute">
        <Toolbar
        sx={{
        pr: '24px',
        }}
        >
        <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
        >
        Pilar Tecno Web - Dario Marconi
        </Typography>
        <IconButton
        size="small"
        sx={{ ml: 2 }}
        >
        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
        </IconButton>
        </Toolbar>
        </AppBar>
        <SideMenu open={open} onClose={()=>setOpen(false)} />
        <Box
        component="main"
        sx={{
        backgroundColor: (theme) =>
        theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        }}
        >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Outlet/>
        </Container>
        </Box>
        </Box>
        )
        
}
export default DashboardLayout