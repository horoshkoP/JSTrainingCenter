let addItemBtn = document.getElementById('add-item')
let removeItemBtn = document.getElementById('remove-item')
let result = document.getElementById('queue')
let clearLocal = document.getElementById('reset-local')



let sortedKeys = () =>{
    let resArr = []
    for (let key in localStorage){
        
        if(!isNaN(key)){
            
            resArr.push(parseInt(key))
        }
       
    }
    let res = resArr.sort((a,b) => a-b)
    
    console.log(res)
    
    return res
}



let initCurrRes = () =>{
    
    if(localStorage.length!==0){
        
        let keyArr = sortedKeys()
        console.log(keyArr)
        for(let key in keyArr){
                console.log(keyArr[key])
                console.log(localStorage.getItem(keyArr[key].toString()))
                if(localStorage.getItem(keyArr[key]) !== null){
                    result.innerHTML+=`<li id ='${keyArr[key]}'>${localStorage.getItem(keyArr[key].toString())}</li>`
                }
            
        }
        let retId = keyArr[keyArr.length-1]
        console.log(retId)
        return retId + 1
    }
    return 0   
}



let id = initCurrRes()



addItemBtn.addEventListener('click', addItem = () =>{
    let userInput = document.getElementById('input-value').value
    if (userInput!=='' && localStorage.length<20){
        localStorage.setItem(id.toString(), userInput)
        console.log(localStorage)
        result.innerHTML+=`<li id = '${id}'>${localStorage.getItem(id.toString())}</li>`
        
        id++   
    } else if(localStorage.length>19){
        result.removeChild(result.firstChild)
        localStorage.setItem(id.toString(), userInput)
        localStorage.removeItem((localStorage.length-id).toString())
        console.log(localStorage)
        result.innerHTML+=`<li id = '${id}'>${localStorage.getItem(id.toString())}</li>`
           
    }
    else{
        alert('user input is empty!')
    }
    document.getElementById('input-value').value = '' 
})

removeItemBtn.addEventListener('click', removeItem = () =>{
    
       const arr = sortedKeys()
       if(arr.length===0){
        alert('there is nothing to remove!')
       }
       for (const key in arr){
           if(localStorage.getItem(arr[key].toString())){
               result.removeChild(result.firstChild)
               localStorage.removeItem(arr[key].toString())
               break
           }
       }

         
})



clearLocal.addEventListener('click', removeLocal = () =>{
    localStorage.clear()
})

