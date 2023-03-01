import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

export class RequestOptionsBuilder {
  private params = new HttpParams();
  private headers = new HttpHeaders();

  constructor() {}

  addHeader(name: string, value: string) {
    this.headers = this.headers.append(name, value);
    return this;
  }

  addParam(param: string, value: string) {
    this.params = this.params.append(param, value);
    return this;
  }

  getOptions() {
    return {
      headers: this.headers,
      params: this.params,
    }
  }
}
