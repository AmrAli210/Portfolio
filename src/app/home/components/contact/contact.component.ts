import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  formBuilder = inject(FormBuilder);

  constructor() {}
  ngOnInit(): void {}

  contact: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    message: ['', Validators.required],
  });

  submit(){
    console.log(this.contact.value);
    this.contact.reset()
  }
  
}
