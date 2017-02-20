# nightmarejs-e2e-sample [![Build Status](https://travis-ci.org/airtoxin/nightmarejs-e2e-sample.svg?branch=master)](https://travis-ci.org/airtoxin/nightmarejs-e2e-sample)

E2E test sample repository using Nightmare.js

## Documents

### 序文

E2EテストといえばSeleniumですが起動までの準備が大変だったりAPIに癖があったりとなかなか苦労する事も多いです。  
(今は亡きSmartica v3もseleniumでテストしていましたがかなり大変でした💦)  
そんな感じなのでテスト自体のメンテナンスコストが高く、結局UIテストはテスト項目書を作って手動で行うみたいになりがちです。  

でもエンジニアなら自動化したい……。  

そこで使ってみてほしいのが今回の[`Nightmare.js`](http://www.nightmarejs.org/)です。  
Nightmare.jsはElectronをベースにしたブラウザ自動化ツールです。  
ElectronなのでChromeでテストをしている感覚で扱え、ハマりどころも比較的少ないのでストレスが低くE2Eテストが出来るものになっています。  

Nightmare.js自体は結構前からあり昔はヘッドレスブラウザのPhantomJSをベースに動作していましたが、  
その頃はPhantomJS自体のバグや、モダンブラウザとの動作の乖離などでなかなか扱いづらい物でした。  
現在のElectronはChromiumベースとなっているので、少なくともChromeでの動作テストは行えるようになっています。  

今回はTODOアプリとカウンターアプリのテストを行うというストーリーでやっていきます。  
アプリは`npm install`した後に`npm start`を実行するとlocalhost:9000に起動します。  

![](docs/images/appscreenshot.png)

### テストの実行

E2Eテストは`npm run test:e2e`で実行できます。



## License

MIT
