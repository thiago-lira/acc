import http from '@/services/http';

async function getOverall() {
  return http.get('/snapshot');
}

export default {
  getOverall,
};
