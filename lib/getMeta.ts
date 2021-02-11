export default {};

const getMetaByName = (metaName) => {
  const metas = document.getElementsByTagName('meta');

  for (let i = 0; i < metas.length; i += 1) {
    if (metas[i].getAttribute('name') === metaName) {
      return metas[i].getAttribute('content');
    }
  }

  return '';
};

const getTitle = () => {
  return document.getElementsByTagName('title')[0].innerText;
};

export { getMetaByName, getTitle };
