import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-v-log',
  templateUrl: './v-log.component.html'
})
export class VLogComponent implements OnInit {

  constructor(public translateService: TranslateService) { }

  ngOnInit() {
  }

}
