const { faker } = require('@faker-js/faker')


module.exports = () => {

     let data = { products: [] }

     for (let i = 0; i < 5; i++) {
          let num = i + 1
          data.products.push({
               id: num,
               itemName: faker.commerce.productName(),
               price: faker.datatype.number({ min: 10, max: 200, precision: 1 }),
               madeInMontana: faker.datatype.boolean(),
               description: faker.commerce.productDescription(),
               imageUrl: faker.image.business(640, 480, true)
          })
     }

     for (let i = 0; i < data.products.length; i++) {
          const e = data.products[i];
     }

     return data
}