import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._isAuth = false
        this._productList = null
        this._productInfo = null
        this._productEdit = null
        this._productId = null
        this._error = null
        this._token = null
        this._loading = false
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setProductList(products) {
        this._productList = products
    }

    setProductInfo(product) {
        this._productInfo = product
    }

    setProductEdit(product) {
        this._productEdit = product
    }

    setProductId(id) {
        this._productId = id
    }

    setToken(token) {
        this._token = token
    }

    setLoading(bool) {
        this._loading = bool
    }

    setError(error) {
        this._error = error
    }

    get isAuth() {
        return this._isAuth
    }

    get productList() {
        return this._productList
    }

    get productInfo() {
        return this._productInfo
    }

    get productEdit() {
        return this._productEdit
    }

    get productId() {
        return this._productId
    }

    get token() {
        return this._token
    }

    get loading() {
        return this._loading
    }

    get error() {
        return this._error
    }

}