import axios from "axios";

 export const getDataAPI = async (url: string):Promise<any> => {
  return  await axios.get("https://jsonplaceholder.typicode.com/users")
 };


export const getAllPostsAPI = async (url: string):Promise<any> => {
 return  await axios.get('https://jsonplaceholder.typicode.com/posts')
};



// correct post items API
export function putPostItem(data: any) {
 return  axios.put(`https://jsonplaceholder.typicode.com/posts/${data.userId}`, data)
}

export function deletePostItem(data: any) {
 return axios.delete(`https://jsonplaceholder.typicode.com/posts/${data.userId}`)
}
