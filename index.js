const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let pwd1 = document.querySelector('.first')
let pwd2 = document.querySelector('.second')
let generateBtn = document.querySelector('.btn-generate')
let pwdLength = 15;
let pwd = ""

function getRandomChar(){
    let randomNumber = Math.floor(Math.random() * characters.length)
    let randomChar = characters[randomNumber]
    return randomChar
}

function check(){
    
    let ak = characters.indexOf('k')
    return ak
}
function randomPwd(){
    for(i=0; i< pwdLength; i++){
        pwd += getRandomChar() 
    }
    return pwd 
}


function pwdGenerator(){
pwd1.textContent = randomPwd() 
pwd2.textContent = randomPwd()

}

 generateBtn.addEventListener('click', pwdGenerator)
 console.log(check())