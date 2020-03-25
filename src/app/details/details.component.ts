import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router'
import { from } from 'rxjs';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  products:Product;
  constructor(
    private ProductService: ProductService,
    private route:ActivatedRoute,
    private router: Router
          ) { }

  ngOnInit(): void {
    this.getProductId();
  }


  getProductId(){
    this.route.params.subscribe(param => {
      this.ProductService.getProductId(param.ProductID).subscribe(data => {
        console.log("doituong"+data);
        this.products = data});
    });
  }

  updateProduct(){
    this.ProductService.updateProduct(this.products).subscribe(data => {
      this.router.navigateByUrl('/manager');
    });
  }
}
