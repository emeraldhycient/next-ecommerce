'use client'
import BestSellerSection from '@/components/home/bestseller/bestSellerSection'
import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'next/navigation'
import { productService } from '@/services'
import { Product } from '@/constants/types/types'
import ProductDisplay from '@/components/details/productDisplay'
import { CircularProgress, Typography } from '@mui/material'

function Page() {
    // const { id }: any = useParams()
    const [product, setProduct] = useState<Product | any>(null)
    const [isLoading, setisLoading] = useState(false)

    const fetchProduct = useCallback(async () => {
        setisLoading(true)
        try {
            const data = await productService.getProduct(4)
            console.log(data)

            setProduct(data?.data)

            setisLoading(false)

        } catch (error) {
            console.log(error)
            setisLoading(false)
        }
    }, [])


    useEffect(() => {
        fetchProduct()
    }, [fetchProduct])


    return (
        <section>
            {

                isLoading ? <div>
                    <CircularProgress />
                    <Typography variant="h6">Loading Products</Typography>
                </div> :
                    <section className="p-10 md:px-[148px] md:pb-[40px]">
                        {/* <ProductDisplay product={product} /> */}
                    </section>
            }

            <BestSellerSection isDetails={true} />
        </section>
    )
}

export default Page