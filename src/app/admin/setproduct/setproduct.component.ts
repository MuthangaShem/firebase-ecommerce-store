import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'setproduct',
  templateUrl: './setproduct.component.html',
  styleUrls: ['./setproduct.component.css']
})
export class SetproductComponent implements OnInit, OnDestroy {

	members: any[];
    dataSource: MatTableDataSource<any>;
    toggleField: string;
    savedChanges = false;
    error: boolean = false;
    errorMessage: String = "";
    dataLoading: boolean = false;
    private querySubscription;

    profileUrl: Observable<string | null>;
    takeHostSelfie = false;
    showHostSelfie = false;
    myDocId;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns = ['category', 'scategory', 'name', 'price', '_id'];

  constructor(private _backendService: BackendService) { }

  ngOnInit() {
  	this.toggleField = "searchMode";
  	this.dataSource = new MatTableDataSource(this.members);
  	this.dataSource.paginator = this.paginator;
  	this.dataSource.sort = this.sort;
  }

  toggle(filter?){
  	if(!filter){
  		filter = "searchMode"
  	}
  	else {filter = filter;}
  	this.toggleField = filter;
  }

  getData() {
    this.dataLoading = true;
    this.querySubscription = this._backendService.getProducts('product')
        .subscribe(members => {
            this.members = members;
            this.dataSource = new MatTableDataSource(members);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        },
        (error)=>{
        	this.error = true;
        	this.errorMessage = error.message;
        	this.dataLoading = false;
        },
        ()=>{
        	this.error = false; this.dataLoading= false;
        });
    }

    getFilterData(filters) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.getFilterProducts('product', filters)
        .subscribe(members => {
            this.members = members;
            this.dataSource = new MatTableDataSource(members);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        },
        (error)=>{
        	this.error = true;
        	this.errorMessage = error.message;
        	this.dataLoading = false;
        },
        ()=>{
        	this.error = false; this.dataLoading= false;
        });
    }

    setData(formData) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.setProducts('product', formData)
        .subscribe(members => {
            if(members){
            	this.savedChanges = true;
            }
        },
        (error)=>{
        	this.error = true;
        	this.errorMessage = error.message;
        	this.dataLoading = false;
        },
        ()=>{
        	this.error = false; this.dataLoading= false;
        });
    }

    applyFilter(filterValue: string){
    	this.dataSource.filter = filterValue.trim().toLowerCase();

    	if (this.dataSource.paginator) {
    		this.dataSource.paginator.firstPage();
    	}
    }

    ngOnDestroy(){
    	if (this.querySubscription) {
    		// code...
    		this.querySubscription.unsubscribe();
    	}
    }

}
