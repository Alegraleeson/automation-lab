const { Builder, Capabilities } = require("selenium-webdriver")

const {addMovie, crossOffMovie, deleteMovie} = require('../addMovie.js')


require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('add a movie', async () => {
    await addMovie(driver)

    await driver.sleep(3000)
})

test('cross off movie', async () => {
    await crossOffMovie(driver)

    await driver.sleep(3000)
})

test('delete movie', async () => {
    await deleteMovie(driver)

    await driver.sleep(3000)
})

