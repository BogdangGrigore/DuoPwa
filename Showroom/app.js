//DATA

const containerScans = document.querySelector('.grid_artworks');

const art1 = {
  name: 'Der Kuss',
  artist: 'Gustav Klimt',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/4/4d/Klimt_-_Der_Kuss.jpeg',
};

const art2 = {
  name: 'The Starry Night',
  artist: 'Van Gogh',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/350px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
};

const art3 = {
  name: 'Birth of Venus',
  artist: 'Boticceli',
  image:
    'https://www.lovehappensmag.com/blog/wp-content/uploads/2020/06/birth-of-venus-face-detail-2.jpg',
};

const art4 = {
  name: 'Girl with a Pearl Earring',
  artist: 'Vermeer',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg',
};

const art5 = {
  name: 'Mona Lisa',
  artist: 'DaVinci',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
  link: './MonaLisa/monalisa.html',
};

const artworks = [art1, art2, art3, art4, art5];

console.log(artworks);

const displayArtworks = function (artworks) {
  artworks.forEach((art, i) => {
    const html = `<div class="scan">
    <div class="image"><img src="${art.image}" alt="" /></div>
    <div class="img_text"><a href="${art.link}"><p>click here for more info</p></a></div>
    <div class="name"><h1>${art.name}</h1></div>
    <div class="artist"><h2>${art.artist}</h2></div>
  </div>`;
    containerScans.insertAdjacentHTML('afterbegin', html);
  });
};

displayArtworks(artworks);
