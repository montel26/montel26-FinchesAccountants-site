import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../email.service';  // Import your EmailService

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup; // Define the contact form group
  notification: string = '';
  isNotificationVisible: boolean = false;

  constructor(private fb: FormBuilder, private emailService: EmailService) { // Inject the EmailService
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required], // Include lastname field
      email: ['', [Validators.required, Validators.email]], // Email field with validation
      message: ['', Validators.required], // Message field with validation
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formValues = this.contactForm.value;

      this.emailService.sendEmail(formValues).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          this.showNotification('Your email has been sent successfully.');
          this.contactForm.reset(); // Reset the form
        },
        (error) => {
          console.error('FAILED...', error);
          this.showNotification('Failed to send message. Please try again later.');
        }
      );
    } else {
      console.log('Form is not valid');
      // Optionally show validation errors to the user
    }
  }

  showNotification(message: string) {
    this.notification = message;
    this.isNotificationVisible = true;

    // Hide notification after 3 seconds
    setTimeout(() => {
      this.isNotificationVisible = false;
    }, 3000);
  }
}


