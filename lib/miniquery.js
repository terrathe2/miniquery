window.$ = miniquery;

function miniquery(string) {
  return new Miniquery(string)
}

class Miniquery{
  constructor(string){
    this.string = string
    this._select = SweetSelector.select(string)
  }

  get select(){
    return this._select
  }

  hide(){
    let string = this.string;
    if (string[0] === '#') {
      return document.getElementById(string.substr(1)).style.display = 'none'
    } else if (string[0] === '.') {
      let arrClass = document.getElementsByClassName(string.substr(1))

      for (let i = 0; i < arrClass.length; i++) {
        arrClass[i].style.display = 'none'
      }

      return arrClass
    } else {
      let arrTag = document.getElementsByTagName(string.substr(0))

      for (let i = 0; i < arrTag.length; i++) {
        arrTag[0].style.display = 'none'
      }

      return arrTag
    }
  }

  show(){
    let string = this.string
    if (string[0] === '#') {
      return document.getElementById(string.substr(1)).style.display = 'block'
    } else if (string[0] === '.') {
      let arrClass = document.getElementsByClassName(string.substr(1))

      for (let i = 0; i < arrClass.length; i++) {
        arrClass[i].style.display = 'block'
      }

      return arrClass
    } else {
      let arrTag = document.getElementsByTagName(string.substr(0))

      for (let i = 0; i < arrTag.length; i++) {
        arrTag[0].style.display = 'block'
      }

      return arrTag
    }
  }

  addClass(className){
    let string = this.string
    let arrClass = document.getElementsByClassName(string.substr(1))

    for (let i = 0; i < arrClass.length; i++) {
      arrClass[i].className += " " + className
    }

    return arrClass
  }

  removeClass(className){
    let string = this.string
    let arrClass = document.getElementsByClassName(string.substr(1))

    for (let i = 0; i < arrClass.length; i++) {
      arrClass[i].className = arrClass[i].className.replace(className, '').trim()
    }

    return arrClass
  }

  on(events, eventFunction){
    let string = this.string
    if (string[0] === '#') {
      return document.getElementById(string.substr(1)).addEventListener(events, eventFunction)
    } else if (string[0] === '.') {
      let arrClass = document.getElementsByClassName(string.substr(1))

      for (let i = 0; i < arrClass.length; i++) {
        arrClass[i].addEventListener(events, eventFunction)
      }

      return this
    } else {
      let arrTag = document.getElementsByTagName(string.substr(1))

      for (let i = 0; i < arrTag.length; i++) {
        arrTag = arrTag[i].addEventListener(events, eventFunction)
      }

      return this
    }
  }

  trigger(events){
    let string = this.string
    let arr = document.getElementsByClassName(string.substr(1))
    let evt = new Event(events);
    for(let i = 0; i < arr.length; i++){
        arr[i].dispatchEvent(evt)
    }

    return this
  }

  static ajax(object){
    let request = new XMLHttpRequest()
    request.addEventListener('load', object.success)
    request.addEventListener('error', object.fail)
    request.open(object.type, object.url)
    request.send()
  }
}

class SweetSelector{
  static select(string){
    if (string[0] === '#') {
      return document.getElementById(string.substr(1))
    } else if (string[0] === '.') {
      return document.getElementsByClassName(string.substr(1))
    } else {
      return document.getElementsByTagName(string.substr(0))
    }
  }
}

class DOM{
  static hide(string){
    if (string[0] === '#') {
      return document.getElementById(string.substr(1)).style.display = 'none'
    } else if (string[0] === '.') {
      let arrClass = document.getElementsByClassName(string.substr(1))

      for (let i = 0; i < arrClass.length; i++) {
        arrClass[i].style.display = 'none'
      }

      return arrClass
    } else {
      let arrTag = document.getElementsByTagName(string.substr(0))

      for (let i = 0; i < arrTag.length; i++) {
        arrTag[0].style.display = 'none'
      }

      return arrTag
    }
  }

  static show(string){
    if (string[0] === '#') {
      return document.getElementById(string.substr(1)).style.display = 'block'
    } else if (string[0] === '.') {
      let arrClass = document.getElementsByClassName(string.substr(1))

      for (let i = 0; i < arrClass.length; i++) {
        arrClass[i].style.display = 'block'
      }

      return arrClass
    } else {
      let arrTag = document.getElementsByTagName(string.substr(0))

      for (let i = 0; i < arrTag.length; i++) {
        arrTag[0].style.display = 'block'
      }

      return arrTag
    }
  }

  static addClass(string, className) {
    let arrClass = document.getElementsByClassName(string.substr(1))

    for (let i = 0; i < arrClass.length; i++) {
      arrClass[i].className += " " + className
    }

    return arrClass
  }

  static removeClass(string, className) {
    let arrClass = document.getElementsByClassName(string.substr(1))

    for (let i = 0; i < arrClass.length; i++) {
      arrClass[i].className = arrClass[i].className.replace(className, '').trim()
    }

    return arrClass
  }
}

class EventDispatcher{
  static on(string, events, eventFunction){
    if (string[0] === '#') {
      return document.getElementById(string.substr(1)).addEventListener(events, eventFunction)
    } else if (string[0] === '.') {
      let arrClass = document.getElementsByClassName(string.substr(1))

      for (let i = 0; i < arrClass.length; i++) {
        arrClass[i].addEventListener(events, eventFunction)
      }

    } else {
      let arrTag = document.getElementsByTagName(string.substr(1))

      for (let i = 0; i < arrTag.length; i++) {
        arrTag[i].addEventListener(events, eventFunction)
      }

    }
  }
}

class AjaxWrapper{
  static request(object){
    let request = new XMLHttpRequest()
    request.addEventListener('load', object.success)
    request.addEventListener('error', object.fail)
    request.open(object.type, object.url)
    request.send()
  }
}
