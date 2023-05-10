// make async function
// let getdate=()=>{
//     return new Date().getHours()
//     +":"
//     + new Date().getMinutes()
//     +":"
//     + new Date().getSeconds()
// }

// //learning async function
// async function whe(){
//     let mumbai=new Promise((reslove)=>{
//         setTimeout(() => {
//             reslove("21 deg")
//         }, 2000);
//     })
//     let delhi=new Promise((reslove)=>{
//         setTimeout(() => {
//             reslove("27 deg")
//         }, 5000);
//     })
//     console.log(`${getdate()} fethching mumbai whether......`)
//     let mumw= await mumbai
    
//     console.log(`${getdate()} mumbai whether is ${mumw}`)
//     console.log("fethching delhi whether......")
//     let delw=await delhi
//     console.log(`${getdate()} delhi whether is ${delw}`)

// }
// console.log("feth data from whether department")
// whe()

let a=[12,45,45,78,41]
let b=a.reduce((cur,sec)=>{
    return cur+sec
})
// console.log(b)

let arr=["red","yellow","green","maroon"]
let [first,second]=arr
// console.log(first)

//>Write a function which returns the maximum of two number
function max_num(a,b){
    return Math.max(a,b)
}
// console.log(max_num(14,45))

//Write a function which checks given width and height, returns true (landscape) if width is greater than height and vice versa<
function land(width,height){
    if(width>height){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
land(100,200)