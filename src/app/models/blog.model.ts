export class Blog {
  constructor(
    private id: string,
    private name: string,
    private content: string,
    private imageUrl: string,
    private comments: string[],
    private createdBy: string,
    private createdAt: Date
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
