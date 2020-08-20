/* temperature values are stored in kelvin */

export class Weather{
  constructor(temp, temp_min, temp_max, description, feels_like){
    this.temp = temp;
    this.temp_min = temp_min;
    this.temp_max = temp_max;
    this.description = description;
    this.feels_like = feels_like;
  }
  get_temp(){
    return this.temp;
  }
  get_temp_max(){
    return this.temp_max;
  }
  get_temp_min(){
    return this.temp_min;
  }
  get_description(){
    return this.description;
  }
  get_feels_like(){
    return this.feels_like;
  }
}
