import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as faceapi from 'face-api.js';

@Component({
  selector: 'app-from-image',
  templateUrl: './from-image.component.html',
  styleUrls: ['./from-image.component.css'],
})
export class FromImageComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasRef: ElementRef;
  canvas: any;

  constructor(private sanitizer: DomSanitizer) {}

  async ngOnInit(): Promise<void> {
    await faceapi.nets.ssdMobilenetv1
      .loadFromUri('../../assets/models')
      .then(() => {
        this.detect();
      });
  }
  async detect() {
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
