let express = require('express')
let app = express()

function stringReverse(text) {
  var splitString = text.split("")
  var reverseArray = splitString.reverse()
  var joinArray = reverseArray.join("")
  return joinArray
}

function addParam(num1, num2) {
  let newNum1 = parseInt(num1)
  let newNum2 = parseInt(num2)
  let sum = newNum1 + newNum2
  return sum
}

app.get('/home',function(request, response){
  response.send("Sup Serge")
})

app.get('/add/:v1/:v2',function(request, response){
  var num1 = request.params['v1']
  var num2 = request.params['v2']
  response.send(addParam(num1,num2))
})

app.get('/reverse/:reversedtext',function(request, response){
  var text = request.params['reversedtext']
  response.send(stringReverse(text))
})

app.listen(3000, function(){
  console.log("runnin dis business")

})
