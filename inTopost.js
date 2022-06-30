var i=0
var postfix=''
var j=-1
var b=document.querySelector("#next");
operator_stack=[]
var z=1;

function check_operator(a)
{
   if (a=='*' || a=='/')
   {
      return 2
   }
   else if (a=='+' || a=='-')
   {
      return 1
   }
   else
   {    
      return 0
   }
  
}


b.addEventListener("click",function()
{  
   
   



   var write=document.getElementsByClassName('steps')[0]
   w=document.querySelector("input").value
   inp="("+w+')'

   if (i==0)
   {
      
      
      
      for(var inc=0;inc<inp.length;inc++)
      {
         var a=document.createElement("h3");
         a.classList.add("box");
         a.innerHTML=inp[inc];
         var c=document.querySelector('#d');
         c.appendChild(a);
         
      }
      document.querySelector('p').remove()

      
   }
   q=document.getElementsByClassName('box')[i]
   q.style.backgroundColor='#249e47';


   var letter=inp[i]
   if (letter==0 || letter==1 || letter==2 || letter==3 || letter==4 || letter==5 || letter==6 || letter==7 || letter==8 || letter==9)
   { 
      postfix=postfix+String(letter)
      write.innerHTML=write.innerHTML + '<br>' + z +".  "+String(letter) + ' is encountered so we pass it to postfix expression'
      z++;
   }

   else if (letter=='(')
   {
      operator_stack.push('(')
      
      var a=document.createElement("div");
      a.classList.add("block");
      a.innerHTML="(";
      var b= document.querySelector('#stack_box');
      b.appendChild(a);

      var sto=setInterval(fade,70); // fade in for 1st block
      count=0
      function fade()
      {
          if (count>1){
              clearInterval(sto);
          }
          else
          {
              
              var s=document.getElementsByClassName("block")[j];
          
              s.style.backgroundColor="rgba(87, 87, 214,"+count+")";
              //s.style.color="rgba(0,0,0,"+count+")";
              s.style.borderColor="rgba(0,0,0,"+count+")";
              count=count+0.1
              console.log("Jay")
          }
      }
      
      j++;

      write.innerHTML=write.innerHTML + '<br>' + z +".  "+String(letter) + ' is encountered so we push it into the stack.'
      z++;



   }
   else if (check_operator(letter)!=0)
   {

      if (check_operator(operator_stack[operator_stack.length-1]) !=0 && letter!='(')
      {
         console.log('prior1')
         priority_last_no=check_operator(operator_stack[operator_stack.length -1])
         priority_curr_no=check_operator(letter)

         console.log(operator_stack[operator_stack.length -1])
         console.log(letter)
         console.log(priority_last_no)
         console.log(priority_curr_no)

         if (priority_last_no>=priority_curr_no)
         {
            console.log('prior')
            s=operator_stack.pop()
            var t=document.getElementsByClassName('block')[j];
            t.innerHTML=letter;
            var sto=setInterval(fade,70); // fade in for 1st block
            count=0
            function fade()
            {
                if (count>1){
                    clearInterval(sto);
                }
                else
                {
                    
                    var s=document.getElementsByClassName("block")[j];
                
                    s.style.backgroundColor="rgba(87, 87, 214,"+count+")";
                    //s.style.color="rgba(0,0,0,"+count+")";
                    s.style.borderColor="rgba(0,0,0,"+count+")";
                    count=count+0.1
                    console.log("Jay")
                }
            }
            postfix=postfix+String(s)

            operator_stack.push(letter)

            write.innerHTML=write.innerHTML + '<br>' + z +".  "+String(letter) + ' is encountered, we know that priority of '+String(letter)+'is less than or equal to priority of ' + s + 'so we pop'+s+'and pass it to postfix and push' +String(letter)+'to the stack.'
            z++;
         }
         else
      {
         console.log('else')
         operator_stack.push(letter)
         var a=document.createElement("div");
         a.classList.add("block");
         a.innerHTML=letter;

         var sto=setInterval(fade,70); // fade in for 1st block
         count=0
         function fade()
         {
             if (count>1){
                 clearInterval(sto);
             }
             else
             {
                 
                 var s=document.getElementsByClassName("block")[j];
             
                 s.style.backgroundColor="rgba(87, 87, 214,"+count+")";
                 //s.style.color="rgba(0,0,0,"+count+")";
                 s.style.borderColor="rgba(0,0,0,"+count+")";
                 count=count+0.1
                 console.log("Jay")
             }
         }
         var b= document.querySelector('#stack_box');
         b.appendChild(a);
         j++;

         write.innerHTML=write.innerHTML + '<br>' + z +".  "+String(letter) + ' is encountered, we know that priority of '+String(letter)+'is greater than priority of ' + s + 'so we push'+String(letter)+'to the stack.'
         z++;
      }
      }
      else
      {
         console.log('else')
         operator_stack.push(letter)
         var a=document.createElement("div");
         a.classList.add("block");
         s=operator_stack[operator_stack.length-1]
         a.innerHTML=letter;
         var sto=setInterval(fade,70); // fade in for 1st block
         count=0
         function fade()
         {
             if (count>1){
                 clearInterval(sto);
             }
             else
             {
                 
                 var s=document.getElementsByClassName("block")[j];
             
                 s.style.backgroundColor="rgba(87, 87, 214,"+count+")";
                 //s.style.color="rgba(0,0,0,"+count+")";
                 s.style.borderColor="rgba(0,0,0,"+count+")";
                 count=count+0.1
                 console.log("Jay")
             }
         }
         var b= document.querySelector('#stack_box');
         b.appendChild(a);
         j++;


         write.innerHTML=write.innerHTML + '<br>' + z +".  "+String(letter) + ' is encountered so we push'+String(letter)+'to the stack.'
         z++;
         
      }

    
   }

   else if (letter==')')  
   {
      s=''
      while (s!='(')
      {
         console.log(j)
         s=operator_stack.pop()
         console.log(s)
         var t=document.getElementsByClassName('block')[j];

         /*var sto=setInterval(fade,70); // fade in for 1st block
         count=1
         function fade()
         {
             if (count<0.2){
                 clearInterval(sto);
             }
             else
             {
                 
                 var s=document.getElementsByClassName("block")[j];
             
                 s.style.backgroundColor="rgba(87, 87, 214,"+count+")";
                 //s.style.color="rgba(0,0,0,"+count+")";
                 s.style.borderColor="rgba(0,0,0,"+count+")";
                 count=count-0.1
                 console.log("Jay")
             }
         }*/
         t.remove()
         j--;
         if (check_operator(s)!=0)
         {
            postfix=postfix+String(s)
         }
         
      }
      write.innerHTML=write.innerHTML + '<br>' + z +".  "+String(letter) + ' is encountered, so we keep on poping the elements until ) is encountered.'
      z++;



      
   }

   console.log(postfix)
   console.log(operator_stack)

   document.querySelectorAll('input')[1].value=postfix
   i++;
})

