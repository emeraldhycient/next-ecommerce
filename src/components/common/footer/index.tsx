import React from 'react';
import { Grid, Container, Box, Typography, InputBase, Button, Link } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='w-full'>
            <Container maxWidth={false} sx={{
                minHeight: '100px', width: '100%', bgcolor: "#FAFAFA",
                py: 4,
                px: [4, null, 12],
            }}>
                <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Image src="/images/logo/logo.svg" height={32} width={108} className='mr-[109px]' alt="bandage logo" />
                    </Grid>
                    <Grid item>
                        <Box>
                            <Link href="#" color="inherit" sx={{ mx: 1 }}>
                                <Facebook color='primary' />
                            </Link>
                            <Link href="#" color="inherit" sx={{ mx: 1 }}>
                                <Instagram color='primary' />
                            </Link>
                            <Link href="#" color="inherit" sx={{ mx: 1 }}>
                                <Twitter color='primary' />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Container maxWidth={false} sx={{
                py: 4,
                px: [4, null, 12],
                minHeight: '200px', bgcolor: "white", my: "50px"
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" sx={{
                            color: '#252B42',
                            fontSize: 16,
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: '24px',
                            letterSpacing: '0.1px',
                            mb: 2
                        }}>
                            Company Info
                        </Typography>
                        <Link
                            href="#"
                            sx={{
                                display: 'block',
                                color: ' #737373',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: '24px',
                                letterSpacing: '0.2px',
                            }}
                        >
                            Sublink 1
                        </Link>
                        <Link
                            href="#"
                            sx={{
                                display: 'block',
                                color: ' #737373',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: '24px',
                                letterSpacing: '0.2px',
                            }}
                        >                            Sublink 2
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" sx={{
                            color: '#252B42',
                            fontSize: 16,
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: '24px',
                            letterSpacing: '0.1px',
                            mb: 2
                        }}>Legal</Typography>
                        <Link
                            href="#"
                            sx={{
                                display: 'block',
                                color: ' #737373',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: '24px',
                                letterSpacing: '0.2px',

                            }}
                        >                            Sublink 3
                        </Link>
                        <Link
                            href="#"
                            sx={{
                                display: 'block',
                                color: ' #737373',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: '24px',
                                letterSpacing: '0.2px',
                            }}
                        >                            Sublink 4
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" sx={{
                            color: '#252B42',
                            fontSize: 16,
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: '24px',
                            letterSpacing: '0.1px',
                            mb: 2

                        }}>Features</Typography>
                        <Link
                            href="#"
                            sx={{
                                display: 'block',
                                color: ' #737373',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: '24px',
                                letterSpacing: '0.2px',
                            }}
                        >                            Sublink 3
                        </Link>
                        <Link
                            href="#"
                            sx={{
                                display: 'block',
                                color: ' #737373',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: '24px',
                                letterSpacing: '0.2px',
                                mb: 2

                            }}
                        >                            Sublink 4
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" sx={{
                            color: '#252B42',
                            fontSize: 16,
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: '24px',
                            letterSpacing: '0.1px',
                            mb: 2
                        }}>Resources</Typography>
                        <Link
                            href="#"
                            sx={{
                                display: 'block',
                                color: ' #737373',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: '24px',
                                letterSpacing: '0.2px',
                            }}
                        >                            Sublink 3
                        </Link>
                        <Link
                            href="#"
                            sx={{
                                display: 'block',
                                color: ' #737373',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: '24px',
                                letterSpacing: '0.2px',
                            }}
                        >                            Sublink 4
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{
                            color: '#252B42',
                            fontSize: 16,
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: '24px',
                            letterSpacing: '0.1px',
                            mb: 2
                        }}>Get in Touch</Typography>
                        <InputBase placeholder="Enter your email" sx={{ width: '80%', mr: 1 }} />
                        <Button variant="contained" color="primary">
                            Subscribe
                        </Button>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            Stay updated with our latest news and promotions.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth={false} sx={{
                py: 3,
                px: [4, null, 12],
                minHeight: '50px', bgcolor: "#FAFAFA"
            }}>
                <Typography variant="body2" align="left">
                    Made With Love By Finland. All Rights Reserved.
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
