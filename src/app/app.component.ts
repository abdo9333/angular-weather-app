import { Component } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApiJsonService } from './services/api-json.service';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weatherApp';
  
  data : any = [];
  name:any = String;
  date:any = String;
  hour:any =String;
  condition: any = String;
  icon:any= String;
  humidity: any = String;
  tmp: any = String;
  wnd_spd: any = String;
  wnd_dir: any = String;
  country : any = String;

  constructor( private http : HttpClient, private apiJsonService : ApiJsonService) {
      this.getAllTrees();
   }

   getAllTrees(){
    this.apiJsonService.getAll().subscribe(
        (data)=> {
            this.name = data.city_info.name;
            this.date = data.current_condition.date;
            this.condition =  data.current_condition.condition;
            this.hour= data.current_condition.hour;
            this.humidity = data.current_condition.humidity;
            this.icon= data.current_condition.icon;
            this.tmp= data.current_condition.tmp;
            this.wnd_dir = data.current_condition.wnd_dir;
            this.wnd_spd= data.current_condition.wnd_spd;
            this.country = data.city_info.country;
        },
        (error) => console.log("error : " + error)
    );

    }

  


}
