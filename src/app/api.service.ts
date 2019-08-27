import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public http: Http) {}

  getTimeZone(hour, timezone) {
    let data = {
      'hora' : hour,
      'timezone': timezone
    };
    let headers_t: any = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers_t })
    var promise = new Promise((resolve, reject) => {
      let urlS = "https://tuten-rest.herokuapp.com/timezone"
      this.http.post(urlS, data, options)
        .toPromise()
        .then(
          res => {
            resolve(res.json());
          },
          msg => {
            reject(msg)
          }
        )
    })
    return promise;
  }
}
