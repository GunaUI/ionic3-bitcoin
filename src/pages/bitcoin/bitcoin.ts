import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { BitcoinProvider } from '../../providers/bitcoin/bitcoin';
import { Bitcoin } from "../../models/bitcoin";

@IonicPage()
@Component({
  selector: 'page-bitcoin',
  templateUrl: 'bitcoin.html',
})
export class BitcoinPage {
  currency : string = 'GBP';
  bitcoin$ : Observable<Bitcoin>;
  constructor(private bitcoinProvider : BitcoinProvider) {}

  ionViewWillLoad() {
    this.getPrice();
  }
  getPrice(){
    this.bitcoin$ = this.bitcoinProvider.getBitcoinPrice(this.currency);
  }

}
