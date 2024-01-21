'use client'
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { IPost } from '@/constants/types/types';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CommentIcon from '@mui/icons-material/Comment';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

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
                mb={"8px"}
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
                                        <Typography
                                            key={index}
                                            variant="body2"
                                            sx={{
                                                color: '#737373',
                                                fontSize: '12px',
                                                fontStyle: 'normal',
                                                fontWeight: 400,
                                                lineHeight: '16px',
                                                letterSpacing: '0.2px',
                                            }}
                                        >
                                            {tag}
                                        </Typography>
                                    ))}
                                </Box>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        color: '#252B42',
                                        fontSize: '20px',
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                        lineHeight: '30px',
                                        letterSpacing: '0.2px',
                                    }}
                                >
                                    {post.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#737373',
                                        fontSize: '14px',
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                        lineHeight: '20px', // 142.857%
                                        letterSpacing: '0.2px',
                                    }}
                                >
                                    {post.description}
                                </Typography>

                                <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                                    <Box display="flex" alignItems="center">
                                        <AccessTimeIcon color='primary' />
                                        <Typography
                                            variant="body2"
                                            ml={1}
                                            sx={{
                                                color: '#737373',
                                                fontSize: '12px',
                                                fontStyle: 'normal',
                                                fontWeight: 400,
                                                lineHeight: '16px', 
                                                letterSpacing: '0.2px',
                                            }}
                                        >
                                            {post.date}
                                        </Typography>
                                    </Box>

                                    <Box display="flex" alignItems="center">
                                        <CommentIcon color='primary' />
                                        <Typography
                                            variant="body2"
                                            ml={1}
                                            sx={{
                                                color: '#737373',
                                                fontSize: '12px',
                                                fontStyle: 'normal',
                                                fontWeight: 400,
                                                lineHeight: '16px', 
                                                letterSpacing: '0.2px',
                                            }}
                                        >
                                            {post.commentCount} comments
                                        </Typography>
                                    </Box>

                                </Box>
                                <Button
                                    endIcon={<ArrowRightIcon />}
                                    sx={{
                                        color: '#737373',
                                        fontSize: '14px',
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        lineHeight: '24px', // 171.429%
                                        letterSpacing: '0.2px',
                                    }}
                                >
                                    Learn More
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </section>
    );
}

export default FeaturedPostSection;
