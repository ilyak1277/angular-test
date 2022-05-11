import { Component, OnInit } from '@angular/core';

import { IframService } from '../ifram.service';

@Component({
  selector: 'app-ifram',
  templateUrl: './ifram.component.html',
  styleUrls: ['./ifram.component.css']
})
export class IframComponent implements OnInit {
  constructor(private iframService: IframService) { }

  ngOnInit(): void {
    this.convert();
  }

  convert(): void {
    let objectUrl: string;
    const iframe = document.querySelector('iframe');
    this.iframService.get().subscribe((m) => {
      objectUrl = URL.createObjectURL(m.blob());
      iframe!.setAttribute('src', objectUrl);
    });
  }
}