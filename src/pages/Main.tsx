import { Link } from "react-router-dom"

export const Main = () => {


    return <>
        <h1>App main</h1>
        <Link to="/auth/login">Login page</Link>
        <Link to="/auth/signup">Sign Up page</Link>
    </>
}