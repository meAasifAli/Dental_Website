import { Link, useLocation, useNavigate } from "react-router-dom"
import { IoGridOutline } from "react-icons/io5";
import Navlinks from "../links/Navlinks";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import { useState } from "react";

const Navbar = () => {

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]
    const { pathname } = useLocation()
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {links.map((link, id) => (
                    <ListItem key={id} disablePadding>
                        <ListItemButton onClick={() => navigate(link.path)}>
                            <ListItemText primary={link.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <div className={`w-full pt-4 sm:pt-8 ${pathname === "/services" || pathname === "/blogs" || pathname === "/about" || pathname === "/contact" ? "bg-[#E6F6FE]" : "bg-[#fff]"}`}>
            <div className={`${pathname === '/services' || pathname === "/blogs" || pathname === "/about" || pathname === "/contact" ? "sm:bg-white" : "sm:bg-[#E6F6FE]"} w-full max-w-[1280px] h-[90px] mx-auto rounded-lg`}>
                <nav className={`flex items-center w-full justify-between sm:px-8 px-4`}>
                    <div>
                        <img src="/assets/logo.png" className="w-24 h-24 object-contain" alt="" />
                    </div>
                    <div className="hidden sm:flex items-center gap-4">
                        <Navlinks isFooter={false} />
                    </div>
                    <div className="hidden sm:flex items-center gap-4">
                        {
                            pathname === '/login' || pathname === "/signup" ? <>

                                <Link to={'/login'} className="text-[#011632] font-semibold text-[16px] tracking-wider">login</Link>
                                <Link to={'/signup'} className="bg-[#1376F8] text-white px-4 py-2 rounded-lg">signup</Link>
                            </> : <>

                                <img className="h-12 w-12 object-contain rounded-full" src='https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png' alt="err" />
                                <button className="bg-[#1376F8] text-white px-4 py-2 rounded-lg">Book Now</button>
                            </>
                        }
                    </div>
                    <button onClick={toggleDrawer(true)} className="block sm:hidden bg-[#1376F8] p-2 rounded-lg">
                        <IoGridOutline color="white" />
                    </button>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                </nav>
            </div>
        </div>
    )
}
export default Navbar