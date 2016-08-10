//Aieu Jallow => AJ
function getInitials(word){
  return word.split(' ')
  .map(word => `${word.charAt(0).toUpperCase()}.`)
  .join('')
}

var initials = getInitials("for your information")
console.log(initials)
