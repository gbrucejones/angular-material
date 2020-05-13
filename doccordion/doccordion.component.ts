import { Component, OnInit, Input, Output } from '@angular/core';
import { DoctorProfile } from "../../shared/doctor-profile";
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-doccordion',
  templateUrl: './doccordion.component.html',
  styleUrls: ['./doccordion.component.css']
})
export class DoccordionComponent implements OnInit {

	// Input for determiniig which panel to open (video trigger)
	@Input() isVideoOpen: boolean;
	@Input() doctor: DoctorProfile;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
		iconRegistry.addSvgIcon(
			'thumbs-up',
			sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
	}

  ngOnInit() {
  }
}
