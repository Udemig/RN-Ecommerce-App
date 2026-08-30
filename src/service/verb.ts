import { AxiosResponse } from "axios";
import Client from "./instance";

//Veri Okuma işlemleri için kullanılan servisler
const getRequest=async (url: string,params:any={}) => {
  const response:AxiosResponse = await Client.get(url,{params:params});
  return response
}

//Veri Ekleme işlemleri için kullanılan servisler
const postRequest=async (url: string,payload:object) => {
  const response:AxiosResponse = await Client.post(url,payload);
  return response
}

//Veri Güncelleme işlemleri için kullanılan servisler
const putRequest=async (url: string,payload:object) => {
  const response:AxiosResponse = await Client.put(url,payload);
  return response
}
//Veri Güncelleme işlemleri için kullanılan servisler
const patchRequest=async (url: string,payload:object) => {
    const response:AxiosResponse = await Client.patch(url,payload);
    return response
    }   

//Veri Silme işlemleri için kullanılan servisler
const deleteRequest=async (url: string,payload:object) => {
  const response:AxiosResponse = await Client.delete(url,payload);
  return response
}

export { getRequest, postRequest, putRequest, patchRequest, deleteRequest }

