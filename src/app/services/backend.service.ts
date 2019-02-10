import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getConfig(){
  	return environment.social;
  }
  getUserStatus(){
  	
  }
}
