export class ProductVM {
  public id: number;
  public name: string;
  public brand: string;
  public category: string;
  public color: string;
  public stock_quantity: number;
  public price: number;

  constructor(
    id: number,
    name: string,
    brand: string,
    category: string,
    color: string,
    stock_quantity: number,
    price: number
  ) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.category = category;
    this.color = color;
    this.stock_quantity = stock_quantity;
    this.price = price;
  }
}
