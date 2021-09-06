function leapYear(){
  let year=document.getElementById("year").value;
  if((year%4==0)&&(year%100!=0)||(year%400==0)){
    console.log(year+ " is a leap year");
    alert(year+ " is a leap year.")
}
  else{console.log(year+ "is not a leap year");
    }
};