export class CommonFilter {
  constructor(page: number, pageSize: number) {
    this.page = page;
    this.pageSize = pageSize;
  }
  page: number;
  pageSize: number;
}
