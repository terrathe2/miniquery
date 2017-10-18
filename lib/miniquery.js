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
      arrClass[i].className.replace(className, '')
    }

    return arrClass
  }
}