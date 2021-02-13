export default {};

export interface MetaData {
  date: string;
}

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

const getArticleDate = () => {
  const metas = document.getElementsByTagName('meta');
  const len = metas.length;
  let date = '';
  for (let i = 0; i < len; i += 1) {
    if (metas[i].getAttribute('name') === 'date') {
      date = metas[i].getAttribute('content');
    }
  }

  return date || new Date(Date.now()).toISOString();
};

export { getMetaByName, getTitle, getArticleDate };
