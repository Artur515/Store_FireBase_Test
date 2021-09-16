import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._isAuth = false
        this._productList = null
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