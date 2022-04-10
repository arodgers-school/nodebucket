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

class BaseResponse {
  constructor(code, msg, data) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }

  toObject() {
    return {
      code: this.code,
      msg: this.msg,
      data: this.data,
      timestamp: new Date().toLocaleDateString(),
    };
  }
}

module.exports = BaseResponse;
