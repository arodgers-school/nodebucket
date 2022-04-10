/*
Title: 
    WEB450 - nobucket: Sprint 3
Author: 
    Adam Rodgers
Date: 
    4/10/2022
Modified By: Adam Rodgers
Description: nodebucket
Resources:
    Bellevue University WEB450 Github Repo
    WEB450 Zoom SCRUM Meetings
*/

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Item } from "../models/item.interface";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor(private http: HttpClient) {}

  findAllTasks(empId: number): Observable<any> {
    return this.http.get("/api/employees/" + empId + "/tasks");
  }

  createTask(empId: number, task: string): Observable<any> {
    return this.http.post("/api/employees/" + empId + "/tasks", {
      taskName: task,
    });
  }

  updateTask(empId: number, todo: Item[], doing: Item[], done: Item[]): Observable<any> {
    return this.http.put("/api/employees/" + empId + "/tasks", {
      todo,
      doing,
      done,
    });
  }

  deleteTask(empId: number, taskId: string): Observable<any> {
    return this.http.delete("/api/employees/" + empId + "/tasks/" + taskId);
  }
}
