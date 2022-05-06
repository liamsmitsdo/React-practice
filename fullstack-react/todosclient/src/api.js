const APIURL = "/api/todos/";

export async function getTodos() {
    return fetch(APIURL)
        .then(res => {
            if (!res.ok) {
                if (res.status >= 400 && res.status < 500) {
                    return res.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                } else {
                    let err = {errorMessage: "Please try again later, server is unresponsive"};
                    throw err;
                }
            }
            return res.json()
        })
}

export async function addTodo(val) {
    return fetch(APIURL, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({name: val})
    })
    .then(res => {
        if (!res.ok) {
            if (res.status >= 400 && res.status < 500) {
                return res.json().them(data => {
                    let err = {errorMessage: data.message};
                    throw err;
                })
            } else {
                let err = {errorMessage: "Please try again later, server is unresponsive"};
                throw err;
            }
        }
        return res.json()
    })
}

export async function deleteTodo(id) {
    const deleteURL = APIURL + id;
    return fetch(deleteURL, {method: 'DELETE'})
        .then(res => {
            if (!res.ok) {
                if (res.status >= 400 && res.status < 500) {
                    return res.json().them(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                } else {
                    let err = {errorMessage: "Please try again later, server is unresponsive"};
                    throw err;
                }
            }
        })
}

export async function toggleTodo(todo) {
    const updateURL = APIURL + todo._id;
   return fetch(updateURL, {
     method: 'put',
     headers: new Headers({
       'Content-Type': 'application/json',
     }),
     body: JSON.stringify({completed: !todo.completed})
   })
    .then(resp => {
      if(!resp.ok) {
        if(resp.status >=400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Please try again later, server is not responding'};
          throw err;
        }
      }
      return resp.json();
   })
}
