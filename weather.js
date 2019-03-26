function Weather(cityName,descrption){
  this.cityname = cityName;
  this.description = descrption;
  this._temp = ""
}
Object.defineProperty(Weather.prototype,"Temparature",{
  get: function(){
    return this._temp;
  },
  set: function(value){
    this._temp = (value-273.15).toFixed(2) +" C"
  }
});
