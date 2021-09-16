import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../routes/routes";
import {LOGIN_ROUTE, PRODUCT_LIST} from "../../utils/constants";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const AppRouter = observer(() => {
    const {productStore} = useContext(Context)
    //
    // console.log(productStore.isAuth)

    return productStore.isAuth ? (
        <Switch>
            {privateRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact={true}/>
            )}
            <Redirect to={PRODUCT_LIST}/>
        </Switch>

    ) : (
        <Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact={true}/>
            )}
            <Redirect to={LOGIN_ROUTE}/>
        </Switch>
    )
});

export default AppRouter;