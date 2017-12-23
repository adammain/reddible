const port = 3001
const baseUrl = process.env.REACT_APP_READABLE_API_URL || `http://localhost:${port}`


let token = localStorage.token

if (!token) {
    token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token
}

// Categories
export const fetchCategories = () =>
  fetch(`${baseUrl}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);


// Posts
export const fetchPosts = (filter) => {
  const url = filter ? `${baseUrl}/${filter}/posts` : `${baseUrl}/posts`
  return fetch(url, { headers })
    .then(res => res.json())
    .then(data => data)
}

// Comments
export const fetchPostComments = id => 
  fetch(`${apiUrl}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data);