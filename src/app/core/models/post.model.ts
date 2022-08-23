import { User, Category } from './';

export class Post {
  public IdPost?: string;
  public PTitle: string;
  public PSummary: string;
  public PDescription: string;
  public PPlace: string;
  public PPhoto?: string;
  public PRegisterDateTime: string;
  public PSlug?: string;
  public User?: User;
  public Category?: Category;
  public IdCategory?: string;

  constructor(object: PostInterface) {
    this.IdPost = (object && object.IdPost) || '';
    this.PTitle = (object && object.PTitle) || '';
    this.PSummary = (object && object.PSummary) || '';
    this.PDescription = (object && object.PDescription) || '';
    this.PPlace = (object && object.PPlace) || '';
    this.PPhoto = (object && object.PPhoto) || '';
    this.PRegisterDateTime = (object && object.PRegisterDateTime) || '';
    this.PSlug = (object && object.PSlug) || '';
    this.User = (object && object.User) || undefined;
    this.Category = (object && object.Category) || undefined;
    this.IdCategory = (object && object.IdCategory) || '';
  }
}

interface PostInterface {
  IdPost?: string;
  PTitle: string;
  PSummary: string;
  PDescription: string;
  PPlace: string;
  PPhoto?: string;
  PRegisterDateTime: string;
  PSlug?: string;
  User?: User;
  Category?: Category;
  IdCategory?: string;
}


export interface DialogPost {
  post: Post;
}
