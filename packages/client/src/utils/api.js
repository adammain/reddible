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

// Post
export const fetchPost = id => 
  fetch(`${baseUrl}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data);

export const addPost = post => {
  const postData = {
    ...post,
    timestamp: new Date().getTime()
  };

  return fetch(`${baseUrl}/posts`, {
    method: "POST", 
    body: JSON.stringify(postData),
    headers
  }).then(res => res.json())
    .then(data => data);
}

export const updatePost = post => {
  const postData = {
    ...post,
    timestamp: new Date().getTime()
  };

  return fetch(`${baseUrl}/posts/${post.id}`, {
    method: "PUT", 
    body: JSON.stringify(postData),
    headers
  }).then(res => res.json())
    .then(data => data);
}

export const removePost = id => 
  fetch(`${baseUrl}/posts/${id}`, { 
    method: 'DELETE',
    headers 
  });

// Comments
export const fetchPostComments = id => 
  fetch(`${baseUrl}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data);

export const addNewComment = comment => {
  const commentData = {
    ...comment,
    timestamp: new Date().getTime()
  };

  return fetch(`${baseUrl}/comments`, {
    method: "POST", 
    body: JSON.stringify(commentData),
    headers
  }).then(res => res.json())
    .then(data => data);
}

export const removeComment = id => 
  fetch(`${baseUrl}/comments/${id}`, { 
    method: 'DELETE',
    headers 
  });

export const updateComment = comment => {
  const commentData = {
    ...comment,
    timestamp: new Date().getTime()
  };

  return fetch(`${baseUrl}/comments/${comment.id}`, {
    method: "PUT", 
    body: JSON.stringify(commentData),
    headers
  }).then(res => res.json())
    .then(data => data);
}


export const vote = (id, option, type) => {
  const postData = { id: id, option: option };
  const url = `${baseUrl}/${type}/${id}`;
  return fetch(url, { 
      method: "POST",
      body: JSON.stringify(postData),
      headers 
    })
    .then(res => res.json())
    .then(data => data);
}