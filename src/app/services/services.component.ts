import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  isDropdownVisible: boolean = false;

  
  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible; // Toggles between true/false
    console.log(this.isDropdownVisible);
  }

  

}
