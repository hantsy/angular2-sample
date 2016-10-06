import { Injectable, Inject} from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { APP_CONFIG, AppConfig } from '../app.config';

@Injectable()
export class ApiService {

  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  private API_URL: string = 'http://localhost:8080/blog-api-cdi/api';

  constructor(private http: Http,  @Inject(APP_CONFIG) config: AppConfig) {
    this.API_URL = config.apiEndpoint;
  }

  public get(path: string): Observable<any> {
    console.log('get resources from url:' + `${this.API_URL}${path}`);
    return this.http.get(`${this.API_URL}${path}`, { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  public post(path: string, data: any): Observable<any> {
    let body = JSON.stringify(data);
    return this.http.post(`${this.API_URL}${path}`, body, { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  public put(path: string, data: any): Observable<any> {
    let body = JSON.stringify(data);

    return this.http.put(`${this.API_URL}${path}`, body, { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  public delete(path: string): Observable<any> {
    return this.http.delete(`${this.API_URL}${path}`, { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  public setHeaders(headers) {
    Object.keys(headers).forEach(header => this.headers.set(header, headers[header]));
  }

  public setHeader(key: string, value: string) {
    this.headers.set(key, value);
  }

  public deleteHeader(key: string) {
    if (this.headers.has(key)) {
      this.headers.delete(key);
    } else {
      console.log(`header:${key} not found!`);
    }
  }

  private extractData(res: Response) {
    if (res.status >= 200 && res.status <= 400) {
      let body = res.json();
      return body || {};
    } else {
      return res;
    }
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}

