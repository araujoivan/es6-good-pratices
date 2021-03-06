export class HttpService {


    _handleErrors(res) {

        if(!res.ok) throw new Error(res.statusText)

        return res
    }

    // Using Fetch Ajax api from ES 2016
    // You cant call off the request
    get(url) {
        return fetch(url)
                .then(this._handleErrors)
                .then(res => res.json())
    }

    post(url, data) {
        return fetch(url, {
            headers: {'Content-type' : 'application/json'},
            method: 'post',
            body: JSON.stringify(data)
        })
        .then(this._handleErrors)
    }

    /*
    get(url) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest()

            //for localhost just put the context
            xhr.open('GET', url)
           
            //treating returned states 
            xhr.onreadystatechange = () => {
    
               // 0: request not started yet
               // 1: server connection established
               // 2: request received
               // 3: processing request
               // 4: request concluded, response is ready
                
                if(xhr.readyState == 4) {
                    if( xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText))
                    } else {
                        reject(xhr.responseText)
                    }
                }
            }
    
            xhr.send()
        })
    } */
   
    /*
    post(url, data) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest()

            xhr.open('POST', url, true)

            xhr.setRequestHeader('Content-type', 'application/json')
           
            xhr.onreadystatechange = () => {
    
                if(xhr.readyState == 4) {
                    if( xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText))
                    } else {
                        reject(xhr.responseText)
                    }
                }
            }
    
            xhr.send(JSON.stringify(data))
        })

    } */
}