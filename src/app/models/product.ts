import { stringify } from "@angular/compiler/src/util";

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageURL: string;

    constructor(id=0, name='', description='', price=0, imageUrl ='' ){
        this.id= id
        this.name=name
        this.description=description
        this.price=price
        this.imageURL=imageUrl
    }
}
