
interface Size{
    size:number,
    isHave:boolean
}
interface Product{
    id:number,
    name:string,
    price:number,
    image:string,
    category:string,
    isFavorite:boolean,
    description:string,
    size:Size[],
    quantity:number
}
interface ProductsState{
    productList:Product[]
}

export type {ProductsState,Product,Size}