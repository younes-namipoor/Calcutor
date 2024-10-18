const myH = document.querySelector("h1")
const mydiv = document.querySelectorAll("div")
const spn = document.querySelector("section>span")
const equal = document.querySelector("section>i")

let num1 = ''

let num2 = ''
mydiv.forEach((val) => {

    val.addEventListener('click', function () {


        let x = val.getAttribute('data-h')
        console.log(x);


        num1 += x

        myH.innerText = num1




    })








})


equal.addEventListener('click', () => {


    myH.innerHTML = eval(num1)

    const a = eval(num1)


    num1 = ''


})


spn.addEventListener('click', function () {

    num1 = ''
    myH.innerText = ''

})