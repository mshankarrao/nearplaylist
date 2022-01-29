import {Component, OnInit} from '@angular/core';
/* App services */
import {DateService} from '../../services/date.service';
import * as nearAPI from "near-api-js"
declare var jQuery: any;

const { connect, keyStores, WalletConnection } = nearAPI;

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})

export class AppHeaderComponent implements OnInit {
  todayDay: string = '';
  todayDate: string = '';
  config;


  constructor(private dateService: DateService) {
  }

 
  

  // connect to NEAR
  // const near = await connect(config);

  signIn = async () => {
    this.config = {
      networkId: "testnet",
      keyStore: new keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: "https://rpc.testnet.near.org",
      walletUrl: "https://wallet.testnet.near.org",
      helperUrl: "https://helper.testnet.near.org",
      explorerUrl: "https://explorer.testnet.near.org",
      headers: {}
    };
    const near = await connect(this.config);
    var wallet = new WalletConnection(near,null);
    wallet.requestSignIn(
    );
  };

  ngOnInit(): void {
    this.todayDay = this.dateService.getTodayDay();
    this.todayDate = this.dateService.getTodayDate();
    (async function ($) {
    })(jQuery);
  }


}
