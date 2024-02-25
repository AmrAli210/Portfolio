import { Component } from '@angular/core';
import { faFacebookF,faLinkedinIn,faGithub,faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
facebook=faFacebookF
linkedIn=faLinkedinIn
Github=faGithub
whatsApp=faWhatsapp
}
