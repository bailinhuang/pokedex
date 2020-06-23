export const getData = (url) => {
  return fetch(url, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error));
};