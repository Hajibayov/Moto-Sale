export class ProductDTO {
  public name: string;
  public description: string;
  public imageUrl: string;
  public brandId: number;
  public categoryId: number;
  public color: string;
  public stockQuantity: number;
  public price: number;

  constructor(
    name: string,
    description: string,
    imageUrl: string,
    brandId: number,
    categoryId: number,
    color: string,
    stockQuantity: number,
    price: number
  ) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.brandId = brandId;
    this.categoryId = categoryId;
    this.color = color;
    this.stockQuantity = stockQuantity;
    this.price = price;
  }
}
