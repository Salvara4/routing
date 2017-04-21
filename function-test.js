
function pigTrans(string){
  let pigSuf = []
  let strSplit = string.split("")
  pigSuf.push(strSplit[0])
  let letterGone = strSplit.splice(1,strSplit.length)
  let newPre = letterGone.join("")
  let newSuf = pigSuf.join("")+ "ay"
  let pigLatin = newPre + newSuf
  return pigLatin
}
