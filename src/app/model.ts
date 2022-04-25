export interface ApiWeather{

  name:string;
  city_info : Array<city_info>;
  current_condition : Array<current_condition>;


}

export interface APIResponse<T> {
  results: Array<T>;
}

interface city_info {
  name: string;
  country: string;
  }
interface current_condition{
  date: string;
  hour: string;
  wnd_spd: string;
  wnd_dir: string;
  humidity: string;
  condition: string;
  tmp: string;
  icon: string;
}
