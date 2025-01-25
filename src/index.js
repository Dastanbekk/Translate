
const run =document.getElementById("run")
const translation_input =document.getElementById("translation_input")
// console.log(select_first);

run.addEventListener("click",(e)=>{
    e.preventDefault()
    const select_first =document.getElementById("select_first").value
    const select_second =document.getElementById("select_second").value
    const first_input =document.getElementById("first_input").value
    const BASE_URL = `https://lingva.ml/api/v1/${select_first}/${select_second}/${first_input}`
    fetch(BASE_URL)
    .then((res)=>res.json())
    .then((data)=>{
        translation_input.textContent = data.translation
        
        
    })
    .catch((err)=>console.log(err,"error"))
})









// fetch(BASE_URL)
// .then((res)=>res.json())
// .then((data)=>
//     {
//         let dataArr = data
//         dataArr.forEach((element)=>{
//             const div = document.createElement("div")
//             div.classList.add("relative")
//             div.classList.add("rounded-2xl")
//             div.classList.add("overflow-hidden")
//             div.classList.add("cursor-pointer")
//             div.innerHTML = `
//                 <img class="flag_image  h-[150px]  w-full" src="${element.flags.png}"/>
//             `
//             images.append(div)
            
//             div.addEventListener("click",()=>{

//                    images.innerHTML = ''
//                    const div = document.createElement("div")
//                    div.classList.add("clickImg")
//                    div.innerHTML=`
                   
//                    <p class=" text-[28px] font-bold">Flag of the <span class=" text-[dodgerblue]">${element.name.official}</span></p>
//                    <img src="${element.flags.png}" />
//                    <p class="text-center text-[18px]">${element.flags.alt} </p>
//                    `
//                    clickImages.append(div)

//             })

//             div.addEventListener("mousemove", () => {
//                 div.innerHTML=`
//                 <img class="flag_image h-[150px]  w-full" src="${element.flags.png}"/>
//                 <p class="flag_text flex justify-center w-full bg-[#00000061] text-white  absolute bottom-0">Flag of the ${element.name.official.slice(0,10)}</p>
//                 `
//             });
//             div.addEventListener("mouseout",()=>{
//                 div.innerHTML=`
//                     <img class="flag_image h-[150px]    w-full" src="${element.flags.png}"/>
//                     <p class="flag_text hidden  ease-in-out duration-[3s]">Flag of the ${element.name.official.slice(0,10)}</p>
//                 `
//             })
            


//             searchForm.addEventListener("submit",(e)=>{
//                 e.preventDefault()
//                 const search = document.getElementById("search").value
//                 let commons = element.name.common
//                 if(search=== commons){
//                     images.innerHTML = ''
//                     const div = document.createElement("div")
//                     div.classList.add("clickImg")
//                     div.innerHTML=`
                    
//                     <p class=" text-[28px] font-bold">Flag of the <span class=" text-[dodgerblue]">${element.name.official}</span></p>
//                     <img src="${element.flags.png}" />
//                     <p class="text-center text-[18px] w-[60%]">${element.flags.alt} </p>
//                     `
//                     clickImages.append(div)
//                    images.innerHTML = ''
//                 }
//             })
//         })
// }
// )
// .catch((err)=>console.log("error",err))
