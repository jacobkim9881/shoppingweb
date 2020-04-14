import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom'

import ItemPage from '../pages/Item'

export default function ItemsRouter() {    
    let { path } = useRouteMatch();
    return (
        <Route path={`${path}/:id`} children={<ItemPage />} />            
    );
}