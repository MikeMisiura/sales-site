const { faker } = require('@faker-js/faker')


module.exports = () => {

     let data = { products: [] }

     for (let i = 0; i < 5; i++) {
          let num = i + 1
          data.products.push({
               id: num,
               itemName: faker.commerce.productName(),
               price: faker.commerce.price(10, 200, 2, '$'),
               madeInMontana: faker.datatype.boolean(),
               description: faker.commerce.productDescription(),
               imageUrl: faker.internet.avatar()
          })
     }

     for (let i = 0; i < data.products.length; i++) {
          const e = data.products[i];
     }

     return data
}