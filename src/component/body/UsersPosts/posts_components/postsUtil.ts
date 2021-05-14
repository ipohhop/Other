import User from "../../../../store/reducers/usersReducer/interfaceUserReducer";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface FilterPost {
    FirstName: string;
    UserName: string;
    Email: string;
    Company: string;
    id: number;
    data: FilterPosts_data[];
}

export interface FilterPosts_data {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export function filterForPosts(posts: Post[], users: User[]):FilterPost[] {

    function filterPosts(id: number) {
        return posts.filter(item => item.userId === id)
    }

    return users.map(item => {
        return {
            "FirstName": item.name,
            "UserName": item.username,
            "Email": item.email,
            "Company": item.company.name,
            "id": item.id,
            data: filterPosts(item.id)
        }
    })

}
