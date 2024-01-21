import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const HeroSection = () => {
    return (
        <section className="p-10 md:px-[148px] md:py-[80px]">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                position: 'relative',
                                paddingBottom: '56.25%', // Aspect ratio 16:9
                                height: 0,
                                overflow: 'hidden',
                                backgroundImage: 'url(/images/bg/card1.svg)',
                                backgroundSize: 'cover',
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    position: 'absolute',
                                    top: 16,
                                    left: 16,
                                    color: '#2DC071',
                                    fontSize: 14,
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: '24px',
                                    letterSpacing: '0.2px',
                                }}
                            >
                                5 Items
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    position: 'absolute',
                                    top: 36,
                                    left: 16,
                                    color: ' #252B42',
                                    fontSize: 40,
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: '50px',
                                    letterSpacing: '0.2px',
                                }}
                            >
                                FURNITURE
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    position: 'absolute',
                                    top: 80,
                                    left: 16,
                                    color: '#252B42',
                                    fontSize: 14,
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: '24px',
                                    letterSpacing: '0.2px',
                                }}
                            >
                                Read More
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                position: 'relative',
                                paddingBottom: '28.125%', // Aspect ratio 16:9 for half the height
                                height: 0,
                                overflow: 'hidden',
                                backgroundImage: 'url(/images/bg/card2.svg)',
                                backgroundSize: 'cover',
                                marginBottom: 2
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    position: 'absolute',
                                    top: 16,
                                    left: 16,
                                    color: '#2DC071',
                                    fontSize: 14,
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: '24px',
                                    letterSpacing: '0.2px',
                                }}
                            >
                                5 Items
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    position: 'absolute',
                                    top: 36,
                                    left: 16,
                                    color: ' #252B42',
                                    fontSize: 40,
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: '50px',
                                    letterSpacing: '0.2px',
                                }}
                            >
                                FURNITURE
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    position: 'absolute',
                                    top: 80,
                                    left: 16,
                                    color: '#252B42',
                                    fontSize: 14,
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: '24px',
                                    letterSpacing: '0.2px',
                                }}
                            >
                                Read More
                            </Typography>
                        </Box>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        paddingBottom: '56.25%', // Aspect ratio 1:1
                                        height: 0,
                                        overflow: 'hidden',
                                        backgroundImage: 'url(/images/bg/card3.svg)',
                                        backgroundSize: 'cover',
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            position: 'absolute',
                                            top: 16,
                                            left: 16,
                                            color: '#2DC071',
                                            fontSize: 14,
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            lineHeight: '24px',
                                            letterSpacing: '0.2px',
                                        }}
                                    >
                                        5 Items
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            position: 'absolute',
                                            top: 36,
                                            left: 16,
                                            color: ' #252B42',
                                            fontSize: 40,
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            lineHeight: '50px',
                                            letterSpacing: '0.2px',
                                        }}
                                    >
                                        FURNITURE
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            position: 'absolute',
                                            top: 80,
                                            left: 16,
                                            color: '#252B42',
                                            fontSize: 14,
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            lineHeight: '24px',
                                            letterSpacing: '0.2px',
                                        }}
                                    >
                                        Read More
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        paddingBottom: '56.25%', // Aspect ratio 1:1
                                        height: 0,
                                        overflow: 'hidden',
                                        backgroundImage: 'url(/images/bg/card4.svg)',
                                        backgroundSize: 'cover',
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            position: 'absolute',
                                            top: 16,
                                            left: 16,
                                            color: '#2DC071',
                                            fontSize: 14,
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            lineHeight: '24px',
                                            letterSpacing: '0.2px',
                                        }}
                                    >
                                        5 Items
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            position: 'absolute',
                                            top: 36,
                                            left: 16,
                                            color: ' #252B42',
                                            fontSize: 40,
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            lineHeight: '50px',
                                            letterSpacing: '0.2px',
                                        }}
                                    >
                                        FURNITURE
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            position: 'absolute',
                                            top: 80,
                                            left: 16,
                                            color: ' #252B42',
                                            fontSize: 14,
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            lineHeight: '24px',
                                            letterSpacing: '0.2px',
                                        }}
                                    >
                                        Read More
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </section>
    );
};

export default HeroSection;
