import { Component, OnInit } from '@angular/core';
import { PrincipaleService } from '../principale.service';
import { Produit } from '../modele/produit';

@Component({
  selector: 'app-produit-categorie',
  templateUrl: './produit-categorie.component.html',
  styleUrls: ['./produit-categorie.component.css']
})
export class ProduitCategorieComponent implements OnInit {
  private _categorie;
  produit:Produit=new Produit();
  private produits;

  //injection du service principale qui permet d'acceder aux methodes du service principale
  constructor(private principale: PrincipaleService) { }
  get categorie(){
    return this._categorie;
  }


  ngOnInit(): void {
    this.getCategorie();
  }
  //methode qui recupere la methode getUrl du service principale
  public getCategorie(){
    this.principale.getUrl('/categories').subscribe(data=>{
     this._categorie=data;
      console.log(this.categorie);
},error=>{
     console.log(error);
})
  }
  enregistrerProduit(){
    this.principale.saveProduit(this.produit).subscribe(data=>{
      this.produits=data;
      console.log("enregistre effectuer");
      console.log(this.produit);
    },error=>{
      console.log(error);
      console.log("enregistrement non effectuer");
    })

  }

}
