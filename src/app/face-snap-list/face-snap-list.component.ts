import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face- snapservice';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
 
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!:FaceSnap[];
  ngOnInit(): void {
    this.faceSnaps = this.FaceSnapsService.faceSnaps;
    }
constructor(private FaceSnapsService: FaceSnapsService) { }
  }
  
