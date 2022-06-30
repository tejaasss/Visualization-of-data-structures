var i=0;
var front=0;
var cnt=0;
var frontval=document.querySelector('.frontval');
frontval.innerHTML='-1';
var rearval=document.querySelector('.rearval');
rearval.innerHTML='-1';

var noOfElements=document.querySelector('.elements');
noOfElements.innerHTML='0';
var c=document.querySelector('.stackempty')
c.innerHTML="<h4>Empty Stack</h4>"

var en=document.querySelector("#q");

en.addEventListener("click",function(){
    if(cnt<11)
    {
    var inp =document.querySelectorAll("input")[0];
    var d=document.createElement("h3");
    d.classList.add("square");
    d.innerHTML=inp.value;
    var c=document.getElementsByClassName("stack_box")[0];
    c.appendChild(d);

    var sto=setInterval(fade,50);
    count=0
    function fade()
    {   
        if (count>1){
            
            clearInterval(sto);
        }
        else
        { 
            var s=document.getElementsByClassName("square")[i-1];
            s.style.backgroundColor="rgba(152,216,250,"+count+")";
            //s.style.color="rgba(0,0,0,"+count+")";
            s.style.borderColor="rgba(0,0,0,"+count+")";
            count=count+0.1; 
            console.log(count)

        }
    }

    var u=document.createElement('h6');
    
    u.innerHTML=inp.value+' is added to queue at index positon '+i+'.';
    var y=document.getElementsByClassName('steps')[0];
    y.appendChild(u);


    var operation=document.querySelector('.oper');
    operation.innerHTML="Enqueue";

    
    var rearval=document.querySelector('.rearval');
    rearval.innerHTML=i;

    var noOfElements=document.querySelector('.elements');
    noOfElements.innerHTML=i+1;


    if(i==0){
        
        var a=document.createElement("h3");
        a.classList.add("rear-block");
        a.innerHTML="Rear";
        var b= document.querySelector('#rr');
        b.appendChild(a);

        var ar=document.createElement("h3");
        ar.classList.add("rear-arrow");
        ar.innerHTML="&darr;";
        var e=document.querySelector("#ra");
        e.appendChild(ar);

        var m=document.createElement('h3');
        m.classList.add("front-block");
        m.innerHTML="Front";
        var n= document.querySelector('#fr');
        n.appendChild(m);

        var af=document.createElement("h3");
        af.classList.add("front-arrow");
        af.innerHTML="&uarr;";
        var fe=document.querySelector("#fa");
        fe.appendChild(af);

        var frontval=document.querySelector('.frontval');
        frontval.innerHTML='0';    

        var c=document.querySelector('.stackempty')
        c.innerHTML=''
    }

    if(i!=0){
        
        var t=document.getElementsByClassName("rear-block")[0];
        t.classList.add("empty");
        t.innerHTML=" ";
        t.classList.remove("rear-block")

        var a=document.createElement("h3");
        a.classList.add("rear-block");
        a.innerHTML="Rear";
        var b= document.querySelector('#rr');
        b.appendChild(a);


        var t=document.getElementsByClassName("rear-arrow")[0];
        t.classList.add("empty");
        t.innerHTML=" ";
        t.classList.remove("rear-arrow")


        var ar=document.createElement("h3");
        ar.classList.add("rear-arrow");
        ar.innerHTML="&darr;";
        var e=document.querySelector("#ra");
        e.appendChild(ar);
        
    }
    i++;
    cnt++;
}
else{
    alert("Maximum Capacity Reached!!")
}
          
})


var dq=document.querySelector('#s');
dq.addEventListener("click",function(){
    var j=0;
      
        var operation=document.querySelector('.oper');
        operation.innerHTML="Dequeue";

        var noOfElements=document.querySelector('.elements');
        noOfElements.innerHTML=i-1;

        var frontval=document.querySelector('.frontval');
        frontval.innerHTML='0';

        var t=document.querySelectorAll(".square")[0].textContent
        var u=document.createElement('h6');
        u.innerHTML=(t+' is dequeued from the queue.');
        var y=document.getElementsByClassName('steps')[0]; 
        y.appendChild(u)


        /*var f=document.getElementsByClassName('square')[0].textContent;
        var u=document.createElement('h4');
        u.innerHTML=f.value +' is removed from queue';
        var y=document.getElementsByClassName('steps')[0];
        y.appendChild(u)*/

        /*var f=document.getElementsByClassName("block")[i]
        var e=f.innerHTML
        var u=document.createElement('h4')
        u.innerHTML=e.value + "is poped from stack";
        var y=document.getElementsByClassName('steps')[0]
        y.appendChild(u)*/


    

        

    if(i==1){
            var box=document.querySelectorAll(".square")[0];
            box.classList.add("empty")
            box.innerHTML=" ";
            box.classList.remove("square")

            /*var t=document.querySelectorAll(".square")[0].textContent
            var u=document.createElement('h6');
            u.innerHTML=(t+' is dequeued from the queue');
            var y=document.getElementsByClassName('steps')[0]; 
            y.appendChild(u)*/
    
            
            /*var sto=setInterval(fade,50)
            count=1
            function fade()
            {
            if (count<0){
                console.log(1)
                clearInterval(sto);
            }
            else
            {
            
                var s=document.getElementsByClassName("square")[0];
                s.style.backgroundColor="rgba(255,255,255,"+count+")";
                //s.style.color="rgba(0,0,0,"+count+")";
                s.style.borderColor="rgba(0,0,0,"+count+")";
                count=count-0.1
                console.log(count)
        
            }
        }*/

            var t=document.getElementsByClassName("front-block")[i-1];
            t.classList.add("empty");
            t.innerHTML=" ";
            t.classList.remove("front-block")
            var t=document.getElementsByClassName("front-arrow")[i-1];
            t.classList.add("empty");
            t.innerHTML=" ";
            t.classList.remove('front-arrow');
            var u=document.getElementsByClassName("rear-block")[i-1];
            u.classList.add("empty");
            u.innerHTML=" ";
            u.classList.remove('rear-block');
            var t=document.getElementsByClassName("rear-arrow")[i-1];
            t.classList.add("empty");
            t.innerHTML=" ";
            t.classList.remove("rear-arrow");
            var frontval=document.querySelector('.frontval');
            frontval.innerHTML='-1';

            var rearval=document.querySelector('.rearval');
            rearval.innerHTML='-1';

            var c=document.querySelector('.stackempty')
        c.innerHTML="<h4>Empty Stack</h4>"


            
        }  
    

        if(i!=1)
        {   
            console.log("G") 
        /*var sto=setInterval(fade,50)
        count=1
        function fade()
        {
        if (count<0){
            console.log(1)
            clearInterval(sto);
        }
        else
        {
        
            var s=document.getElementsByClassName("square")[0];
            s.style.backgroundColor="rgba(255,255,255,"+count+")";
            //s.style.color="rgba(0,0,0,"+count+")";
            s.style.borderColor="rgba(0,0,0,"+count+")";
            count=count-0.1
            console.log(count)
    
        }
    }*/


        var box=document.querySelectorAll(".square")[0];
        box.classList.add("empty")
        box.innerHTML=" ";
        box.classList.remove("square")

        /*var t=document.querySelectorAll(".square")[0].textContent
        var u=document.createElement('h6');
        u.innerHTML=(t+' is dequeued from the queue');
        var y=document.getElementsByClassName('steps')[0]; 
        y.appendChild(u)*/

        var w=document.getElementsByClassName("front-arrow")[0];
        w.classList.add("empty");
        w.innerHTML=" ";
        w.classList.remove('front-arrow')
        
        var af=document.createElement("h3");
        af.classList.add("front-arrow");
        af.innerHTML="&uarr;";
        var fe=document.querySelector("#fa");
        fe.appendChild(af);

        var t=document.getElementsByClassName("front-block")[0];
        t.classList.add("empty");
        t.innerHTML=" ";
        t.classList.remove("front-block")
        var a=document.createElement("h3");
        a.classList.add("front-block");
        a.innerHTML="Front";
        var b= document.querySelector('#fr');
        b.appendChild(a);
        
        
        var rearval=document.querySelector('.rearval');
        rearval.innerHTML=i-2;
        }

        /*if(front==0){
            var sto=setInterval(fade,50)
            count=1
            function fade()
            {
            if (count<0){
                console.log(1)
                clearInterval(sto);
            }
            else
            {
            
                var s=document.getElementsByClassName("square")[0];
                s.style.backgroundColor="rgba(255,255,255,"+count+")";
                //s.style.color="rgba(0,0,0,"+count+")";
                s.style.borderColor="rgba(0,0,0,"+count+")";
                count=count-0.1
                console.log(count)
        
            }
        }

        var t=document.querySelectorAll(".square")[0].textContent
        var u=document.createElement('h6');
        u.innerHTML=(t+' is dequeued from the queue');
        var y=document.getElementsByClassName('steps')[0]; 
        y.appendChild(u)

        var w=document.getElementsByClassName("front-arrow")[0];
        w.classList.add("empty");
        w.innerHTML=" ";
        w.classList.remove('front-arrow')
        
        var af=document.createElement("h3");
        af.classList.add("front-arrow");
        af.innerHTML="&uarr;";
        var fe=document.querySelector("#fa");
        fe.appendChild(af);

        var t=document.getElementsByClassName("front-block")[0];
        t.classList.add("empty");
        t.innerHTML=" ";
        t.classList.remove("front-block")
        var a=document.createElement("h3");
        a.classList.add("front-block");
        a.innerHTML="Front";
        var b= document.querySelector('#fr');
        b.appendChild(a);

        }

        front++;
        console.log(i)*/
        i--;
       
           
})
