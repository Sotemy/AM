import { Spinner } from "react-bootstrap"
import { Navigate } from "react-router-dom"

import { check_user } from "./check_user"


export const UseProtection = (component = "") => {

    const is_logged_in = check_user();

    console.log("is_logged_in")

    if (is_logged_in === true) {
        return component
    } else if (is_logged_in === false) {
        return <Navigate to="/login" replace={true}/>
    }
    return <Spinner animation="grow" />;
}

export const UseAvoid = (component) => {

    const is_logged_in = check_user();

    if (is_logged_in === true) {
        return <Navigate replace={true} to="/" />
    } else if (is_logged_in === false) {
        return component
    }
    return <Spinner animation="grow" />;
}