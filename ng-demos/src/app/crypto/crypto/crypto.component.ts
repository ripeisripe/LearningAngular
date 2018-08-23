import { Component, OnInit } from '@angular/core';
import {CryptoService} from "../crypto.service";

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  constructor(public service:CryptoService) {
    service.fetchCryptoPrices();
  }

  ngOnInit() {
  }

}
