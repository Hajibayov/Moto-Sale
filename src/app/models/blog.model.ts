export class Blog {
  constructor(
    private name: string,
    private content: string,
    private createdBy: string,
    private comments: string[]
  ) {
    this.name = name;
    this.content = content;
    this.createdBy = createdBy;
    this.comments = comments;
  }
}
