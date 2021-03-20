import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Headers/Header';
import Home from '../components/views/Home';
import Search from '../components/views/Search';
import ShowDetail from '../components/views/ShowDetail';

const index = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Header />
                <Home />
            </Route>

            <Route exact path="/photo/:identifier">
                <Header />
                <ShowDetail />
            </Route>

            <Route exact path="/search/:query">
                <Header />
                <Search />
            </Route>
        </Switch>
    );
}

export default index;
