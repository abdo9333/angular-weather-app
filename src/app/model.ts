export interface ApiWeather{

  name: string;
  country: string;

}
export interface  Current_Condition{

  date: string;
  hour: string;
  wnd_spd: string;
  wnd_dir: string;
  humidity: string;
  condition: string;
  tmp: string;
  icon: string;

}

export interface APIResponse<T , M> {
  city_info: Array<T>;
  current_condition : Array<M>
}


