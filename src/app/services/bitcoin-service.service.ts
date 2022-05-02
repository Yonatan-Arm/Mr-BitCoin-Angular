import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }
    public getMarketPrice() {
      return this.http.get<any>(`https://api.blockchain.info/charts/market-price?timespan=2months&format=json&cors=true`);
    }


public getConfirmedTransactions() {
  return this.http.get<{ data: string }>('https://api.blockchain.info/charts/trade-volume?timespan=1months&format=json&cors=true')
  try {
  } catch (err) {
      console.error(err)
  }
}
}
