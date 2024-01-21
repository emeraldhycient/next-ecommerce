'use client'
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { IPost } from '@/constants/types/types';

interface FeaturedPostSectionProps {
    posts: IPost[];
}

const FeaturedPostSection: React.FC<FeaturedPostSectionProps> = ({ posts }) => {
    return (
        <section className="p-10 md:px-[148px] md:pb-[30px]">
            <Typography
                variant="h5"
                sx={{
                    color: '#737373',
                    textAlign: 'center',
                    fontSize: 20,
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '30px',
                    letterSpacing: '0.2px'
                }}
            >
                Practice Advice
            </Typography>

            <Typography
                variant="h5"
                sx={{
                    color: '#252B42',
                    textAlign: 'center',
                    fontSize: 24,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '32px',
                    letterSpacing: '0.1px'
                }}
            >
                Featured Posts
            </Typography>

            <Grid container spacing={4} mt={"20px"}>
                {posts.map(post => (
                    <Grid item xs={12} md={4} key={post.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                sx={{
                                    height: 238, // Fixed height in pixels
                                    objectFit: 'cover'
                                }}
                                image={post.imageUrl}
                                alt={post.title}
                            />
                            <CardContent>
                                <Box display="flex" flexDirection="row" flexWrap="wrap" gap={1} mb={2}>
                                    {post.tags.map((tag, index) => (
                                        <Typography key={index} variant="body2" color="primary">{tag}</Typography>
                                    ))}
                                </Box>
                                <Typography gutterBottom variant="h5" component="div">
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {post.description}
                                </Typography>
                                <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                                    <Box display="flex" alignItems="center">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i> {/* Use appropriate icons */}
                                        <Typography variant="body2" ml={1}>{post.date}</Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <i className="fa fa-comments-o" aria-hidden="true"></i> {/* Use appropriate icons */}
                                        <Typography variant="body2" ml={1}>{post.commentCount}</Typography>
                                    </Box>
                                </Box>
                                <Button variant="contained" endIcon={<i className="fa fa-arrow-right" aria-hidden="true"></i>}>Learn More</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </section>
    );
}

export default FeaturedPostSection;
