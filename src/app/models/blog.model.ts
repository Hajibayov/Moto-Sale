export class Blog {
  constructor(
    public id: string,
    public name: string,
    public content: string,
    public imageUrl: string,
    public comments: string[],
    public createdBy: string,
    public createdAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.content = content;
    this.imageUrl = imageUrl;
    this.comments = comments;
    this.createdBy = createdBy;
    this.createdAt = new Date();
  }
}
