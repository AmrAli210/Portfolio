import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from '../../../../particles-config';
import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
declare let particlesJS: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  facebook = faFacebookF;
  linkedIn = faLinkedinIn;
  Github = faGithub;
  whatsApp = faWhatsapp;
  ngOnInit(): void {
    this.invokeParticles();
  }

  

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () {});
  }
}
