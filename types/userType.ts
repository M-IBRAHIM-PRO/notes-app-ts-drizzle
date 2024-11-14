export type userType={
    id:number,
    name:string,
    email:string,
    clerkId:string,
    photo:string, //Link of google account photo
    firstName:string,
    lastName:string,
    // createdAt:Date, //Auto Updated in DB
    // updatedAt:Date, //Auto Updated in DB
};

// For differnect return of different functions
export type createUserType = {
    clerkId: string;
    email: string;
    name: string;
    firstName: string;
    lastName: string;
    photo: string;
};
