import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'adminorders',
  templateUrl: './adminorders.component.html',
  styleUrls: ['./adminorders.component.css']
})
export class AdminordersComponent implements OnInit, OnDestroy {

	members: any[];
    dataSource: MatTableDataSource<any>;
    toggleField: string;
    savedChanges = false;
    error: boolean = false;
    errorMessage: String = "";
    dataLoading: boolean = false;
    private querySubscription;
    myDocData: any;

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
    this.querySubscription = this._backendService.getProducts('orders')
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
    this.querySubscription = this._backendService.getFilterProducts('orders', filters)
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
    this.querySubscription = this._backendService.setProducts('orders', formData)
        .subscribe(members => {
            if(members){
            	this.savedChanges = true;
                // this.dataLoading = false;
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

    updateData(formData) {
        formData.tags = formData.tags.split(',');
        if (confirm("Are you sure want to update this record ?")) {
            this.dataLoading = true;
            this._backendService.updateProducts('orders', formData).subscribe((res) => {
                this.error = false;
                this.errorMessage = "";
                this.dataLoading = false;
                this.savedChanges = true;
                console.log('Doc Updated');
            });
        }
    }

    getDoc(docId) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.getOneProductDoc('orders', docId)
            .subscribe(res => {
                this.myDocData = res;
                this.toggle('editMode');
                this.dataLoading = false;
            },
                (error) => {
                    this.error = true;
                    this.errorMessage = error.message;
                    this.dataLoading = false;
                },
                () => { this.error = false; this.dataLoading = false; });
    }

    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this.dataLoading = true;
            this._backendService.deleteOneProductDoc('orders', docId)
            .subscribe((res) => {
                this.error = false;
                this.errorMessage = "";
                this.dataLoading = false;
                this.toggle('searchMode');
                console.log('Doc Deleted');
            });
        }
    }

    ngOnDestroy(){
    	if (this.querySubscription) {
    		// code...
    		this.querySubscription.unsubscribe();
    	}
    }

}
