import axios from "axios";

export function putData(defaultData:any) {

    const data = defaultData.current
    console.log("data", data)

    axios.put(`https://jsonplaceholder.typicode.com/posts/${data.userId}`, data)
        .then(data => {
            console.log(data.data)
        })
}

export function deleteData(defaultData:any) {

    const data = defaultData.current
    console.log("data", data)

    axios.delete(`https://jsonplaceholder.typicode.com/posts/${data.userId}`)
        .then(data => {
            console.log(data.data)
        })
}
