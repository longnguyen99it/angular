import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router'
import { from } from 'rxjs';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  products:Product[];
  constructor(private ProductServe: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              ) { }

  ngOnInit(): void {
    this.getProduct();

  }
  getProduct(){
    this.ProductServe.getProduct().subscribe(data => {this.products = data});
  }
  
  removeProduct(id){
    this.ProductServe.removerProduct(id).subscribe(data =>{
      this.router.navigateByUrl("/manager");
    });
  }
}
