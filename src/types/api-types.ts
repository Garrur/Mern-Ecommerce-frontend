import { Bar, CartItem, Line, Order, Pie, Product, ShippingInfo, Stats, User } from "./types";

export type CustomError = {
    status: number;
    data:{
        message: string;
        success: boolean;
    };
}

export type MessageResponse = {
    success: boolean;
    message: string;
};
export type AllUsersResponse = {
    success: boolean;
    users: User[];
};
export type UserResponse = {
    success: boolean;
    user: User;
};

export type AllProductsRespone ={
    success: boolean;
    products:Product[];
};

export type CategoriesRespone ={
    success: boolean;
    categories: string[];
};

export type SearchProductsRespone ={
    success: boolean;
    products:Product[];
    totalPage:number;
};
export type SearchProductsRequest = {
    price:number;
    page:number;
    category:string;
    search:string;
    sort:string;
};

export type ProductRespone ={
    success: boolean;
    product:Product;
};


export type NewProductResponse = {
    id: string;
    formData: FormData;
};
export type UpdateProductResponse = {
    userId: string;
    productId: string;
    formData: FormData;
};
export type DeleteProductResponse = {
    userId: string;
    productId: string;
    
};

export type AllOrdersRespone ={
    success: boolean;
    orders: Order[];
};

export type OrderDetailsRespone ={
    success: boolean;
    orders: Order;
};

export type StatsRespone ={
    success: boolean;
    stats: Stats;
};

export type PieRespone ={
    success: boolean;
    charts: Pie;
};

export type BarRespone ={
    success: boolean;
    charts: Bar;
};

export type LineRespone ={
    success: boolean;
    charts: Line;
};


export type NewOrderRequest = {
    shippingInfo:ShippingInfo;
    orderItems: CartItem [];
    subtotal:number;
    tax:number;
    shippingCharges:number;
    discount:number;
    total:number;
    user:string;
};

export type UpdateOrderRequest = {
    userId: string;
    orderId: string;
};

export type DeleteUserRequest = {
    userId: string;
    adminUserId: string;
};

