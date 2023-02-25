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

let p= async new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("21 deg")
    },2000)
    
})