import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export type Coin = {
  name:string,
  symbol:string,
  value:number,
  rank:number
}

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  coins: Coin[] = []; // coins est un tableau de Coin

  constructor(public http: HttpClient) {
  } // client pour faire des requêtes

  fetchCryptoPrices() {
    console.log('Hello debugger');
    this.http.get<any[]>('https://api.coinmarketcap.com/v1/ticker/')
      .subscribe((r: any[]) => {

        this.coins = r.map(coin => ({
          name: coin.name,
          symbol: coin.symbol,
          value: coin.price_usd,
          rank: coin.rank
        }));
        console.log(this.coins);

      });
    console.log(this.coins); // ça arrive avant que subscribe soit finit
  }

}

  function mapAnyToCoin(coin:any): Coin {
    return {
      name: coin.name,
      symbol: coin.symbol,
      value: coin.prince_usd,
      rank: coin.rank
    };
  }


