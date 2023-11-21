export class Product {
  public price: number;
  public name: string;
  public imageUrl: string;
  public description: string;
  public availability: string;
  public otherImages: string[];

  constructor(
    price: number,
    name: string,
    imageUrl: string,
    description: string,
    availability: string,
    otherImages: string[]
  ) {
    this.price = price;
    this.name = name;
    this.imageUrl = imageUrl;
    this.description = description;
    this.availability = availability;
    this.otherImages = otherImages;
  }
}
