import axiosClient from "@/helpers/apiClient";

class ProductService {
    async getProducts(pageNumber: number) {
        return await axiosClient.get(`/products?limit=10&skip=${pageNumber}`)
    }

    async getProduct(id: number | string) {
        return await axiosClient.get(`/products/${id}`)
    }

}


export default ProductService;
export const productService = new ProductService()