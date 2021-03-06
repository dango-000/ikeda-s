import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  profileList =
    [{
      "userId": 1,
      "name": "yoshiki",
      "birthday": "12/20",
      "imgUrl": "../assets/imgs/1.png"
    },
    {
      "userId": 2,
      "name": "axutuzaxa",
      "birthday": "3/10",
      "imgUrl": "../assets/imgs/2.png"

    },
    {
      "userId": 3,
      "name": "yusuke",
      "birthday": "3/6",
      "imgUrl": "../assets/imgs/1.png"
    }
    ];

  dataList: any;

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, private storage: Storage) {
    this.getStorage();
  }

  tapAction() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'プロフィールの変更',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        }, {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  setStorage() {
    this.storage.set('name', this.profileList);
  }

  getStorage() {
    this.storage.get('name').then(
      (val) => {
        this.dataList = val;
        console.log(this.dataList);
      })
  }

}
