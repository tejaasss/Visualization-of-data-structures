var i=0;
var cnt=0;
var operand=[]
var operator=[]

var a=document.querySelector('.elements')
a.innerHTML=0
var b=document.querySelector('.topval')
b.innerHTML=-1
var c=document.querySelector('.stackempty')
c.innerHTML="Empty Stack"


var b=document.querySelector("#p");
b.addEventListener("click",function(){
    console.log("Pranav")
    var inp=document.querySelector("input")
    for(var inc=0;inc<inp.value.length;inc++){
        if(inp.value[inc]=='+'|| inp.value[inc]=='-' || inp.value[inc]=='*' || inp.value[inc]=='/'){
            operator.push(inp.value[inc])
            
        }
        else{
            operand.push(inp.value[inc])
            
        }

        if(operand.length<=operator.length)
        {
        alert("Enter valid Postfix Expression")
        }   
        else if(operand.length>operator.length){
        var a=document.createElement("h3");
		a.classList.add("box");
		a.innerHTML=inp.value[inc];
        var c=document.getElementsByClassName("stack_box")[0];
        c.appendChild(a);
    }
}   
})

var a=document.querySelector('#q')
a.addEventListener("click",function(){
    if(i==0){

        var d=document.querySelectorAll('.box')[0] // For 1st value in stack
        d.classList.remove('box')
        d.classList.add("boxk")
        var de=document.createElement("div");
        de.classList.add("block");
        de.innerHTML=d.innerHTML;
        var c=document.querySelector('#h');
        c.appendChild(de);

        var y=document.createElement('div') // 1st top-block
        y.classList.add('top-block')
        y.innerHTML="Top"
        var z=document.querySelector('#c')
        z.appendChild(y)

        var ar=document.createElement("div"); // 1st top-arrow
        ar.classList.add("top-arrow");
        ar.innerHTML="&#8678;";
        var e=document.querySelector("#ar");
        e.appendChild(ar);

        var sto=setInterval(fade,70); // fade in for 1st block
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

    var ar=document.createElement("h3"); // incrementing arrow from horizontal queue
    ar.classList.add("arrow");
    ar.innerHTML="&darr;";
    var e=document.querySelector("#rr");
    e.appendChild(ar);
    cnt++
    var a=document.querySelector('.elements')
    a.innerHTML=cnt   

    var b=document.querySelector('.topval')
    b.innerHTML=cnt-1

    var n=document.createElement('h4')
    n.innerHTML=document.querySelectorAll('.block')[0].innerHTML +" is pushed into stack."
    var y=document.getElementsByClassName('steps')[0]
    y.appendChild(n)


    var b=document.querySelector('.oper')
    b.innerHTML="Push"

    var c=document.querySelector('.stackempty')
    c.innerHTML=''

    
  
    }

    if(i!=0){
            if(document.querySelectorAll('.box')[0].innerHTML=='+'){

                var d=document.querySelectorAll('.box')[0]  //For value in stack
                 d.classList.remove('box')
                 d.classList.add("boxk")
                /*var de=document.createElement("div");
                de.classList.add("block");
                de.innerHTML=d.innerHTML;
                var c=document.querySelector('#h');
                c.appendChild(de);*/

                var m=document.querySelectorAll('.block')[cnt-1]
                var n=document.querySelectorAll('.block')[cnt-2]

                var p=m.innerHTML
                var q=n.innerHTML

                var sum=Number(q)+Number(p)

                m.classList.remove('block')
                m.style.removeProperty('background-color')
                m.style.removeProperty('border-color')
                m.innerHTML=''
            
                n.classList.remove('block')
                n.style.removeProperty('background-color')
                n.style.removeProperty('border-color')
                n.innerHTML=''
                cnt=cnt-1;
                cnt=cnt-1;
               

                var de=document.createElement("div");
                de.classList.add("block");
                de.innerHTML=sum;
                var c=document.querySelector('#h');
                c.appendChild(de);

                var sto=setInterval(fade,50);// fade in for elements
                count=0
                function fade()
                {
                    if (count>1){
                        console.log(1)
                        clearInterval(sto);
                    }
                    else
                    {
                        
                        var s=document.getElementsByClassName("block")[cnt-1];
                    
                        s.style.backgroundColor="rgba(152,216,250,"+count+")";
                        //s.style.color="rgba(0,0,0,"+count+")";
                        s.style.borderColor="rgba(0,0,0,"+count+")";
                        count=count+0.1
                        
                        console.log(count)
            
                    }
                }
                cnt++

                var d=document.querySelectorAll('#ar .emt')[0]
                d.classList.remove('emt')
                var e=document.querySelectorAll('.top-arrow')[0]
                e.classList.remove('top-arrow')
                e.innerHTML=''

                var ar=document.createElement("div"); // 1st top-arrow
                ar.classList.add("top-arrow");
                ar.innerHTML="&#8678;";
                var e=document.querySelector("#ar");
                e.appendChild(ar);


                var d=document.querySelectorAll('#c .topemp')[0]
                d.classList.remove('topemp')
                var e=document.querySelectorAll('.top-block')[0]
                e.classList.remove('top-block')
                e.innerHTML=''

                
            var y=document.createElement('div') // 1st top-block
            y.classList.add('top-block')
            y.innerHTML="Top"
            var z=document.querySelector('#c')
            z.appendChild(y)   

            
            var b=document.querySelector('.topval')
            b.innerHTML=cnt-1

            var n=document.createElement('h4')
            n.innerHTML="Addition of "+q+" and " +p + " is performed and result "+sum +" is pushed."
            var y=document.getElementsByClassName('steps')[0]
            y.appendChild(n)

            var a=document.querySelector('.oper')
            a.innerHTML="Addition"
            }



            else if(document.querySelectorAll('.box')[0].innerHTML=='-'){

                var d=document.querySelectorAll('.box')[0]  //For value in stack
                 d.classList.remove('box')
                 d.classList.add("boxk")
                /*var de=document.createElement("div");
                de.classList.add("block");
                de.innerHTML=d.innerHTML;
                var c=document.querySelector('#h');
                c.appendChild(de);*/

                var m=document.querySelectorAll('.block')[cnt-1]
                var n=document.querySelectorAll('.block')[cnt-2]

                var p=m.innerHTML
                var q=n.innerHTML

                var sum=Number(q)-Number(p)

                m.classList.remove('block')
                m.style.removeProperty('background-color')
                m.style.removeProperty('border-color')
                m.innerHTML=''
            
                n.classList.remove('block')
                n.style.removeProperty('background-color')
                n.style.removeProperty('border-color')
                n.innerHTML=''
                cnt=cnt-1;
                cnt=cnt-1;
               

                var de=document.createElement("div");
                de.classList.add("block");
                de.innerHTML=sum;
                var c=document.querySelector('#h');
                c.appendChild(de);

                var sto=setInterval(fade,50);// fade in for elements
                count=0
                function fade()
                {
                    if (count>1){
                        console.log(1)
                        clearInterval(sto);
                    }
                    else
                    {
                        
                        var s=document.getElementsByClassName("block")[cnt-1];
                    
                        s.style.backgroundColor="rgba(152,216,250,"+count+")";
                        //s.style.color="rgba(0,0,0,"+count+")";
                        s.style.borderColor="rgba(0,0,0,"+count+")";
                        count=count+0.1
                        
                        console.log(count)
            
                    }
                }
                cnt++

                var d=document.querySelectorAll('#ar .emt')[0]
                d.classList.remove('emt')
                var e=document.querySelectorAll('.top-arrow')[0]
                e.classList.remove('top-arrow')
                e.innerHTML=''

                var ar=document.createElement("div"); // 1st top-arrow
                ar.classList.add("top-arrow");
                ar.innerHTML="&#8678;";
                var e=document.querySelector("#ar");
                e.appendChild(ar);


                var d=document.querySelectorAll('#c .topemp')[0]
                d.classList.remove('topemp')
                var e=document.querySelectorAll('.top-block')[0]
                e.classList.remove('top-block')
                e.innerHTML=''

                
            var y=document.createElement('div') // 1st top-block
            y.classList.add('top-block')
            y.innerHTML="Top"
            var z=document.querySelector('#c')
            z.appendChild(y)  
            
            var b=document.querySelector('.topval')
            b.innerHTML=cnt-1

            
            var n=document.createElement('h4')
            n.innerHTML="Subtraction of "+q+" from " +p + " is performed and result "+sum +" is pushed."
            var y=document.getElementsByClassName('steps')[0]
            y.appendChild(n)
            
            var a=document.querySelector('.oper')
            a.innerHTML="Subtraction"
            }

            else if(document.querySelectorAll('.box')[0].innerHTML=='/'){

                var d=document.querySelectorAll('.box')[0]  //For value in stack
                 d.classList.remove('box')
                 d.classList.add("boxk")
                /*var de=document.createElement("div");
                de.classList.add("block");
                de.innerHTML=d.innerHTML;
                var c=document.querySelector('#h');
                c.appendChild(de);*/

                var m=document.querySelectorAll('.block')[cnt-1]
                var n=document.querySelectorAll('.block')[cnt-2]

                var p=m.innerHTML
                var q=n.innerHTML

                var sum=Number(q)/Number(p)

                m.classList.remove('block')
                m.style.removeProperty('background-color')
                m.style.removeProperty('border-color')
                m.innerHTML=''
            
                n.classList.remove('block')
                n.style.removeProperty('background-color')
                n.style.removeProperty('border-color')
                n.innerHTML=''
                cnt=cnt-1;
                cnt=cnt-1;
               

                var de=document.createElement("div");
                de.classList.add("block");
                de.innerHTML=sum;
                var c=document.querySelector('#h');
                c.appendChild(de);

                var sto=setInterval(fade,50);// fade in for elements
                count=0
                function fade()
                {
                    if (count>1){
                        console.log(1)
                        clearInterval(sto);
                    }
                    else
                    {
                        
                        var s=document.getElementsByClassName("block")[cnt-1];
                    
                        s.style.backgroundColor="rgba(152,216,250,"+count+")";
                        //s.style.color="rgba(0,0,0,"+count+")";
                        s.style.borderColor="rgba(0,0,0,"+count+")";
                        count=count+0.1
                        
                        console.log(count)
            
                    }
                }
                cnt++

                var d=document.querySelectorAll('#ar .emt')[0]
                d.classList.remove('emt')
                var e=document.querySelectorAll('.top-arrow')[0]
                e.classList.remove('top-arrow')
                e.innerHTML=''

                var ar=document.createElement("div"); // 1st top-arrow
                ar.classList.add("top-arrow");
                ar.innerHTML="&#8678;";
                var e=document.querySelector("#ar");
                e.appendChild(ar);


                var d=document.querySelectorAll('#c .topemp')[0]
                d.classList.remove('topemp')
                var e=document.querySelectorAll('.top-block')[0]
                e.classList.remove('top-block')
                e.innerHTML=''

                
            var y=document.createElement('div') // 1st top-block
            y.classList.add('top-block')
            y.innerHTML="Top"
            var z=document.querySelector('#c')
            z.appendChild(y) 
            
            
            var b=document.querySelector('.topval')
            b.innerHTML=cnt-1

            
            var n=document.createElement('h4')
            n.innerHTML="Division of "+q+" by" +p + " is performed and result "+sum +" is pushed."
            var y=document.getElementsByClassName('steps')[0]
            y.appendChild(n)
            
            var a=document.querySelector('.oper')
            a.innerHTML="Division"
            }


            else if(document.querySelectorAll('.box')[0].innerHTML=='*'){

                var d=document.querySelectorAll('.box')[0]  //For value in stack
                 d.classList.remove('box')
                 d.classList.add("boxk")
                /*var de=document.createElement("div");
                de.classList.add("block");
                de.innerHTML=d.innerHTML;
                var c=document.querySelector('#h');
                c.appendChild(de);*/

                var m=document.querySelectorAll('.block')[cnt-1]
                var n=document.querySelectorAll('.block')[cnt-2]

                var p=m.innerHTML
                var q=n.innerHTML

                var sum=Number(q)*Number(p)

                m.classList.remove('block')
                m.style.removeProperty('background-color')
                m.style.removeProperty('border-color')
                m.innerHTML=''
            
                n.classList.remove('block')
                n.style.removeProperty('background-color')
                n.style.removeProperty('border-color')
                n.innerHTML=''
                cnt=cnt-1;
                cnt=cnt-1;
               

                var de=document.createElement("div");
                de.classList.add("block");
                de.innerHTML=sum;
                var c=document.querySelector('#h');
                c.appendChild(de);

                var sto=setInterval(fade,50);// fade in for elements
                count=0
                function fade()
                {
                    if (count>1){
                        console.log(1)
                        clearInterval(sto);
                    }
                    else
                    {
                        
                        var s=document.getElementsByClassName("block")[cnt-1];
                    
                        s.style.backgroundColor="rgba(152,216,250,"+count+")";
                        //s.style.color="rgba(0,0,0,"+count+")";
                        s.style.borderColor="rgba(0,0,0,"+count+")";
                        count=count+0.1
                        
                        console.log(count)
            
                    }
                }
                cnt++

                var d=document.querySelectorAll('#ar .emt')[0]
                d.classList.remove('emt')
                var e=document.querySelectorAll('.top-arrow')[0]
                e.classList.remove('top-arrow')
                e.innerHTML=''

                var ar=document.createElement("div"); // 1st top-arrow
                ar.classList.add("top-arrow");
                ar.innerHTML="&#8678;";
                var e=document.querySelector("#ar");
                e.appendChild(ar);


                var d=document.querySelectorAll('#c .topemp')[0]
                d.classList.remove('topemp')
                var e=document.querySelectorAll('.top-block')[0]
                e.classList.remove('top-block')
                e.innerHTML=''

                
            var y=document.createElement('div') // 1st top-block
            y.classList.add('top-block')
            y.innerHTML="Top"
            var z=document.querySelector('#c')
            z.appendChild(y) 
            
            
            var b=document.querySelector('.topval')
            b.innerHTML=cnt-1

            
            var n=document.createElement('h4')
            n.innerHTML="Multiplication of "+q+" and " +p + " is performed and result "+sum +" is pushed."
            var y=document.getElementsByClassName('steps')[0]
            y.appendChild(n)
            
            var a=document.querySelector('.oper')
            a.innerHTML="Multiplication"
            }

    


            else{     
                var d=document.querySelectorAll('.box')[0]  //For value in stack
                 d.classList.remove('box')
                 d.classList.add("boxk")
                var de=document.createElement("div");
                de.classList.add("block");
                de.innerHTML=d.innerHTML;
                var c=document.querySelector('#h');
                c.appendChild(de);

                var sto=setInterval(fade,50);// fade in for elements
                count=0
                function fade()
                {
                    if (count>1){
                        console.log(1)
                        clearInterval(sto);
                    }
                    else
                    {
                        
                        var s=document.getElementsByClassName("block")[cnt-1];
                    
                        s.style.backgroundColor="rgba(152,216,250,"+count+")";
                        //s.style.color="rgba(0,0,0,"+count+")";
                        s.style.borderColor="rgba(0,0,0,"+count+")";
                        count=count+0.1
                        
                        console.log(count)
            
                    }
                }

                cnt++

                f=document.querySelectorAll('.top-block')[0]  // top-block
                f.classList.add("topemp")
                f.innerHTML=' '
                f.classList.remove('top-block')
    
                var y=document.createElement('div')
                y.classList.add('top-block')
                y.innerHTML="Top"
                var z=document.querySelector('#c')
                z.appendChild(y)

    
                f=document.querySelectorAll('.top-arrow')[0] //top-arrow
                f.classList.add("emt")
                f.innerHTML=' ';
                f.classList.remove('top-arrow')
        
                var ar=document.createElement("div");
                ar.classList.add("top-arrow");
                ar.innerHTML="&#8678;";
                var e=document.querySelector("#ar");
                e.appendChild(ar);

                
                var b=document.querySelector('.topval')
                b.innerHTML=cnt-1

                var n=document.createElement('h4')
                n.innerHTML=document.querySelectorAll('.block')[cnt-1].innerHTML +" is pushed into stack"
                var y=document.getElementsByClassName('steps')[0]
                y.appendChild(n)

                var c=document.querySelector('.oper')
                c.innerHTML="Push"

            }


          
            
            
        

        var t=document.getElementsByClassName("arrow")[0]; // incrementing arrow from horizontal queue
        t.classList.add("empty");
        t.innerHTML=" ";
        t.classList.remove("arrow")


        var bb=document.createElement("h3");
        bb.classList.add("arrow");
        bb.innerHTML="&darr;";
        var eb=document.querySelector("#rr");
        eb.appendChild(bb);

        var a=document.querySelector('.elements')
        a.innerHTML=cnt  
        


     

        

    }
    i++
    
})








