interface ProductsParams{
    limit?:number,
    offset?:number,
    title?:string,
    price?:number,
    price_min?:number,
    price_max?:number,
    categoryId?:number,
    categorySlug?:string,
}
interface GetSingleProductArgs{
    id:number,
    params:ProductsParams
}
export type {ProductsParams,GetSingleProductArgs}