import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Home from "Routes/Home"
import TV from "Routes/TV"
import Search from "Routes/Search"
import Detail from "Routes/Detail"

import Header from "Components/Header"

function Screens() {
    //메치패이지가 없으면 fail반환 (Router)
    // exact 정확하게 경로가 일치할 경우
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tv" component={TV} />
                <Route path="/search" component={Search} />
                <Route path="/movie/:id" component={Detail} />
                <Route path="/show/:id" component={Detail} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    )
}

export default Screens