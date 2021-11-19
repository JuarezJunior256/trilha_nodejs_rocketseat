interface ICreateUserDTO {
    id?: string | undefined;
    name: string | undefined;
    password: string | undefined;
    email: string | undefined;
    driver_license: string | undefined;
    avatar?: string | undefined;
}

export { ICreateUserDTO };