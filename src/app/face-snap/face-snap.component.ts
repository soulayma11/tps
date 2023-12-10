import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
title!: string;
description!: string;
createdDate!: Date;
snaps!: number;
imageUrl!: string;
buttonText!: string;
@Input() faceSnap!:FaceSnap;
ngOnInit() {
  this.title = 'Archibald';
  this.description = 'Mon meilleur ami depuis tout petit !';
  this.createdDate = new Date();
  this.snaps = 6;
  this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  this.buttonText="Oh Snap!";
}  
onAddSnap(){
  this.snaps++;
}
onSnap(){
  if(this.buttonText==='Oh snap!'){
    this.snaps++;
    this.buttonText='Oops, unSnap!';
  }
  else{
    this.snaps--;
    this.buttonText='Oh snap!';
  }
}
}
