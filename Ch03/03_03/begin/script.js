const rawData = '[{"id":"259","name":"Raspberry Mineral Water","description":"An 8-ounce serving of our refreshing H+ Sport raspberry mineral water fulfills a day\'s nutritional requirements for over 12 vitamins and minerals.","image_title":"mineral-water-raspberry_600px","image":"https://hplussport.com/wp-content/uploads/2015/12/mineral-water-raspberry_600px.png"},{"id":"429","name":"Strawberry Mineral Water","description":"An 8-ounce serving of our refreshing H+ Sport strawberry mineral water fulfills a day\'s nutritional requirements for over 12 vitamins and minerals.","image_title":"mineral-water-strawberry_600px","image":"https://hplussport.com/wp-content/uploads/2015/12/mineral-water-strawberry_600px.png"},{"id":"436","name":"Blueberry Mineral Water","description":"An 8-ounce serving of our refreshing H+ Sport blueberry mineral water fulfills a day\'s nutritional requirements for over 12 vitamins and minerals.","image_title":"mineral-water-blueberry_600px","image":"https://hplussport.com/wp-content/uploads/2015/12/minearl-water-blueberry_600px.png"},{"id":"437","name":"Lemon-Lime Mineral Water","description":"An 8-ounce serving of our refreshing H+ Sport lemon-lime\u00c2\u00a0mineral water fulfills a day\'s nutritional requirements for over 12 vitamins and minerals","image_title":"mineral-water-lemon-lime_600px","image":"https://hplussport.com/wp-content/uploads/2015/12/mineral-water-lemon-lime_600px.png"},{"id":"438","name":"Peach Mineral Water","description":"An 8-ounce serving of our refreshing H+ Sport peach mineral water \u00c2\u00a0fulfills a day\'s nutritional requirements for over 12 vitamins and minerals.","image_title":"mineral-water-peach_600px","image":"https://hplussport.com/wp-content/uploads/2015/12/mineral-water-peach_600px.png"},{"id":"439","name":"Orange Mineral Water","description":"An 8-ounce serving of refreshing H+ Sport orange mineral water fulfills a day\'s nutritional requirements for over 12 vitamins and minerals.","image_title":"mineral-water-orange_600px","image":"https://hplussport.com/wp-content/uploads/2015/12/mineral-water-orange_600px.png"}]';

// Add statement below to parse JSON data
// and store it as a variable called 'data'


const container = document.querySelector('.container');

const template = (item) => `
  <div class="item">
    <img src="${item.image}" alt="${item.name}" width="324" height="324">
    <h2>${item.name}</h2>
  </div>
`;

const populate = (arr) => {
  let content = "";
  arr.forEach((item) => {
    content += template(item);
  });
  container.innerHTML += content;
};

document.addEventListener('DOMContentLoaded', () => {
  populate(data);
});