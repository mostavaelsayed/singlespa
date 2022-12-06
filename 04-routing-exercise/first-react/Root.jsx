import { BrowserRouter, Link, Route } from "react-router-dom";

export default function Root(){
    return <div><BrowserRouter>
    <Link to={"/first"}>Home</Link>
    <Link to={"/first/admin"}>Administration</Link>

    <Route path={"/first"}>
        home page for the first app
    </Route>
    <Route path={"/first/admin"}>
        this is the administration app
    </Route>
    </BrowserRouter></div>
}