import axiosClient from "@/helpers/apiClient";

class ProductService {
    async getProducts(pageNumber: number) {
        return await axiosClient.get(`/products?limit=10&skip=${pageNumber}`)
    }
}


export default ProductService;
export const productService = new ProductService()