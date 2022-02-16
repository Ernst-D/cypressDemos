/* eslint-disable no-console */
const _cookies = {
    preserveOnce(cookieName:string){
        return cookieName;
    }
};

class Cypress {
    
    get Cookies(){
        return console.log(_cookies);
    }

    env(envVariable: string){
        return console.log(envVariable);
    }
}
export default Cypress;