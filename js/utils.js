export function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(1)
}

export function notANumber(value) {
  return isNaN(value) || value == ""
}
