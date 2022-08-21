import { Post } from './';

export class User {
  public IdUser?: string;
  public UEmail: string;
  public UPassword: string;
  public UFullName: string;
  public UIsActive: string;
  public URoles: string;
  public Post?: Post[];

  constructor(object: UserInterface) {
    this.IdUser = (object && object.IdUser) || '';
    this.UEmail = (object && object.UEmail) || '';
    this.UPassword = (object && object.UPassword) || '';
    this.UFullName = (object && object.UFullName) || '';
    this.UIsActive = (object && object.UIsActive) || '';
    this.URoles = (object && object.URoles) || '';
    this.Post = (object && object.Post) || [];
  }
}

interface UserInterface {
  IdUser?: string;
  UEmail: string;
  UPassword: string;
  UFullName: string;
  UIsActive: string;
  URoles: string;
  Post?: Post[];
}

export interface LoginUserInterface {
  UEmail: string;
  UPassword: string;
}
