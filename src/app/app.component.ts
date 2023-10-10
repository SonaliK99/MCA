import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {   //class to write code here
  title = 'project';

city1: string = 'mumbai';

city?: string ;

city2 = 'mumbai...';


name='sonali';

no1= 20 ;
no2= 10 ;

//Function Interpolarion
learningInterpolation()
{
    return'khosle'
}



  constructor(){ }   //to inject dependencies


}
