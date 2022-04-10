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

import { Item } from "./item.interface";

export interface Employee {
  empId: string;
  todo: Item[];
  doing: Item[];
  done: Item[];
  task: Item[];
}
