import { Component, OnInit } from '@angular/core';
import { FlipserviceService } from './flipservice.service';
import { flipProducts } from './flipproducts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'FLIPZON';
  //private flipservice1;
  fp:flipProducts[]=[];
  products:any[] = [];
  
  
  constructor( private flipservice1:FlipserviceService){
  }
  public errorMsg;
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    this.flipservice1.getProducts()
          .subscribe(
            data=>this.products=data,
            error=>this.errorMsg=error
            
          );
  }
}
