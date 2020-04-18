import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { UserlistService } from '../userlist.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user;
  editForm;
  id;
  res_message = null;
  showMsg: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userlistService : UserlistService,
    private router: Router
  ) { 
    this.editForm = this.formBuilder.group({
      'lastname' : '',
      'firstname' : '',
      'email' : '',
      'gender' : ''
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('userid')
    this.user = this.userlistService.getUserById(this.id).subscribe(res => {
      let userFound = {
        'lastname': res['lastname'],
        'firstname': res['firstname'],
        'email': res['email'],
        'gender': res['gender']
      }
      this.editForm.setValue(userFound)
    });
  }

  updateUser(user) {
    this.userlistService.updateUser(this.id, user).subscribe(res => {
      this.showMsg = true;
      this.res_message = res;
      setTimeout(() => {this.router.navigate(['/'])}, 3000)
    });
  }

}
