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
