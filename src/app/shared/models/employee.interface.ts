/*
Title: 
    WEB450 - nobucket: Sprint 2
Author: 
    Adam Rodgers
Date: 
    4/3/2022
Modified By: Adam Rodgers
Description: nodebucket
Resources:
    Bellevue University WEB450 Github Repo
*/

import { Item } from "./item.interface";

export interface Employee {
  empId: string;
  task: Item[];
}
