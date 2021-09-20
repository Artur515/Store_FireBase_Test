import {LOGIN_ROUTE, PRODUCT_ADD, PRODUCT_EDIT, PRODUCT_INFO, PRODUCT_LIST} from "../utils/constants";
import Login from "../components/login/Login";
import ProductList from "../components/productList/ProductList";
import ProductAddEdit from "../components/productAdd/ProductAddEdit";
import ProductInfo from "../components/productEdit/ProductInfo";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: PRODUCT_LIST,
        Component: ProductList
    },
    {
        path: PRODUCT_INFO,
        Component: ProductInfo
    },
    {
        path: PRODUCT_ADD,
        Component: ProductAddEdit
    },
    {
        path: PRODUCT_EDIT,
        Component: ProductAddEdit
    }
]