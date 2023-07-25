/*let temp=document.querySelector('#main-header')
console.log(temp.parentNode)
temp.parentNode.style.backgroundColor="red"
let x=document.querySelector("#items")
console.log(x.childNodes)//nodelist
console.log(x.children)//HTMLCollection
console.log(x.firstChild)//gives Whitespaces
console.log(x.firstElementChild)
x.firstElementChild.style.backgroundColor="yellow"
x.firstElementChild.style.color="blue"
x.lastElementChild.style.fontStyle="italic"
x.lastElementChild.textContent="byebye"
console.log(x.nextElementSibling)
console.log(x.previousElementSibling)
let y=document.createTextNode("Item 5")
let z=document.createElement("li")
z.appendChild(y)
console.log(z)
x.appendChild(z)*/

let temp=document.querySelector("#header-title")
let temp1=document.querySelector(".container")
let x=document.createElement("div")
let y=document.createTextNode("hello")
x.appendChild(y)
temp1.insertBefore(x,temp)

let temp2=document.querySelector("#items")
let a=document.querySelector(".list-group-item")
a.setAttribute("id","first")
temp2.insertBefore(x,a)