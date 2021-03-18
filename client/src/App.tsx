import "./App.css";
import React, { useState } from "react";
import Users from "./components/Users";
import User from "./components/User";
import Posts from "./components/Posts";
import Post from "./components/Post";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Link to="/users">Users</Link> <br />
                    <Link to="/posts">Posts</Link> <br />
                </Route>
                <Route path="/users/:id">
                    <User />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/posts/:id">
                    <Post />
                </Route>
                <Route path="/posts">
                    <Posts />
                </Route>
                <Route path="*">
                    404 <br />
                    <Link to="/">home</Link>
                </Route>
            </Switch>
            <br />
            <br />
            <br />
            <br />
            <Link to="/">home</Link>
        </Router>
    );
};
export default App;
