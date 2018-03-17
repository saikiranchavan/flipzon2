import { Url } from "url";

export interface flipProducts{
    productId:number;
    title:string;
    imageUrl:string;
    categoryPaths:string
    mrp:number;
    price:number;
    productUrl:string;
    productDescription:string;
    productBrand:string;
    productShippingBaseInfo:string;
    inStock:boolean;
    isAvailable:boolean;
    codAvailable:boolean;
    emiAvailable:boolean;
    offers:any[];
    discount:number;
    cashBack:string;
    size :number;
    color:string;
    sizeUnit:string;
    sizeVariants:any[];
    colorVariants:any[];
    styleCode:string;
    offset:string;
}