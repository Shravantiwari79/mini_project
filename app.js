// // let links=document.querySelectorAll(".box a");
// // for(let i=0;i<links.length;i++){
// //     links[i].style.color="green";
// // }
// let btn=document.querySelectorAll("button");
// console.dir(btn);

// // onclick Events
// // btn.onclick=function click(){
// //     console.log("button was clicked.");
// //     // let a=prompt("enter a number");
// //     // let b=prompt("Enter second number.");
// //     // console.log(a+b);
// // }

// // for(btns of btn){
// //     btns.onclick=sayhello;
// // }
// // onmouseenter Event
// // for(btns of btn){
// // btns.onmouseenter=function(){
// //     console.log("Clicked......");
// // }
// // }

// //Event listener

// for(btns of btn){
//     btns.addEventlistener("click",function (){
//         console.log("hi");
//     } );
//     btns.addEventlistener("click", function (){
//         alert("Hello");
//     });
// }
// let btns= document.querySelectorAll("button");
// console.dir(btns);
// btns.addEventListener("click",clicked);
// function clicked(){
//     console.log("clicked...");
// };
// let pa = document.querySelectorAll("p");
// console.dir(pa);
// // for(p of pa){
// pa.addEventListener("click",function(){
//     console.log("clicked...");
// });

// Random color Generator
// let bt=document.querySelector("button");
// let h2=document.querySelector("h2");

// bt.addEventListener("click",function(){
//     h2.innerText=generateColor();
//     let d=document.querySelector(".mydiv");
//     //let randomColor = ();
//     d.style.backgroundColor=generateColor();
//     console.log("updated.")
// });
// function generateColor(){
//     let r=Math.floor(Math.random()*255);
//     let g=Math.floor(Math.random()*255);
//     let b=Math.floor(Math.random()*255);
//     let color=`RGB(${r},${g},${b})`;
//     return color;
// }


//Practice Question
// let bt=document.createElement("button");
// bt.innerText="click me";
// document.body.appendChild(bt);
// bt.addEventListener("click",function(){
//     console.log("Clicked..");
// });

// Extracting from data
// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let user=document.querySelector("#user");
//     let pass=document.querySelector("#pass");
//     alert(`Hi,${user.value},your password set to ${pass.value}`);
    
// });

// function one(){
//     return 1;
// }
// function two(){
//     return one()+one();
// }
// function three(){
//     let ans=two()+one();
//     console.log(ans);
// }
// three();

//JSON to js object
// let json='{"fact":"Abraham Lincoln loved cats. He had four of them while he lived in the White House.","length":82}';
// let newjson=JSON.parse(json);
// console.log(newjson.fact);

//JS object to JSON
// let msa={
//     name:"Shravan", 
//     roll:32
// };
// let mss=JSON.stringify(msa);
// console.log(mss);

//activity for cat fact
// let btn=document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//     console.log("Clicked..");
//     let res=await getfact();
//     let r=document.querySelector("#result");
//     r.innerText=res;
// });
// let url="https://catfact.ninja/fact";
// async function getfact(){
//      try{
//         let res=await axios.get(url);
//         console.log(res.data.fact);
//         return res.data.fact;

//     }catch(e){
//         console.log("Error -",e);
//         return "NO FACT FOUND";
//     }
// }


//Second activity for Generating random picture of Dogs
let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    console.log("Clicked..");
    let res=await getImage();

    let r=document.querySelector("#result");
    r.setAttribute("src",res);
});
let url="https://dog.ceo/api/breeds/image/random";
async function getImage(){
     try{
        let res=await axios.get(url);
        console.log(res.data.message);
        return res.data.message;

    }catch(e){
        console.log("Error -",e);
        return "NO FACT FOUND";
    }
}