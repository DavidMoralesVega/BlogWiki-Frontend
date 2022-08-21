
export class Pagination {
  public limit?: number;
  public offset?: number;

  constructor(object: PaginationInterface) {
    this.limit = (object && object.limit) || 10;
    this.offset = (object && object.offset) || 0;
  }
}

interface PaginationInterface {
  limit?: number;
  offset: number;
}
