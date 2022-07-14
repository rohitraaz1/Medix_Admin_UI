import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GetProduct } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/services/product-services/product.service';
declare const $:any;

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  // @ViewChild('dtTable',{static:false}) dataTable:any;

  constructor(private _productservice:ProductService ) { }

public ordersData!:GetProduct[];

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
      response => this.ordersData = response
    ); 
    this.dtOptions = {
      pageLength: 10,
      processing: true
    };
  }

}
