'use client'
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent, CircularProgress } from '@mui/material';
import ProductGrid from '@/components/card/bestSellerCard';
import { productService } from '@/services/products/product.service';
import { Product } from '@/constants/types/types';

const BestSellerSection: React.FC = () => {

    interface resp {
        limit: number,
        products: Product[],
        skip: number,
        total: number
    }
    const [currentPage, setcurrentPage] = useState(0)
    const [products, setProducts] = useState<resp | null>(null)
    const [isLoading, setisLoading] = useState(false)

    const fetchProducts = async () => {
        setisLoading(true)
        try {
            const data = await productService.getProducts(currentPage)
            console.log(data)

            setProducts(prevState => ({
                limit: data?.data?.limit,
                skip: data?.data?.skip,
                total: data?.data?.total,
                products: [...(prevState?.products || []), ...data?.data?.products]
            }))

            setisLoading(false)

        } catch (error) {
            console.log(error)
            setisLoading(false)
        }
    }


    useEffect(() => {
        fetchProducts()
    }, [currentPage])


    return (
        <section className="p-10 md:px-[148px] md:py-[80px]">
            <Box textAlign="center" my={4}>
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
                    Featured Products
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
                    BESTSELLER PRODUCTS
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        color: '#737373',
                        textAlign: 'center',
                        fontSize: 14,
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '20px',
                        letterSpacing: '0.2px'
                    }}
                >
                    Problems trying to resolve the conflict between
                </Typography>

                <Grid container spacing={2} justifyContent="center" my={2}>

                    {
                        products && products?.products.length > 0 ?
                            products.products.map((item) =>
                                <ProductGrid id={item.id} title={item.title} description={item.description} thumbnail={item.thumbnail} price={item.price} images={item.images} discountPercentage={item.discountPercentage} />
                            )
                            :
                            ""
                    }
                </Grid>
                {
                    isLoading && <div>
                        <CircularProgress />
                        <Typography variant="h6">Loading Products</Typography>
                    </div>
                }
                {
                    products ? currentPage < products?.total ?
                        <Button variant="outlined" onClick={() => setcurrentPage(currentPage + 10)} color="primary" sx={{ mt: 3 }}>
                            Load More
                        </Button>
                        : ""
                        : ""
                }
            </Box>
        </section>
    );
};

export default BestSellerSection;



