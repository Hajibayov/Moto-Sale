export class ProductVM {
  public name: string;
  public brand: string;
  public category: string;
  public color: string;
  public stock_quantity: number;
  public price: number;

  constructor(
    name: string,
    brand: string,
    category: string,
    color: string,
    stock_quantity: number,
    price: number
  ) {
    this.name = name;
    this.brand = brand;
    this.category = category;
    this.color = color;
    this.stock_quantity = stock_quantity;
    this.price = price;
  }
}
