import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[];
  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.ProductService.getProduct().subscribe(data => {
      console.log("lay data"+data);
      this.products = data});
  }
  // showDetails(id){
  //   this.ProductService.getProductId(id);
  // }
}
