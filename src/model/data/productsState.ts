
interface Size{
    size:number,
    isHave:boolean
}
interface Rating{
    rate:number,
    count:number
}
interface Category{
 "id":number,
      "name": string,
      "image": string,
      "slug":string
}
interface Product{
    id:number,
    title:string,
    slug:string,
    price:number,
    images:string[],
    category:Category,
    isFavorite:boolean,
    description:string,
    size:Size[],
    quantity:number,
    rating:Rating
}
interface ProductsState{
    productList:Product[],
    bestSellerProducts:Product[],
    populerProducts:Product[],
    bestOfferProducts:Product[],
    pending:boolean,
    error:any,
    product:Product | null,
    detailPending:boolean
}

export type {ProductsState,Product,Size}