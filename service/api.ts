import axios, { AxiosRequestConfig } from "axios";
import { Config } from "react-native-config";

const token = Config.ACCESS_TOKEN;

export const search = async (query: string) => {
  const config: AxiosRequestConfig = {
    method: "get",
    url: `https://api.discogs.com/database/search?q=${query}&oauth_consumer_key=${Config.CONSUMER_KEY}
     &oauth_token=${token}
     &oauth_signature_method=PLAINTEXT
     &oauth_timestamp=1614511179
     &oauth_nonce=qiCXG3xiV4l
     &oauth_version=1.0
     &oauth_signature=${Config.CONSUMER_SECRET}%26${Config.ACCESS_TOKEN_SECRET}`,
  };

  try {
    const res = await axios(config);
    console.log(`response : ${res.data}`);
  } catch (error) {
    console.log(`api-error: ${error}`);
  }

  /*
   * Request using headers
   */

  // const api = axios.create({
  //   baseURL: "https://api.discogs.com",
  // });

  // const config = {
  //   headers: {
  //     Authorization: `OAuth`,
  //   },
  //   data: `{
  //      "name": "discogs",
  //    "strategy": "oauth1"
  //    , "options":
  //     { "consumerKey", ${Config.CONSUMER_KEY},
  //      "consumerSecret": ${Config.CONSUMER_SECRET},
  //      "requestTokenURL": "https://api.discogs.com/oauth/request_token",
  //      "accessTokenURL": "https://api.discogs.com/oauth/access_token",
  //      "userAuthorizationURL": "https://www.discogs.com/oauth/authorize",
  //      "signatureMethod": "PLAINTEXT"}},
  //      "accessToken" : ${token},
  //      "tokenSecret:${Config.ACCESS_TOKEN_SECRET}`,
  // };

  /***************************************************************/

  /*
   * Trying getting identity
   */

  // var config: AxiosRequestConfig = {
  //   method: "get",
  //   url:
  //     "https://api.discogs.com/oauth/identity?oauth_consumer_key=dJZgZiJRMZjGNayVBeUD&oauth_token=lfIvAWBSBARGZWIanwjbxvkNqxhIrbicdvUQSglc&oauth_signature_method=PLAINTEXT&oauth_timestamp=1614540264&oauth_nonce=0f2PJ56IxVS&oauth_version=1.0&oauth_signature=nPWHEQPtSrQNKauKEPetwmEeEMDCGyRd%26geDxRrskTRIkpDhCgwhvMnoSbPwwPyiQSaZYjaKX",
  //   headers: {},
  // };

  // await axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
};

// const options = {
//   url: "https://api.discogs.com/oauth/identity",
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//     Authorization: `OAuth oauth_consumer_key=${Config.CONSUMER_KEY},
//      oauth_nonce="'+ Date.now() + '",
//      oauth_token=${Config.ACCESS_TOKEN}
//      , oauth_signature=${Config.CONSUMER_SECRET}&${Config.ACCESS_TOKEN_SECRET}, oauth_signature_method="PLAINTEXT", oauth_timestamp="'+ Date.now() + '"`,
//   },
// };
