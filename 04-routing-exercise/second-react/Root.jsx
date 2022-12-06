import { BrowserRouter, Link, Route } from "react-router-dom";

export default function Root(){
    return <div><BrowserRouter>
    <Link to={"/second"}>Home</Link>
    <Link to={"/second/queues"}>queues</Link>

    <Route path={"/second"}>
        home page for the second app
    </Route>
    <Route path={"/second/queues"}>
        this is the queues page
    </Route>
    </BrowserRouter></div>
}