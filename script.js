function toggleMode(){
  const hmtl = document.documentElement
  hmtl.classList.toggle('ligth')

  const img = document.querySelector('#profile img')

  if(hmtl.classList.contains('ligth')){
    img.setAttribute('src', 'assets/avatar-light.png')
  } else {
       img.setAttribute("src", "assets/avatar.png")
    }


  }