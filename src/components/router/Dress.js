import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

import ItemPage from '../../pages/Item'
import Lists from '../../pages/ListItems'

export default function Dress() {    
    let { path } = useRouteMatch();
    return (
        <Main>
            <Switch >
                <Route exact path={path} children={<Lists />} />
                <Route path={`${path}/showitem/:id`} children={<ItemPage />} />
            </Switch>
        </Main>
    );
}

const Main = styled.div`
    margin-top: 7rem;
`