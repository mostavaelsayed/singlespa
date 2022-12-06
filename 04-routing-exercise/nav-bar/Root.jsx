import { BrowserRouter, Link } from "react-router-dom";

export default function Root(){
    const linkStyle = {
        padding: "16px",
        display: "inline-block",
      };

    return <BrowserRouter>
        <Link to={"/"} style={linkStyle}>Home</Link>
        <Link to={"/first"} style={linkStyle}>React App 1</Link>
        <Link to={"/second"} style={linkStyle}>React App 2</Link>
    </BrowserRouter>
}