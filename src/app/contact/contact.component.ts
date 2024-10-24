import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent  {
  // contactForm!: FormGroup;

  // constructor(private fb: FormBuilder, private http: HttpClient) {}

  // ngOnInit(): void {
  //   this.contactForm = this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     message: ['', Validators.required],
  //   });
  // }

  // onSubmit(): void {
  //   if (this.contactForm.valid) {
  //     const formData = this.contactForm.value;
  //     // Send form data to backend
  //     this.http.post('YOUR_BACKEND_URL', formData).subscribe(
  //       (response) => {
  //         alert('Email sent successfully');
  //       },
  //       (error) => {
  //         alert('Error sending email');
  //       }
  //     );
    // }
  // }
 
}

 
   
 



