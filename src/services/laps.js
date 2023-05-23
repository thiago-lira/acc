import http from '@/services/http';

async function getOverall() {
  return http.get('/snapshot');
}

async function getLaps() {
  return http.get('/laps');
}

export default {
  getOverall,
  getLaps,
};
