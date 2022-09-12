import Cookies from 'universal-cookie';


export const check_user = () => {

    const cookies = new Cookies();

    const logged_in = cookies.get("connect.sid")
    if(logged_in){
        return true
    }
    return false
}
