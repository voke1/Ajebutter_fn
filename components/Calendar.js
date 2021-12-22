
let months = ["January", "February", "March", "April", 
 "May", "June", "July", "August", "September", "October", 
 "November", "December"];

 let weekDays = [
     "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
 ]; 

 let nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

class MyCalendar extends React.Component {

state = {
     activeDate: new Date()
 } 

 year = this.state.activeDate.getFullYear();
 month = this.state.activeDate.getMonth();

 firstDay = new Date(year, month, 1).getDay(); 
 maxDays = this.nDays[month];
 if (month == 1) { // February
   if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
     maxDays += 1;
   }
 } 


   render() {
     return (
       <RN.View>

       </RN.View>
     );
   }
 } 