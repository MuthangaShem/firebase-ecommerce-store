import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

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
  getProducts(collType){
  	let fakeresponse=[{
  		'category': 'test',
  		'scategory': 'test Category',
  		'name': 'Product Name',
  		'price': '300',
  		'_id': '124'
  	},
  	{
  		'category': 'test2',
  		'scategory': 'test Category 8',
  		'name': 'Product Name 2',
  		'price': '500',
  		'_id': '1214'
  	},
  	{
  		'category': 'test',
  		'scategory': 'test Category 3',
  		'name': 'Product Name 3',
  		'price': '30',
  		'_id': '12'
  	},
  	{
  		'category': 'test',
  		'scategory': 'test Category 99',
  		'name': 'Product Name 4',
  		'price': '99',
  		'_id': '14'
  	}];
  	return Observable.create(
  		observer => {
  			setTimeout(()=>{
  				observer.next(fakeresponse)
  			}, 2000)
  		})
  }

  getFilterProducts(collType, filters){
  	let fakeresponse=[{
  		'category': 'test',
  		'scategory': 'test Category',
  		'name': 'Product Name',
  		'price': '300',
  		'_id': '124'
  	}];
  	return Observable.create(
  		observer => {
  			setTimeout(()=>{
  				observer.next(fakeresponse)
  			}, 2000)
  		})
  }

  setProducts(collType, filters){
  	let fakeresponse=true;
  	return Observable.create(
  		observer => {
  			setTimeout(()=>{
  				observer.next(fakeresponse)
  			}, 2000)
  		})
  }

  updateProducts(collType, formData){
  	let fakeresponse=true;
  	return Observable.create(
  		observer => {
  			setTimeout(()=>{
  				observer.next(fakeresponse)
  			}, 2000)
  		})
  }

  getOneProductDoc(collType, docId){
  	let fakeresponse={
  		'category': 'test',
  		'scategory': 'test Category',
  		'name': 'Product Name',
  		'price': '300',
  		'_id': '124'
  	};
  	return Observable.create(
  		observer => {
  			setTimeout(()=>{
  				observer.next(fakeresponse)
  			}, 2000)
  		})
  }

  deleteOneProductDoc(collType, docId){
  	let fakeresponse=true;
  	return Observable.create(
  		observer => {
  			setTimeout(()=>{
  				observer.next(fakeresponse)
  			}, 2000)
  		})
  }

  updateShoppingInterest(collType, docId){
    let fakeresponse=true;
    return Observable.create(
      observer => {
        setTimeout(()=>{
          observer.next(fakeresponse)
        }, 2000)
      })
  }

  updateShoppingCart(collType, docId){
    let fakeresponse=true;
    return Observable.create(
      observer => {
        setTimeout(()=>{
          observer.next(fakeresponse)
        })
      })
  }

  createUser(data){
    
  }

}
