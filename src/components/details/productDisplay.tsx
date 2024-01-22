'use client'

import React from 'react';
import { Box, Grid, Typography, Divider, Button, IconButton, CardMedia, Rating } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Product } from '@/constants/types/types';
import Image from 'next/image';

const ProductDisplay = ({ product }: { product: Product }) => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                {/* Image carousel */}
                <CardMedia
                    component="img"
                    height="300"
                    image={product?.thumbnail}
                    alt={product?.title}
                />
                {/* Thumbnails */}
                <Box
                    display="flex"
                    mt={2}
                    overflow="auto"
                    sx={{
                        '&::-webkit-scrollbar': {
                            height: '6px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(0,0,0,0.2)',
                        },
                    }}
                >
                    {product?.images.map((image, index) => (
                        <CardMedia
                            key={index}
                            component="img"
                            image={image}
                            alt={`Thumbnail ${index + 1}`}
                            sx={{ marginRight: 1, cursor: 'pointer', height: "70px", width: "100px" }}
                        />
                    ))}
                </Box>
            </Grid>

            <Grid item xs={12} md={6}>
                <Typography variant="h5">{product?.title}</Typography>
                <Box display="flex" alignItems="center">
                    <Typography variant="body1">  <Rating name="read-only" sx={{ my: "20px" }} value={product?.rating} readOnly /></Typography>
                    <Typography variant="body1">10 Reviews</Typography>
                </Box>
                <Typography variant="h6">{`$${product?.price}`}</Typography>
                <Typography variant="body2">{`Availability: ${product?.stock} in stock`}</Typography>

                <Divider sx={{ my: 2 }} />
                <Image src={"/images/product/product-colors.svg"} width={100} height={30} className='my-6' alt='' />
                {/* Buttons */}
                <Box display="flex">
                    <Button variant="contained" color="primary" sx={{ color: 'white' }}>
                        Select Options
                    </Button>
                    <IconButton aria-label="add to favorites">
                        <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton aria-label="add to cart">
                        <ShoppingCartOutlinedIcon />
                    </IconButton>
                    <IconButton aria-label="view">
                        <VisibilityOutlinedIcon />
                    </IconButton>
                </Box>
            </Grid>
        </Grid>
    );
};

export default ProductDisplay;
