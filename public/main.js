
console.log('我是main.js')

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css') 
    request.onload = () => {
        // console.log(request.response)   
        console.log('成功了');

        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
    }
    
    request.onerror = () => {
        console.log('失败了');
    }
    
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js') 
    request.onload = () => {
        // console.log(request.response)   
        console.log('成功了');

        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    
    request.onerror = () => {
        console.log('失败了');
    }
    
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log('加载成功');
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            }
            else {
                alert ('加载 html 失败')
            }
           
        }
       
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >=200 && request.status < 300) {
            // console.log(request.responseXML)
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }

    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest() 
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            console.log(request.response);
            const obj = JSON.parse(request.response)
            console.log(obj);
            youName.innerHTML = obj.name
        }
    }
    request.send()
}

let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request.response)
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n += 1
        }
        
    }
    request.send()
}



