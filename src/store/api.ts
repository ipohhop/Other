import axios from "axios";

 export const getDataAPI = async (url: string):Promise<any> => {
  return  await axios.get("https://jsonplaceholder.typicode.com/users")
 };


export const getAllPostsAPI = async (url: string):Promise<any> => {
 return  await axios.get('https://jsonplaceholder.typicode.com/posts')
};
