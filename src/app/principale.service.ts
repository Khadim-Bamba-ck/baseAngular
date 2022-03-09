import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from './modele/produit';

//permet dinjecter le service
@Injectable({
  //permet d'acceder le service en root
  providedIn: 'root'
})
export class PrincipaleService {
  private host:string="http://localhost:27017";
  constructor(private http: HttpClient) { }
  //methodes qui permet de recuperer l'ensemble des enregistrement cote back-end
  public getUrl(url){
    return this.http.get(this.host+url);
  }
  //methode qui permet d'enregistrer les produits
  public saveProduit(produit:Produit){
    return this.http.post(this.host+'/saveProduit',produit);

  }
}
