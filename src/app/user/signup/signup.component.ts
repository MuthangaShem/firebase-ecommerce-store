import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../../shared/router.animation';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	state: string = '';
    error: any;
    dataLoading: boolean = false;
    brokenNetwork = false;
    savedChanges = false;

  constructor(private _backendService: BackendService, private router: Router) { }

  ngOnInit() {
  }

  routeLoginPage (){
    this.router.navigate(['/login']);
  }

  onSubmit(formData) {
    this.dataLoading = true;
    this._backendService.createUser(formData).then(
      (success) =>
      {
        this.dataLoading = false;
        this.savedChanges = true;
      },
        (error) => {
          this.error = error;
          this.dataLoading = false;
          this.savedChanges = false;
        }
      )
  }

}
