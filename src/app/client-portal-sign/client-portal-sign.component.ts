import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { ClientPortalDataService } from './../client-portal/client-portal-data.service';

@Component({
  selector: 'app-client-portal-sign',
  templateUrl: './client-portal-sign.component.html',
  styleUrls: ['./client-portal-sign.component.css']
})
export class ClientPortalSignComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private clientPortalDataService: ClientPortalDataService
  ) { }

  ngOnInit() {
    // TODO: service to get actual document and display
    console.log(this.clientPortalDataService.getDocumentData());
  }

  ngAfterViewInit() {
    const canvas = document.getElementById('signature-pad');

    // Adjust canvas coordinate space taking into account pixel ratio,
    // to make it look crisp on mobile devices.
    // This also causes canvas to be cleared.
    // function resizeCanvas() {
        // When zoomed out to less than 100%, for some very strange reason,
        // some browsers report devicePixelRatio as less than 1
        // and only part of the canvas is cleared then.
        // const ratio =  Math.max(window.devicePixelRatio || 1, 1);
        // canvas.width = canvas.offsetWidth * ratio;
        // canvas.height = canvas.offsetHeight * ratio;
        // canvas.getContext("2d").scale(ratio, ratio);
    // }

    // window.onresize = resizeCanvas;
    // resizeCanvas();

    const signaturePad = new SignaturePad(canvas, {
      backgroundColor: 'rgb(255, 255, 255)' // necessary for saving image as JPEG; can be removed is only saving as PNG or SVG
    });

    document.getElementById('save-png').addEventListener('click', function () {
      if (signaturePad.isEmpty()) {
        return alert('Please provide a signature first.');
      }

      const data = signaturePad.toDataURL('image/png');
      console.log(data);
      // TODO: AJAX HTTP base64 image and document ID
    });

    document.getElementById('clear').addEventListener('click', function () {
      signaturePad.clear();
    });
  }

  backToClientPortal() {
    this.router.navigate(['./client-portal']);
  }
}
