import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  notification: string = '';
  isNotificationVisible: boolean = false;

  constructor(private emailService: EmailService) {}

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const formData = {
        name: contactForm.value.name,
        lastname: contactForm.value.lastname,
        email: contactForm.value.email,
        message: contactForm.value.message,
      };

      // Simulate sending the email (you may want to use the actual service method)
      this.emailService.sendEmail(formData).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          this.showNotification('Your email has been sent successfully.');
          contactForm.reset();
        },
        (error) => {
          console.error('FAILED...', error);
          this.showNotification('Failed to send message. Please try again later.');
        }
      );
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


