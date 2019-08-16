import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatalogueService } from '../services/catalogue.service'

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {


  public produits: any ;
  public size: number =  5;
  public currentPage : number = 0 ;
  public totalPages : number ;
  public pages: Array<number>

  constructor(private httpClient : HttpClient  , private catService : CatalogueService) { }

  ngOnInit() {
  }


  onGetProduits() {
  this.httpClient.get("http://localhost:8080/produits")
    .subscribe(
        data => {
            this.produits = data ;

        } ,
        err => {
            console.log(err)}
                )

  }

  onGetProducts() {
  console.log("je suis dans on get products ");
  this.catService.getProduits(this.currentPage, this.size)
      .subscribe(
          data => {
                console.log(" je suis dans le data tout se passe bien ");

              this.totalPages = data["page"].totalPages ;
              this.pages = new Array<number>(this.totalPages);
              this.produits = data ;
           } ,
          err => {
              console.log(err)}
                  )

    }

    onPageProduct(ind) {
        this.currentPage = ind ;
        console.log("on va lancer on get products ");
        this.onGetProducts();

    }

    onChercher(value : any ) {
        console.log(value);
    }
  }

