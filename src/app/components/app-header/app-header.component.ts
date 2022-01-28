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

  ngOnInit(): void {


    // configure minimal network settings and key storage
const config = {
  nodeUrl: "https://rpc.testnet.near.org",
  deps: {
    keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
  },
};


    this.todayDay = this.dateService.getTodayDay();
    this.todayDate = this.dateService.getTodayDate();
    (async function ($) {
      const config = {
        networkId: "testnet",
        keyStore: new keyStores.BrowserLocalStorageKeyStore(),
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
        headers: {}
      };
      
      this.config = config;
      // connect to NEAR
      const near = await connect(config);
      
      // create wallet connection
      //const wallet = new WalletConnection(near);
      
      const signIn = async () => {
        const near = await connect(this.config);
        var wallet = new WalletConnection(near,null);
        wallet.requestSignIn(
          "example-contract.testnet", // contract requesting access
          "Example App", // optional
          "http://YOUR-URL.com/success", // optional
          "http://YOUR-URL.com/failure" // optional
        );
      };

      $(document).ready(
        signIn()
        )
      
    })(jQuery);
  }


}
