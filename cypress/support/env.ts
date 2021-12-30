const _webmail: Env.Webmail = {
    url: new URL("https://ej2.syncfusion.com/showcase/typescript/webmail")
};
const _cypressRWA: Env.CypressRWA = {
    url: new URL("http://localhost:3000")
};

export default {
    webmail: _webmail,
    cypressRWA: _cypressRWA,
    flags:{
        mobile:"mobile",
        device:"device"
    }
};