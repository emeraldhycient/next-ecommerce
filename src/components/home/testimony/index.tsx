'use client'
import React from 'react';
import { Grid, Typography, Box, Avatar, Rating, CardMedia } from '@mui/material';

const TestimonialSection = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Regina Miles',
            role: 'Designer',
            rating: 5,
            review: 'Slate helps you see how many more days you need to work to reach your financial goal.',
            image: '/images/blog/testi.png',
        },
    ];

    return (
        <section className="p-10 md:px-[148px] md:py-[40px]">

            <Grid container spacing={4}>
                {testimonials.map((testimonial) => (
                    <React.Fragment key={testimonial.id}>
                        <Grid item xs={12} md={6}>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Typography variant="h4" gutterBottom sx={{ color: '#252B42', textAlign: 'center', fontSize: 24, fontWeight: 700, lineHeight: '32px', letterSpacing: '0.1px' }}>
                                    What they say about us
                                </Typography>
                                <Avatar alt={testimonial.name} src={testimonial.image} sx={{ width: 90, height: 90, mb: 2,mt:"30px" }} />
                                <Rating name="read-only" sx={{my:"20px"}} value={testimonial.rating} readOnly />
                                <Typography
                                    variant="body1"
                                    align="center"
                                    sx={{
                                        mb: 2,
                                        color: 'var(--second-text-color, #737373)',
                                        textAlign: 'center',
                                        fontFamily: 'Montserrat',
                                        fontSize: '14px',
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        lineHeight: '24px',
                                        letterSpacing: '0.2px'
                                    }}
                                >
                                    {testimonial.review}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    align="center"
                                    sx={{
                                        textAlign: 'center',
                                        fontFamily: 'Montserrat',
                                        fontSize: '14px',
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        lineHeight: '24px',
                                        letterSpacing: '0.2px'
                                    }}
                                    color='primary'
                                >
                                    {testimonial.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    align="center"
                                    sx={{
                                        color: ' #252B42',
                                        textAlign: 'center',
                                        fontSize: '14px',
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        lineHeight: '24px',
                                        letterSpacing: '0.2px'
                                    }}
                                >
                                    {testimonial.role}
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box display="flex" justifyContent="center">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    sx={{
                                        height: 400,
                                        objectFit: 'contain'
                                    }}
                                    image={testimonial.image}
                                    alt={testimonial.review}
                                />
                            </Box>
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>
        </section>
    );
};

export default TestimonialSection;
