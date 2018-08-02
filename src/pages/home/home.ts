import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  topics = [];
  name: string;
  talks = [];
  dateOfNews = Date;
  anArray:any=[];

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  addTags(){
    this.talks.push({name: this.name, topics: this.topics});
  }

  cancelNewNews(){
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Do you want to delet your News?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
          }
        }
      ]
    });
    alert.present();
  }

  addNewNews(){
    console.log('this.anArray',this.anArray);
    this.data=true;
  }

  addNewNewsParts(){
    this.anArray.push({'value':''});  
    }

}
