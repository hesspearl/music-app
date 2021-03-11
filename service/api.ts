import axios, { AxiosRequestConfig } from "axios";
import { Config } from "react-native-config";

const token = Config.ACCESS_TOKEN;
const tokenSecret = Config.ACCESS_TOKEN_SECRET;
const consumerKey = Config.CONSUMER_KEY;
const consumerSecret = Config.CONSUMER_SECRET;

export const search = async (query: string) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `OAuth oauth_consumer_key="dJZgZiJRMZjGNayVBeUD",
    oauth_token="lfIvAWBSBARGZWIanwjbxvkNqxhIrbicdvUQSglc",
    oauth_signature_method="PLAINTEXT",oauth_timestamp="1615231142",
    oauth_nonce="XUTShnXOEU5",oauth_version="1.0",
    oauth_signature="nPWHEQPtSrQNKauKEPetwmEeEMDCGyRd%26geDxRrskTRIkpDhCgwhvMnoSbPwwPyiQSaZYjaKX"`
  );

  var requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`https://api.discogs.com/database/search?q=${query}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
