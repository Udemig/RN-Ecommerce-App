import { Product } from "./productsState";

interface CartState{
    cart:Product[],
    visible:boolean,
}

export type {CartState}