getCSS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("GET", "/style.css")//request.status=1
  request.onreadystatechange = () => {
    console.log(request.readyState)

    if (request.status >= 200 && request.status < 300) {
      const style = document.createElement("style")
      style.innerHTML = request.response
      document.head.append(style)
    } else console.log("失败了")
  }

  request.send()//request.status=2
}

getJS.onclick = () => {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "/main1.js")
  xhr.onload = () => {
    console.log(xhr.response)

    const script = document.createElement("script")
    script.innerHTML = xhr.response
    document.body.appendChild(script)
  }
  xhr.onerror = () => {

  }
  xhr.send()
}

getHTML.onclick = () => {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "/main.html")
  xhr.onreadystatechange = () => {
    console.log(xhr.readyState)

    const div = document.createElement("div")
    div.innerHTML = xhr.response
    document.body.appendChild(div)
  }

  xhr.send()
}

getXML.onclick = () => {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "/xml1.xml")
  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      const dom = xhr.responseXML
      const text = dom.getElementsByTagName("warning")[0].textContent
      console.log(text)
    }
  }

  xhr.send()
}

getJSON.onclick = () => {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "/json1.json")
  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      let json = JSON.parse(xhr.response)
      console.log(json)
      myName.textContent = json.name
    }
  }
  xhr.send()
}

let n=1
getNextpage.onclick = () => {
  const xhr = new XMLHttpRequest()
  console.log(1)
  xhr.open("GET", `/page${n+1}`)
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const array = JSON.parse(xhr.response)
array.forEach(item=>{
  const li = document.createElement('li')
  li.textContent = item.id
  //直接xxx.appendchild也可以
  document.querySelector('#xxx').appendChild(li)
})
      n+=1
    }

  }


xhr.send()
}