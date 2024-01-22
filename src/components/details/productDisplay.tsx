import React from 'react';
import { Box, Grid, Typography, Divider, Button, IconButton, CardMedia, Rating } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Product } from '@/constants/types/types';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart, addToSavedItems } from '@/store/slices/cartSlice';

const ProductDisplay = ({ product }: { product: Product }) => {
    const dispatch = useDispatch();

    //TODO: clean up the alert to react toast
    const handleAddToCart = () => {
        dispatch(addToCart(JSON.stringify(product)));
        alert('Item added to cart!');
    };

    const handleAddToSavedItems = () => {
        dispatch(addToSavedItems(JSON.stringify(product)));
        alert('Item added to saved items!');
    };


    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <CardMedia
                    component="img"
                    height="300"
                    image={product?.thumbnail}
                    alt={product?.title}
                />
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
                    {product?.images?.map((image, index) => (
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
                <Box display="flex">
                    <Button variant="contained" color="primary" sx={{ color: 'white', mr: 1 }}>
                        Select Options
                    </Button>
                    <IconButton aria-label="add to favorites" onClick={handleAddToSavedItems}>
                        <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton aria-label="add to cart" onClick={handleAddToCart}>
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
