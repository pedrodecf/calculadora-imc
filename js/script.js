import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notANumber } from "./utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = (event) => {
  event.preventDefault()
  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  Modal.message.innerText = `Seu IMC é de ${result}`
  Modal.open()
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
