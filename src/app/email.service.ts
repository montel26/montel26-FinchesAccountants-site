import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private serviceID = 'your_service_id';  // Replace with your EmailJS Service ID
  private templateID = 'your_template_id';  // Replace with your EmailJS Template ID
  private publicKey = 'your_public_key';  // Replace with your EmailJS Public Key

  constructor() {}

  sendEmail(form: any): Promise<EmailJSResponseStatus> {
    return emailjs.send(
      this.serviceID,
      this.templateID,
      form,
      this.publicKey
    );
  }
}
