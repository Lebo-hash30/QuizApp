import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
   })
export class QuestionsPage implements OnInit {

  

    
  
   
  answer2;
  
  answer3;

  answer6;

  answer10;

  answer14;

  answer15;

  answer17;

  answer20;

  answer22;

  sum =0;

  results;

  
constructor(public router: Router) { 
    
  
  }

  ngOnInit() {
  
    
    
    }

    submitData(){

      if(this.answer2  ==  "It's a term that stands for Coronavirus Disease 2019, the year it was first identified"){
        this.answer2
        this.sum+=2
        
      
      }

      console.log(this.answer2)
   
      
      console.log(this.sum)



      if(this.answer3  ==  "SARS and Influenza"){
        this.answer3
        this.sum+=2
      
      }
       console.log(this.answer3)

      
       console.log(this.sum)




       if(this.answer6  ==  "True"){
        this.answer6
        this.sum+=2
      }
       
      console.log(this.answer6)
    
      
      console.log(this.sum)
     


       if(this.answer10 ==  "SARS and MERS"){
      this.answer10
      this.sum+=2
      }
       console.log(this.answer10)

    
        
      
       console.log(this.sum)


       if(this.answer14 ==  "125+"){
        this.answer14
        this.sum+=2
      }
       console.log(this.answer14)

    
        
      
       console.log(this.sum)


       if(this.answer15 ==  "True"){
         this.answer15
        this.sum+=2
      }
       console.log(this.answer15)

    
        
      
       console.log(this.sum)



       if(this.answer17 ==  "The virus can't survive in hot , humid climates"){
        this.answer17
        this.sum+=2
      }
       console.log(this.answer17)

    
        
      
       console.log(this.sum)
  


       if(this.answer20 ==  "Men"){
        this.answer20
        this.sum+=2
      }
       console.log(this.answer20)

    
        
      
       console.log(this.sum)



       if(this.answer22 ==  "True"){
        this.answer22
        this.sum+=2
      }
       console.log(this.answer22)

       console.log(this.sum)



       if (this.sum/18*100 >=88.8){
          this.results = "PASSED"
       }
        else{
           this.results = "FAILED" 

        }
  
let obj = {
  marks:this.sum ,
  percentage:this.sum/18*100,
  

}
       console.log(this.sum/18*100)
  this.router.navigateByUrl('/home', {state:obj});

      

      }
      


    

    
  }
  
 

