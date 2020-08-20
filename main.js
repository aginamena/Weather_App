export class Weather{
  constructor(temp, temp_mn, temp_max, description){
    this.temp = temp;
    this.temp_min = temp_min;
    this.temp_max = temp_max;
    this.description = description;
  }
  get temp(){
    return temp;
  }
  get temp_max(){
    return temp_max;
  }
  get temp_min(){
    return temp_min;
  }
  get description(){
    return description;
  }
  set temp(newTemp){
    this.temp = temp;
  }
  set temp(newTemp_Max){
    this.temp = temp;
  }
  set temp_min(newTemp_Min){
    this.temp_min = newTemp_Min;
  }
  set description(newDescription){
    this.description = newDescription;
  }
}
