import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../../services/backend.service';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	@Input() pageTitle: string;
	@Input() iconTitle: string;
	@Input() helpTitle: string;
	counter = 0;
	configData;
	userStatusColor = "warn";

  constructor( private _backendService: BackendService) { }

  ngOnInit() {
  	this.configData = this._backendService.getConfig();

  	// this._backendService.getUserStatus().subscribe(
  	// 	(res)=>{
  	// 		this.userStatusColor = res ? "primary" : "warn";
  	// 	});
  }

}
