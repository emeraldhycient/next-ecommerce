import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Product } from '@/constants/types/types';



const ProductGrid: React.FC<Product> = ({ id, thumbnail, title, description, price, discountPercentage }) => {
    const discount = discountPercentage ? Math.round(((discountPercentage / 100) * price)) : ""

    return (
        <Grid item key={id} xs={12} sm={6} md={3}>
            <Card>
                <CardMedia
                    component="img"
                    sx={{
                        height: 238, // Fixed height in pixels
                        objectFit: 'cover'
                    }}
                    image={thumbnail}
                    alt={title}
                />

                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" noWrap>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                        {description}
                    </Typography>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                        <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                            ${price}
                        </Typography>
                        <Typography variant="body1" color="success.main">
                            {discount}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ProductGrid;
