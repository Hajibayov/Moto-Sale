export class EmployeeVM {
  public name: string;
  public surname: string;
  public role: string;
  public phone: string;
  public email: string;
  public image_url: string;

  constructor(
    name: string,
    surname: string,
    role: string,
    phone: string,
    email: string,
    image_url: string
  ) {
    this.name = name;
    this.surname = surname;
    this.role = role;
    this.phone = phone;
    this.email = email;
    this.image_url = image_url;
  }
}
