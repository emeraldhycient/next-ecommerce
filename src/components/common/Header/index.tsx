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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import navbarLinks from '@/constants';

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

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: "none" }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <Image src="/images/logo/logo.svg" height={32} width={108} alt="bandage logo" />

                    {!isMobile && (
                        <>
                            {/* Desktop Links */}
                            {
                                navbarLinks.map((item, i) =>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="a"
                                        href="#app-bar-with-responsive-menu"
                                        sx={{
                                            ml: 2,
                                            // display: { xs: 'none', md: 'flex' },
                                            fontSize:'14px',
                                            fontWeight: 700,
                                            letterSpacing: '.2px',
                                            lineHeight:'24px',
                                            color: '#737373',
                                            textDecoration: 'none',
                                        }}
                                    >
                                      {item?.title}
                                    </Typography>
                                )
                            }
                        </>
                    )}
                </Typography>
                {!isMobile && (
                    <>
                        {/* Other Desktop Items */}
                        <Typography variant="body1" sx={{ marginRight: 2, color: 'blue' }}>
                            <PersonIcon /> Sign In/Register
                        </Typography>
                        <IconButton color="inherit">
                            <SearchIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <ShoppingCartIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <FavoriteIcon />
                        </IconButton>
                    </>
                )}
                {isMobile && (
                    <>
                        {/* Mobile Icons */}
                        <IconButton color="inherit">
                            <SearchIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <ShoppingCartIcon />
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
    );
};

export default Header;
