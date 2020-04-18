import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { UserlistService } from '../userlist.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addForm;
  loading: boolean = false;
  showMsg: boolean = false;
  showErr: boolean = false;
  res_message = null;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserlistService,
    private router: Router
  ) { 
    this.addForm = this.formBuilder.group({
      'lastname' : '',
      'firstname' : '',
      'email' : '',
      'gender' : ''
    })
  }

  ngOnInit(): void {
  }

  onSubmit(user) {
    this.showMsg = false;
    this.showErr = false;
    this.loading = false;
    this.userService.createUser(user).subscribe(res => {
      this.showMsg = true;
      this.res_message = res;
      this.loading = true;
      setTimeout(() => {this.router.navigate(['/'])}, 3000)
    }, (err) => {
      this.showErr = true;
      this.res_message = err.error;
    });
  }

}
