export interface IUser {
    id: number,
    login: string,
    email: string,
    password: string,
    name?: string,
    lastname?: string,
    age?: number
}

export type usersList = Array<IUser>

export interface ICurrentUser {
    id?: number,
    login?: string,
    email?: string,
    password?: string,
    name?: string,
    lastname?: string,
    age?: number
}

export interface IPost {
    id: number,
    header: string,
    text: string,
    date: string,
    likes: Array<string>,
    author: string,
}

export type postsList = Array<IPost>

export type AppContextType = {
    users: usersList,
    posts: postsList,
    currentUser?: ICurrentUser,
}