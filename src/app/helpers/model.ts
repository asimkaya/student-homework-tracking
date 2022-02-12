export interface Users {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    userType: number;
    classId: number;
    createdOn: Date;
    status: number;
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