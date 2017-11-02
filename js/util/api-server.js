const Url = {
  DATA: `https://es.dump.academy/pixel-hunter/questions`,
  STATISTICS: `https://es.dump.academy/pixel-hunter/stats/`
};

class APIServer {


  static getData() {
    return fetch(Url.DATA).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Ошибка! ${response.status}`);
      }
    });
  }

  static getImagesURL(data) {
    return data.reduce((acc, it) => {
      return acc.concat(it.answers.map((answer) => answer.image.url));
    }, []);
  }

  static loadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.addEventListener(`load`, () => {
        return resolve(img);
      });
      img.addEventListener(`error`, () => {
        return reject(`Ошибка загрузки`);
      });
      img.src = url;
    });
  }

}

export default APIServer;

