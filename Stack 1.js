var i=0;
var cnt=0;
var frontval=document.querySelector('.topval');
frontval.innerHTML='-1';

var noOfElements=document.querySelector('.elements');
noOfElements.innerHTML='0';

var c=document.querySelector('.stackempty')
        c.innerHTML="<h4>Empty Stack</h4>"

var push=document.querySelector('#p')
push.addEventListener("click",function()
{
    if(i<7){

    var inp =document.querySelectorAll("input")[0];
    var d=document.createElement("div");
    d.classList.add("block");
    d.classList.add("space")
    d.innerHTML=inp.value;
    var c=document.querySelector('#h');
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
            var s=document.getElementsByClassName("block")[i-1];
            s.style.backgroundColor="rgba(152,216,250,"+count+")";
            //s.style.color="rgba(0,0,0,"+count+")";
            s.style.borderColor="rgba(0,0,0,"+count+")";
            count=count+0.1
            
            

        }
    }

    var operation=document.querySelector('.oper');
    operation.innerHTML="Push";

    var noOfElements=document.querySelector('.elements');
    noOfElements.innerHTML=i+1;

    var u=document.createElement('h6');
    u.innerHTML=(inp.value+' is pushed into stack at index position '+i);
    var y=document.getElementsByClassName('steps')[0];
    y.appendChild(u);

    var operation=document.querySelector('.oper');
    operation.innerHTML="Push";

    var noOfElements=document.querySelector('.elements');
    noOfElements.innerHTML=i+1;

    var rearval=document.querySelector('.topval');
    rearval.innerHTML=i;


    
    if(i==0){
        var a=document.createElement("div");
        a.classList.add("top-block");
        a.innerHTML="Top";
        var b= document.querySelector('#c');
        b.appendChild(a);
    
    
        
        var ar=document.createElement("div");
        ar.classList.add("top-arrow");
        ar.innerHTML="&#8678;";
        var e=document.querySelector("#ar");
        e.appendChild(ar);

    var frontval=document.querySelector('.topval');
    frontval.innerHTML='0';
    var c=document.querySelector('.stackempty')
    c.innerHTML=''
    }

    if(i!=0)
    {
        
        var t=document.getElementsByClassName("top-block")[i-1];
        t.classList.add("emp");
        t.innerHTML=" ";
        var l=document.createElement("div");
        l.classList.add("top-block");
        l.innerHTML="Top"
        var b= document.querySelector('#c')
        b.appendChild(l)    

        var r=document.getElementsByClassName("top-arrow")[i-1];
        r.classList.add("empty");
        r.innerHTML=" ";
        var o=document.createElement("div");
        o.classList.add("top-arrow");
        o.innerHTML="&#8678;";
        var e=document.querySelector("#ar");
        e.appendChild(o)
        

        
    }
    
        i++;
        console.log(i);

}
else{
    alert("Maximum Size of Stack Reached!!")
}


    }
)
var pp=document.querySelector("#q");
pp.addEventListener("click",function(){

    var operation=document.querySelector('.oper');
    operation.innerHTML="Pop";

    var noOfElements=document.querySelector('.elements');
    noOfElements.innerHTML=i-1;

                

    if(i!=1){


        
        var t=document.querySelectorAll(".space")[i].textContent
        var u=document.createElement('h6');
        u.innerHTML=(t+' is poped from the stack');
        var y=document.getElementsByClassName('steps')[0]; 
        y.appendChild(u)

        
        
        

           /* var sto=setInterval(fade,50)
            count=1
            function fade()
            {
            if (count<0){
                console.log(1)
                clearInterval(sto);
            }
            else
            {
            
                var s=document.getElementsByClassName("block")[i];
                s.style.backgroundColor="rgba(255,255,255,"+count+")";
                //s.style.color="rgba(0,0,0,"+count+")";
                s.style.borderColor="rgba(0,0,0,"+count+")";
                count=count-0.1
                console.log(count)
        
            }
        }*/

        var t=document.querySelectorAll('.block')[i-1]
        t.remove()

        
        

        
                




    var r=document.getElementsByClassName("top-arrow")[i-1];
    r.remove();
    var o=document.getElementsByClassName("top-arrow")[i-2];
    o.classList.remove("empty");
    o.innerHTML="&#8678;";

    var s=document.getElementsByClassName("top-block")[i-1];
    s.remove();
    var w=document.getElementsByClassName("top-block")[i-2];
    w.classList.remove("emp");
    w.innerHTML="Top";

    var rearval=document.querySelector('.topval');
    rearval.innerHTML=i-2;

    


    }
    else{

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
            
                var s=document.getElementsByClassName("block")[i];
                s.style.backgroundColor="rgba(255,255,255,"+count+")";
                //s.style.color="rgba(0,0,0,"+count+")";
                s.style.borderColor="rgba(0,0,0,"+count+")";
                count=count-0.1
                console.log(count)
        
            }
        }*/
        var s=document.getElementsByClassName("top-block")[i-1];
        s.remove();

        var r=document.getElementsByClassName("top-arrow")[i-1];
        r.remove();

        var box=document.querySelectorAll(".block")[i-1];
        box.remove();

        var rearval=document.querySelector('.topval');
        rearval.innerHTML='-1';

        var c=document.querySelector('.stackempty')
        c.innerHTML="<h4>Empty Stack</h4>"
    }
        
i--;
console.log(i)

}
)

var mp=document.querySelector('#r');
mp.addEventListener("click",function(){

    var d=document.querySelectorAll('input')[1]
    var p=Number(d.value)

    if(p>i){
        alert("Enter Suitable Value")
    }
    else{
        for(k=0;k<p;k++)
        {
        var operation=document.querySelector('.oper');
    operation.innerHTML="Multipop";

    var noOfElements=document.querySelector('.elements');
    noOfElements.innerHTML=i-1;

                

    if(i!=1){


        
        var t=document.querySelectorAll(".space")[i].textContent
        var u=document.createElement('h6');
        u.innerHTML=(t+' is poped from the stack');
        var y=document.getElementsByClassName('steps')[0]; 
        y.appendChild(u)

        
        
        

           /* var sto=setInterval(fade,50)
            count=1
            function fade()
            {
            if (count<0){
                console.log(1)
                clearInterval(sto);
            }
            else
            {
            
                var s=document.getElementsByClassName("block")[i];
                s.style.backgroundColor="rgba(255,255,255,"+count+")";
                //s.style.color="rgba(0,0,0,"+count+")";
                s.style.borderColor="rgba(0,0,0,"+count+")";
                count=count-0.1
                console.log(count)
        
            }
        }*/

        var t=document.querySelectorAll('.block')[i-1]
        t.remove()

        
        

        
                




    var r=document.getElementsByClassName("top-arrow")[i-1];
    r.remove();
    var o=document.getElementsByClassName("top-arrow")[i-2];
    o.classList.remove("empty");
    o.innerHTML="&#8678;";

    var s=document.getElementsByClassName("top-block")[i-1];
    s.remove();
    var w=document.getElementsByClassName("top-block")[i-2];
    w.classList.remove("emp");
    w.innerHTML="Top";

    var rearval=document.querySelector('.topval');
    rearval.innerHTML=i-2;

    


    }
    else{

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
            
                var s=document.getElementsByClassName("block")[i];
                s.style.backgroundColor="rgba(255,255,255,"+count+")";
                //s.style.color="rgba(0,0,0,"+count+")";
                s.style.borderColor="rgba(0,0,0,"+count+")";
                count=count-0.1
                console.log(count)
        
            }
        }*/
        var s=document.getElementsByClassName("top-block")[i-1];
        s.remove();

        var r=document.getElementsByClassName("top-arrow")[i-1];
        r.remove();

        var box=document.querySelectorAll(".block")[i-1];
        box.remove();

        var rearval=document.querySelector('.topval');
        rearval.innerHTML='-1';

        var c=document.querySelector('.stackempty')
        c.innerHTML="<h4>Empty Stack</h4>"
    }
        
i--;
        }
        

    }
}
)
