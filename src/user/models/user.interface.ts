
export interface User {
  _id?: string;  
  email?: string;
  password?: string;
  role?: UserRole;  
}

export enum UserRole {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  REGULAR = 'regular',
}
