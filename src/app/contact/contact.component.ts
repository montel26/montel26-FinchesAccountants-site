import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private emailService: EmailService) {}

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const formData = {
        name: contactForm.value.name,
        lastname: contactForm.value.lastname,
        email: contactForm.value.email,
        message: contactForm.value.message,
      };

      this.emailService.sendEmail(formData).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your email has been sent successfully.');
          contactForm.reset();
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send message. Please try again later.');
        }
      );
    }
  }
}

