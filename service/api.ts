import axios, { AxiosRequestConfig } from "axios";
import { Config } from "react-native-config";
import { ObjectResult } from "../store/action/types";

const token = Config.ACCESS_TOKEN;
const tokenSecret = Config.ACCESS_TOKEN_SECRET;
const consumerKey = Config.CONSUMER_KEY;
const consumerSecret = Config.CONSUMER_SECRET;

export const search = (query: String): Promise<string | void> => {
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
  const searchResult = fetch(
    `https://api.discogs.com/database/search?q=${query}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log("result", result);
      return result;
    })
    .catch((error) => console.log("error", error));

  return searchResult;
};

export const getArtistData = async (id: Number) => {
  return fetch(`https://api.discogs.com/artists/${id}`)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};

export const getReleases = async (id: Number, type: String) => {
  return fetch(`https://api.discogs.com/${type}/${id}/releases`)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};

export const getReleaseData = async (id: Number) => {
  return fetch(`https://api.discogs.com/masters/${id}`)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};
