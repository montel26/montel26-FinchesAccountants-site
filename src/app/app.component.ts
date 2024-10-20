import { Component, OnInit } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Finch-App';



  // supabaseUrl = 'https://luvzrqqywdtebutyaeld.supabase.co'
  // supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1dnpycXF5d2R0ZWJ1dHlhZWxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0NTc0MzcsImV4cCI6MjA0NTAzMzQzN30.AXdq8fboxWMRxfxta6n_ZE9b27RaR0PeOmh44BHxvec'
  // supabase = createClient(this.supabaseUrl, this.supabaseKey)

  // data: any;

  // ngOnInit() {
  //   this.fetchData();
  // }

  // async fetchData() {
  //   // changes table name if you need too

  //   const { data, error } = await this.supabase.from('profiles').select('*');  
  //   if (error) {
  //     console.error('Error fetching data:', error);
  //   } else {
  //     this.data = data;
  //     console.log(this.data);
  //   }
  // }
}
