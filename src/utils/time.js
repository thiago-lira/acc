const getTime = (val) => {
  const date = new Date(0, 0, 0, 0, 0, 0, 60 * val);

  return date
    .toTimeString()
    .substring(0, 8);
};

export default {
  getTime,
};
