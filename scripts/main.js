const data = {
  styles: [
    { id: 1, styleName: "Explorer" },
    { id: 2, styleName: "Cultural" },
    { id: 3, styleName: "Festival & Event" },
    { id: 4, styleName: "Hiking" },
    { id: 5, styleName: "Riding Horse" },
    { id: 6, styleName: "Dog Sled" },
    { id: 7, styleName: "Sailing" },
  ],
  dest: [
    { id: 100, destName: "Arkhangai" },
    { id: 101, destName: "Bayn-Olgii" },
    { id: 102, destName: "Bulgan" },
    { id: 103, destName: "Govi-Altai" },
    { id: 104, destName: "Dornogovi" },
    { id: 105, destName: "Dornod" },
    { id: 106, destName: "Zawkhan" },
    { id: 107, destName: "OvorKhangai" },
    { id: 108, destName: "Omnogovi" },
    { id: 109, destName: "Khovsgol" },
    { id: 110, destName: "Khentii" },
    { id: 111, destName: "Khovd" },
  ],
  operator: [
    { id: 200, operatorName: "Tour Mongolia" },
    { id: 201, operatorName: "Tenger Travel" },
    { id: 202, operatorName: "Juulchin" },
    { id: 203, operatorName: "IHC" },
    { id: 204, operatorName: "Ahlan" },
    { id: 205, operatorName: "Ayan Travel" },
    { id: 206, operatorName: "Birga Tour" },
  ],
  tours: {
    group: [
      {
        tourname: "aylal1",
        dest: [100],
        price: 1000,
        length: 3,
        score: 4.1,
        styles: [1],
        operator: 200,
      },
      {
        tourname: "aylal2",
        dest: [101],
        price: 2500,
        length: 5,
        score: 3.2,
        styles: [2, 3],
        operator: 201,
      },
    ],
    private: [
      {
        tourname: "aylal3",
        dest: [102, 103],
        price: 900,
        length: 1,
        score: 4.6,
        styles: [5, 6, 7],
        operator: 203,
      },
      {
        tourname: "aylal4",
        dest: [104, 105, 106],
        price: 9990,
        length: 6,
        score: 4.9,
        styles: [6, 7],
        operator: 203,
      },
    ],
  },
};

function ongroupchange(e){
  let filteredTours = data.filter(data.tours.group);

  console.log(filteredTours);
}