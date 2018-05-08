import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  topics = [];
  name: string;
  talks = [];

  constructor(public navCtrl: NavController) {

  }

  addTags(){
    this.talks.push({name: this.name, topics: this.topics});
  }

}
