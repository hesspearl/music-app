import axios, { AxiosRequestConfig } from "axios";
import {
  ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET,
  CONSUMER_KEY,
  CONSUMER_SECRET,
} from "@env";
import { ObjectResult } from "../store/action/types";

export const search = (query: String): Promise<string | void> => {
  var config = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };
  //  &oauth_consumer_key=dJZgZiJRMZjGNayVBeUD&oauth_token=wpjERcOzxzvUuyjAcIoZGCsqqGkyFYZkaOtltVLg&oauth_signature_method=PLAINTEXT&oauth_timestamp=1616416962&oauth_nonce=av9JqUVFELT&oauth_version=1.0&oauth_signature=nPWHEQPtSrQNKauKEPetwmEeEMDCGyRd%26MlwreuUIQIWMCQAQXUqWWmJGNyLpefWJXdeqTINk`,
  const searchResult = fetch(
    `https://api.discogs.com/database/search?q=${query}&oauth_consumer_key=dJZgZiJRMZjGNayVBeUD&oauth_token=QoJdXtRYKabmtHoKZdpCKAKeEVFRtWTCBFlUKqsO&oauth_signature_method=PLAINTEXT&oauth_timestamp=1616522267&oauth_nonce=QsLHdP35cfl&oauth_version=1.0&oauth_signature=nPWHEQPtSrQNKauKEPetwmEeEMDCGyRd%26LEcBQVBQzkHxeZtSDfRbbDBkMTOfxfsCOAiYtAdS`,

    //    &oauth_consumer_key=${CONSUMER_KEY}&
    //    oauth_token=${ACCESS_TOKEN}&
    //    oauth_signature_method=PLAINTEXT
    //    &oauth_version=1.0
    //  &oauth_signature=${CONSUMER_SECRET}%26${ACCESS_TOKEN_SECRET}`,
    config
  )
    .then((response) => response.json())
    .then((result) => {
      //console.log("result", result);
      return result.results;
    })
    .catch((error) => console.log("error", error));

  return searchResult;
};

export const getArtistData = async (id: Number) => {
  return fetch(`https://api.discogs.com/artists/${id}`)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};

export const getReleases = async (id: Number, type: String) => {
  return fetch(`https://api.discogs.com/${type}/${id}/releases?per_page=20`)
    .then((response) => response.json())
    .then((result) => result.releases)
    .catch((error) => console.log("error", error));
};

export const getReleaseData = async (id: Number) => {
  return fetch(`https://api.discogs.com/masters/${id}`)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};
