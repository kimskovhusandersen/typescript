import faker from "faker";
import { Mappable } from "./Map";

export class Company implements Mappable {
  name: string;
  slogan: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "blue";
  constructor() {
    this.name = faker.company.companyName();
    this.slogan = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `<h3>Campany Name: ${this.name}</h3>
    <p>${this.slogan}</p>
    `;
  }
}
