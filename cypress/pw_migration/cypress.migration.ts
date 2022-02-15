const _cookies = {
    preserveOnce(cookieName:string){
        return cookieName;
    }
};

class Cypress {
    get Cookies(){
        return _cookies;
    }
}
export default Cypress;