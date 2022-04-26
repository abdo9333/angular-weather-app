import { Component } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApiJsonService } from './services/api-json.service';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { APIResponse, ApiWeather, Current_Condition } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weatherApp';

  city_info : any = [];
  current_condition : any = [];

  constructor( private http : HttpClient, private apiJsonService : ApiJsonService) {
      this.getAllTrees();
   }

   getAllTrees(){
      this.apiJsonService.getAll().subscribe((data : APIResponse<ApiWeather , Current_Condition>)=>{
        this.city_info = data.city_info;
        this.current_condition = data.current_condition;
        console.log(data);
      })
    }

}
