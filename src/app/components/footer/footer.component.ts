import { Component, OnInit } from '@angular/core';
import {
  faEnvelope,
  faPhone,
  faLocation,
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLocation = faLocation;

  constructor() { }

  ngOnInit(): void {
  }

}
