let express = require('express')
let app = express()

function stringReverse(text) {
  var splitString = text.split("")
  var reverseArray = splitString.reverse()
  var joinArray = reverseArray.join("")
  return joinArray
}
function pigTrans(string){
  let pigSuf = []
  console.log(string)
  let strSplitter = string.split("")
  pigSuf.push(strSplitter[0])
  let letterGone = strSplitter.splice(1,strSplitter.length)
  let newPre = letterGone.join("")
  let newSuf = pigSuf.join("")+ "ay"
  let pigLatin = newPre + newSuf
  return pigLatin
}


function addParam(num1, num2) {
  let sum = num1 + num2
  return sum
}

app.get('/home',function(request, response){
  response.send("Sup Serge")
})

app.get('/add/:v1/:v2',function(request, response){
  var num1 = parseInt(request.params['v1'])
  var num2 = parseInt(request.params['v2'])
  var intSum = addParam(num1,num2)
  var newStr = intSum.toString()
  response.send(newStr)

})

app.get('/reverse/:reversedtext',function(request, response){
  var text = request.params['reversedtext']
  response.send(stringReverse(text))
})

app.get('/piglatin/:strang', function(request, response){
  // let pigSuf = []
  // let strSplitter = request.params['strang'].split("")
  // pigSuf.push(strSplitter[0])
  // let letterGone = strSplitter.splice(1,strSplitter.length)
  // let newPre = letterGone.join("")
  // let newSuf = pigSuf.join("")+ "ay"
  // let pigLatin = newPre + newSuf
   let str = request.params['strang']
   let strArr = str.split('+')
   strArr.forEach(function(ele, i){
     strArr[i] = pigTrans(ele)
   })
  response.send(strArr.join(" "))

})

app.listen(process.argv[2], function(){
  console.log("runnin dis business")

})
