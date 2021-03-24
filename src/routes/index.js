import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
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

            <Route path="*" render={() => {
                return (
                    <div className="vh-100 d-flex justify-content-center align-items-center">
                        <div className="font-weight-bold text-uppercase text-center">
                            <h4>404, Page not found!</h4>
                            <Link className="btn btn-primary btn-sm" to={`/`}>Home</Link>
                        </div>
                    </div>
                )
            }} />
        </Switch>
    );
}

export default index;
