import cuid from 'cuid';

export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export const extendWithId = (list = []) => {
  return list.map(listItem => {
    return { ...listItem, _id: cuid() };
  })
}