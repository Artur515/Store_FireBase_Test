import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../routes/routes";
import {LOGIN_ROUTE, PRODUCT_LIST} from "../../utils/constants";

const AppRouter = () => {
    const isAuth = false

    return isAuth ? (
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
};

export default AppRouter;