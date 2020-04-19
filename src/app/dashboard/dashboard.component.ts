import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  filter_name(event) {
    let filter, table, tr, td_firstname, firstname, td_lastname, lastname, td_email, email;
    filter = event.target.value.toLowerCase();
    table = document.getElementById('user-table-body');
    tr = table.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; ++i) {
      // Firstname value
      td_firstname = tr[i].getElementsByTagName('td')[1];
      firstname = td_firstname.textContent.toLowerCase();
      // Lastname value
      td_lastname = tr[i].getElementsByTagName('td')[2];
      lastname = td_lastname.textContent.toLowerCase();
      // Email value
      td_email = tr[i].getElementsByTagName('td')[3];
      email = td_email.textContent.toLowerCase();
      if (firstname.indexOf(filter) > -1 || lastname.indexOf(filter) > -1 || email.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }

}
