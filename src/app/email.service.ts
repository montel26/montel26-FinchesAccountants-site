import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private serviceID = 'service_7bb6yfi';  // Replace with your EmailJS Service ID
  private templateID = 'template_mfv4877';  // Replace with your EmailJS Template ID
  private publicKey = '0gQs1EfgXpCwH7ivu';  // Replace with your EmailJS Public Key

  constructor() {
    this.initializeEmail();
  }

  private initializeEmail(): void {
    emailjs.init(this.publicKey);
  }
  sendEmail(formData: { name: string; email: string; message: string }): Promise<EmailJSResponseStatus> {
    return emailjs.send(this.serviceID, this.templateID, {
      to_name: 'Finches Accountants',
      from_name: formData.name,
      message: formData.message,
      reply_to: formData.email
    });
  }

  
  
}
