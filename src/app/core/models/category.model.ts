import { Post } from './';

export class Category {
  public IdCategory?: string;
  public CDescription: string;
  public CPhoto: string;
  public CSlug?: string;
  public Post?: Post[];

  constructor(object: CategoryInterface) {
    this.IdCategory = (object && object.IdCategory) || '';
    this.CDescription = (object && object.CDescription) || '';
    this.CPhoto = (object && object.CPhoto) || '';
    this.CSlug = (object && object.CSlug) || '';
    this.Post = (object && object.Post) || [];
  }
}

interface CategoryInterface {
  IdCategory?: string;
  CDescription: string;
  CPhoto: string;
  CSlug?: string;
  Post?: Post[];
}
