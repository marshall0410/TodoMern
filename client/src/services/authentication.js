import jwt_decode from "jwt-decode";

const getAuth = () => {
    let token = localStorage.getItem('token');
    if (token === 'undefined' || token === null) return false;
    let decrypt = jwt_decode(token);
    if (decrypt.exp < Date.now()/1000) return false;
    console.log(Math.floor(decrypt.exp - Date.now()/1000));
    return true;
}

const auth = {
    getAuth,
}

export default auth;
