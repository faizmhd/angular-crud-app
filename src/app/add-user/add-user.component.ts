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
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserlistService
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
    this.userService.createUser(user).subscribe(res => {
      console.info(res)
    });
    this.addForm.reset();
  }

}
