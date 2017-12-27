const port = 3001
const baseUrl = process.env.REACT_APP_READABLE_API_URL || `http://localhost:${port}`

let token = localStorage.token 
            ? localStorage.token 
            : localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token
}

/*
* COMMENTS API INTERFACE
*/
export const requestGetCategories = () =>
  fetch(`${baseUrl}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)


/*
* POST(S) API INTERFACE
*/
export const requestGetPosts = (filter) => {
  const url = filter ? `${baseUrl}/${filter}/posts` : `${baseUrl}/posts`
  return fetch(url, { headers })
    .then(res => res.json())
    .then(data => data)
}

/*
* POST API INTERFACE
*/
// GET 
export const requestGetPost = id => 
  fetch(`${baseUrl}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)

// ADD
export const requestAddPost = post => {
  const postData = {
    ...post,
    timestamp: new Date().getTime()
  }

  return fetch(`${baseUrl}/posts`, {
    method: "POST", 
    body: JSON.stringify(postData),
    headers
  }).then(res => res.json())
    .then(data => data)
}

// UPDATE
export const updatePost = post => {
  const postData = {
    ...post,
    timestamp: new Date().getTime()
  }

  return fetch(`${baseUrl}/posts/${post.id}`, {
    method: "PUT", 
    body: JSON.stringify(postData),
    headers
  }).then(res => res.json())
    .then(data => data)
}

// DELETE
export const requestDeletePost = id => 
  fetch(`${baseUrl}/posts/${id}`, { 
    method: 'DELETE',
    headers 
  })

/*
* VOTES API INTERFACE
*/
export const requestPostVote = (id, option, type) => {
  const postData = { id: id, option: option }
  const url = `${baseUrl}/${type}/${id}`
  return fetch(url, { 
      method: "POST",
      body: JSON.stringify(postData),
      headers 
    })
    .then(res => res.json())
    .then(data => data)
}

/*
* COMMENTS API INTERFACE
*/
export const requestPostComments = id => 
  fetch(`${baseUrl}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)

// ADD
export const addNewComment = comment => {
  const commentData = {
    ...comment,
    timestamp: new Date().getTime()
  }

  return fetch(`${baseUrl}/comments`, {
    method: "POST", 
    body: JSON.stringify(commentData),
    headers
  }).then(res => res.json())
    .then(data => data)
}

// UPDATE
export const requestUpdateComment = comment => {
  const commentData = {
    ...comment,
    timestamp: new Date().getTime()
  }

  return fetch(`${baseUrl}/comments/${comment.id}`, {
    method: "PUT", 
    body: JSON.stringify(commentData),
    headers
  }).then(res => res.json())
    .then(data => data)
}

// DELETE
export const requestDeleteComment = id => 
  fetch(`${baseUrl}/comments/${id}`, { 
    method: 'DELETE',
    headers 
  })