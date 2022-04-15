export interface Users {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    userType: string;
    classId: number;
    createdOn: Date;
    status: number;
}
export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
}

export interface HomeWork {
    id: number;
    name: string;
    courseId: number;
    classId: number;
    description?: string;
    homeWorkStatus: number;
    createdOn: Date;
    status: number;
}

export interface Classes {
    id: number;
    name: string;
    description?: string;
    createdOn: Date;
    status: number;
}

export interface Courses {
    id: number;
    name: string;
    createdOn: Date;
    status: number;
}

export interface LoginUser {
    username: string;
    usertype: string;
    firstName: string;
    lastName: string;
}