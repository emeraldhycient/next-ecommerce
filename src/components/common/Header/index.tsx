'use client'
import React, { MouseEvent, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import {navbarLinks} from '@/constants';
import { Box, Grid } from '@mui/material';


const Header: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleMobileMenuClose}>Link 1</MenuItem>
            <MenuItem onClick={handleMobileMenuClose}>Link 2</MenuItem>
            {/* Add more menu items here if needed */}
        </Menu>
    );

    const topSection = !isMobile ? (
        <Box bgcolor="secondary" sx={{ backgroundColor: "#23856D", color: 'white', padding: '10px 24px' }}>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                    <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                            <Image src="/images/icons/phone.svg" height={16} width={16} alt="phone logo" />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    ml: "5px",
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    letterSpacing: '.2px',
                                    lineHeight: '24px',
                                    color: '#FFFFFF',
                                    textDecoration: 'none',
                                }}
                            >
                                (225) 555-0118
                            </Typography>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                            <Image src="/images/icons/email.svg" height={16} width={16} alt="email logo" />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    ml: "5px",
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    letterSpacing: '.2px',
                                    lineHeight: '24px',
                                    color: '#FFFFFF',
                                    textDecoration: 'none',
                                }}
                            >
                                michelle.rivera@example.com
                            </Typography>
                        </Typography>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            fontSize: '14px',
                            fontWeight: 700,
                            letterSpacing: '.2px',
                            lineHeight: '24px',
                            color: '#FFFFFF',
                            textDecoration: 'none',
                        }}
                    >
                        Follow Us and get a chance to win 80% off
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" sx={{
                        display: 'flex', alignItems: 'center', fontSize: '14px',
                        fontWeight: 700,
                        letterSpacing: '.2px',
                        lineHeight: '24px',
                        color: '#FFFFFF',
                        textDecoration: 'none'
                    }}>
                        Follow Us:
                        <Image src="/images/icons/2.svg" height={16} width={16} className='ml-4' alt="email logo" />
                        <Image src="/images/icons/1.svg" height={16} width={16} className='ml-4' alt="email logo" />
                        <Image src="/images/icons/4.svg" height={16} width={16} className='ml-4' alt="email logo" />
                        <Image src="/images/icons/5.svg" height={16} width={16} className='ml-4' alt="email logo" />
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    ) : null;

    return (
        <>
            {
                topSection
            }
            <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: "none" }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <Image src="/images/logo/logo.svg" height={32} width={108} className='mr-[109px]' alt="bandage logo" />

                        {!isMobile && (
                            <>
                                {/* Desktop Links */}
                                {
                                    navbarLinks.map((item, i) =>
                                        <Typography variant="h6" key={i} component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography
                                                variant="h6"
                                                noWrap
                                                component="a"
                                                href="#app-bar-with-responsive-menu"
                                                sx={{
                                                    ml: 2,
                                                    // display: { xs: 'none', md: 'flex' },
                                                    fontSize: '14px',
                                                    fontWeight: 700,
                                                    letterSpacing: '.2px',
                                                    lineHeight: '24px',
                                                    color: '#737373',
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                {item?.title}
                                            </Typography>
                                            {
                                                item?.children && <KeyboardArrowDownIcon sx={{ color: "#252B42", height: "13px", width: '13px' }} />
                                            }
                                        </Typography>
                                    )
                                }
                            </>
                        )}
                    </Typography>
                    {!isMobile && (
                        <>
                            {/* Other Desktop Items */}
                            <Typography variant="body1" color='primary' sx={{
                                marginRight: 2, fontSize: '14px',
                                fontWeight: 700,
                                letterSpacing: '.2px',
                                lineHeight: '24px',
                                 }}>
                                <PersonIcon color='primary' sx={{ height: "16px", width: "16px" }} /> Sign In/Register
                            </Typography>
                            <IconButton color="primary">
                                <SearchIcon sx={{height:"16px",width:"16px"}} />
                            </IconButton>
                            <IconButton color="primary">
                                <ShoppingCartIcon sx={{ height: "16px", width: "16px" }} />
                            </IconButton>
                            <IconButton color="primary">
                                <FavoriteIcon sx={{ height: "16px", width: "16px" }} />
                            </IconButton>
                        </>
                    )}
                    {isMobile && (
                        <>
                            {/* Mobile Icons */}
                            <IconButton color="inherit">
                                <SearchIcon sx={{ height: "16px", width: "16px" }} />
                            </IconButton>
                            <IconButton color="inherit">
                                <ShoppingCartIcon sx={{ height: "16px", width: "16px" }} />
                            </IconButton>
                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMobileMenuOpen}
                            >
                                <MenuIcon />
                            </IconButton>
                        </>
                    )}
                </Toolbar>

                {isMobile && mobileMenu}
            </AppBar>
        </>
    );
};

export default Header;
