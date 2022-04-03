/*
Title: 
    WEB450 - nobucket: Sprint 1
Author: 
    Adam Rodgers
Date: 
    3/27/2022
Modified By: Adam Rodgers
Description: nodebucket
Resources:
    Bellevue University WEB450 Github Repo
*/

import { Component, OnInit } from "@angular/core";
import { Employee } from "src/app/shared/models/employee.interface";
import { Item } from "src/app/shared/models/item.interface";
import { TaskService } from "src/app/shared/services/task.service";
import { CookieService } from "ngx-cookie-service";
import { MatDialog } from "@angular/material/dialog";
import { CreateTaskDialogComponent } from "src/app/shared/create-task-dialog/create-task-dialog.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  employee: Employee;
  task: Item[];
  todo: Item[];
  done: Item[];
  empId: number;

  constructor(private taskService: TaskService, private cookieService: CookieService, private dialog: MatDialog) {
    this.empId = parseInt(this.cookieService.get("session_user"), 10);

    this.taskService.findAllTasks(this.empId).subscribe(
      (res) => {
        //console.log("test " + res);
        this.employee = res;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.todo = this.employee.task;
        this.done = this.employee.task;
      }
    );
  }

  ngOnInit(): void {}

  openCreateTaskDialog() {
    const dialogRef = this.dialog.open(CreateTaskDialogComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.taskService.createTask(this.empId, data.text).subscribe(
          (res) => {
            this.employee = res;
          },
          (err) => {
            console.log(err);
          },
          () => {
            this.todo = this.employee.task;
            this.done = this.employee.task;
          }
        );
      }
    });
  }
}
