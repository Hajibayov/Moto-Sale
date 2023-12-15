export class BlogVM {
  public id: number;
  public name: string;
  public description: string;
  public createdAt: string;
  public createdBy: string;
  public image_url: string;

  constructor(
    id: number,
    name: string,
    description: string,
    createdAt: string,
    createdBy: string,
    image_url: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
    this.createdBy = createdBy;
    this.image_url = image_url;
  }
}
