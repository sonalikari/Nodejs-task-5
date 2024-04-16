const { scrapeFlipkartMobiles, scrapeFlipkartMobilesFull } = require('./controllers/flipkartController'); 
const { scrapeSnapdealTShirts } = require('./controllers/snapdealController');

describe('API Test Suite', () => {
  describe('scrapeFlipkartMobiles', () => {
    test('should return an array of mobile products', async () => {
      jest.setTimeout(60000); 

      const products = await scrapeFlipkartMobiles();

      expect(products).toBeTruthy();
      products.forEach(product => {
        expect(product).toHaveProperty('title');
        expect(product).toHaveProperty('price');
        expect(product).toHaveProperty('rating');
      });
    });
  });

  describe('scrapeSnapdealTShirts', () => {
    test('should return an array of t-shirts', async () => {
      jest.setTimeout(60000); 

      const products = await scrapeSnapdealTShirts();

      expect(products).toBeTruthy();
      products.forEach(product => {
        expect(product).toHaveProperty('title');
        expect(product).toHaveProperty('price');
        expect(product).toHaveProperty('rating');
      });
    });
  });

  describe('scrapeFlipkartMobilesFull', () => {
    test('should return an array of detailed mobile products', async () => {
      jest.setTimeout(180000); 

      const products = await scrapeFlipkartMobilesFull();

      expect(products).toBeTruthy();
      products.forEach(product => {
        expect(product).toHaveProperty('title');
        expect(product).toHaveProperty('price');
        expect(product).toHaveProperty('rating');
        expect(product).toHaveProperty('url');
      });
    });
  });
});
