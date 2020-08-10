
getCSS.onclick =()=>{
  const request  = new XMLHttpRequest()
  request.open('GET','/style.css')
  request.onload =()=>{
    console.log(request.response)

    const style = document.createElement('style')
    style.innerHTML = request.response
    document.head.append(style)
  }
  request.onerror=()=>{
    console.log('失败了')
  }
  request.send()
}

getJS.onclick =()=>{
  const xhr = new XMLHttpRequest()
  xhr.open('GET','/main1.js')
    xhr.onload =()=>{
      console.log(xhr.response)

      const script =  document.createElement('script')
      script.innerHTML = xhr.response
      document.body.appendChild(script)

    }
    xhr.onerror =()=>{

    }
    xhr.send()
}

getHTML.onclick =()=>{
  const xhr = new XMLHttpRequest()
  xhr.open('GET','/main.html')
  xhr.onload =()=>{
    console.log(xhr.response)

    const div = document.createElement('div')
    div.innerHTML = xhr.response
    document.body.appendChild(div)
  }
  xhr.onerror =()=>{

  }
  xhr.send()
}