const url = 'http://localhost:3000';

async function get(path = '/') {
  const data = await fetch(url + path);
  return data.json();
}

export default {
  get,
};
