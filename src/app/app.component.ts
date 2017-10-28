import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  title='Shopping Cart Application';
  panasonic: Product={
    id:1,
    name:'Panasonic Mobile',
    desc:'It is a mid range phone',
    price:15000
  };
  iphone: Product={
    id:2,
    name:'IPhone 8',
    desc:'It is high end phones. Its quite expensive',
    price:80000
  };
}

export class Product{
  id: number;
  name: string;
  desc: string;
  price: number;
}
