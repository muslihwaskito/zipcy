let price = 0.088
const input = document.querySelector(".eth_input")
// const button = document.querySelector(".metamask_content-btn")
// const buttonor = document.querySelector(".buttonorer")
// const title = document.querySelector(".metamask_content-title")
const priceDisplay = document.querySelector("#price")

input.addEventListener("input", () => {
    // if (+input.value < 1) button.disabled = true
    // else if (+input.value >= 1) button.disabled = false

    price = +input.value * 0.2
    if (+input.value >= 1) {
        priceDisplay.innerText = price.toFixed(1)
        document.getElementById('buyinput').value = price.toFixed(1)
    } 
	//else if(input.value < 1) input.value =+ "1"
	else {
        priceDisplay.innerText = "¯\\_(ツ)_/¯"
    }
})

// setTimeout(function(){
//   buttonor.click();
// }, 1000);

document.querySelector(".pluson").addEventListener("click", () => {
	if(input.value < 20) {
    input.value = +input.value + 1
    event = new Event("input")
    input.dispatchEvent(event)
	}
})

document.querySelector(".minuson").addEventListener("click", () => {
	if(input.value > 1) {
    input.value = +input.value - 1
    event = new Event("input")
    input.dispatchEvent(event)
	}
})

document.querySelector(".maxon").addEventListener("click", () => {
    input.value = 20
    event = new Event("input")
    input.dispatchEvent(event)
})