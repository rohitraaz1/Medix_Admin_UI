export class Categories{
    Id!:string;
    Name!:string;
    imageUrl!:string;
}
export interface SubCategories{
    Id:number;
    Name:string;
    imageUrl:string;
}
// prod_Id?:string;
// prod_Name:string;
// //prod_Description:string;
// prod_Category:string;
// prod_SubCategory:string;
// prod_Price:number;
// //prod_Selling_Price:number;
// //prod_Cost_Price:number;
// img:string;
// prod_In_Stock:number;

//for creating product 
export interface Product{
    Name?:string;
    Price?:string; 
    Quantity?:string;
    Vendor?:string;
    Descriptions?:string;
    CategoriesId?:string; 
    SubCategoriesId?:string;
    ImageUrl?:File; 
}

//for getting product
export interface GetProduct{
    Id:string;
    Name:string;
    Price:string; 
    Quantity:string;
    Vendor?:string;
    Descriptions?:string;
    CategoriesId?:string; 
    Category?:string;
    SubCategoriesId?:string;
    SubCategories?:string;
    ImageUrl?:string; 
}
             