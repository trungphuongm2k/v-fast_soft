import axiosClient from "./axiosClient";

export const getPolicy = async () => {
  const res = axiosClient.get("/policies");
  return res;
};

export const getCompany = async () => {
  const res = axiosClient.get("/companies");
  return res;
};

export const getService = async () => {
  const res = axiosClient.get("/services");
  return res;
};

export const getSolution = async () => {
  const res = axiosClient.get("/solutions");
  return res;
};

export const getPartner = async () => {
  const res = axiosClient.get("/partners");
  return res;
};

export const getContact = async () => {
  const res = axiosClient.get("/contacts");
  return res;
};
