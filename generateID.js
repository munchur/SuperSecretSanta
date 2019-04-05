module.exports = {
  //temporary algorithm for generating random id
  genID (){
    var min = 1
    var max = 9999999999
    return Math.floor(Math.random() * (max - min)) + min
  }
}
