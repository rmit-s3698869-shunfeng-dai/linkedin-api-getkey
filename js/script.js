const response_type = "code";
const grant_type = "authorization_code";
const client_id = "81zxkhll2pxi5s";
const client_secret = "p7e5icpU78myuOQL";
const state = "DCEeFWf45A53sdfKef424fdfefefefe";
const scope = "r_liteprofile%20r_emailaddress%20w_member_social";
// const redirect_uri = "https://www.google.com/";
const redirect_uri = "https://www.linkedin.com/developers/apps/11951355/auth/test";

// let code = "AQQmuL32-6NAb5waZBaZhhLvMJ66arBANNlLG23T-D6LrTjN2hzmzvRBMsfz0n7OaSBEclaGfEA_CZ-Zw5Z5D5ZA71EyXY62XzVASU1ZOCTsmTvZgZF2keKWTeoK0FPg2L-ReE3-FvOZfTZjsvlqbgI8z034GZMziNq4THBTVwjkGtic5dwGbzGF1WAlFA"
let code = ""
const requestAuthorization = async () => {
    const res = await fetch(`https://www.linkedin.com/oauth/v2/authorization?response_type=${response_type}&&client_id=${client_id}&&redirect_uri=${redirect_uri}&&state=${state}&&scope=${scope}`, {
        mode: "no-cors"
    })
    console.log(res)
    console.log(res.data)
}

const requestAccessToken = async () => {
    const res = await fetch(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=${grant_type}&code=${code}&redirect_uri=${redirect_uri}&client_id=${client_id}&client_secret=${client_secret}`, {
        method: "POST",
        mode: "no-cors",
        "Content-Type": "application/x-www-form-urlencoded",
        host: "www.linkedin.com"
    })
}


requestAuthorization();
// requestAccessToken();