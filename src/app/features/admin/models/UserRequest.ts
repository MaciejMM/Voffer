export type UserRequest = {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  title: string;
  role: string;
}

export type UpdateUser = {
  firstName: string;
  lastName: string;
  password:string;
  title?: string;
  role?: string;
  active: boolean;
}
