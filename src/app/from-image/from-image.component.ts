import { Component, OnInit } from '@angular/core';
import * as faceapi from 'face-api.js';

@Component({
  selector: 'app-from-image',
  templateUrl: './from-image.component.html',
  styleUrls: ['./from-image.component.css'],
})
export class FromImageComponent implements OnInit {
  constructor() {}

  async ngOnInit(): Promise<void> {
    this.detect();
  }
  async detect() {
    await faceapi.nets.ssdMobilenetv1.loadFromUri('../../assets/models');
    const image = document.querySelector('img') as HTMLImageElement;

    const canvas = faceapi.createCanvasFromMedia(image);
    const detection = await faceapi.detectAllFaces(image);

    console.log('faces', detection);
    console.log('knowledge range', detection[0].score);
    console.log('knowledge box', detection[0].box);

    const dimensions = {
      width: image.width,
      height: image.height,
    };

    const resizedDimensions = faceapi.resizeResults(detection, dimensions);

    document.body.append(canvas);
    faceapi.draw.drawDetections(canvas, resizedDimensions);
  }
}
