import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GetProduct } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/services/product-services/product.service';
declare const $:any;
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit, AfterViewInit{


  // @ViewChild('dtTable',{static:false}) dataTable:any;

  constructor(private _productservice:ProductService ) { }

public productsData!:GetProduct[];

//For Deleteing product
Delete(Id:string){
this._productservice.deleteProduct(Id).subscribe(
  response =>
  console.log(response)
)
}

  ngAfterViewInit(): void {
      // $(this.dataTable.nativeElement).DataTable();
     
  }
  dtOptions:DataTables.Settings = {};
  
  ngOnInit(): void {
    this._productservice.getProducts().subscribe(
      response => this.productsData = response
    ); 
    this.dtOptions = {
      pageLength: 10,
      processing: true
    };
  }

}
