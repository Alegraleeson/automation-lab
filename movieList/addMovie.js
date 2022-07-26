const {By} = require('selenium-webdriver')

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Pokemon: The Power of We')

    await driver.findElement(By.xpath('//button')).click() 

    const movie = await driver.findElement(By.xpath('//span'))

    const displayed = movie.isDisplayed() 

    expect(displayed).toBeTruthy() 

}

const crossOffMovie = async (driver) => {

    await driver.findElement(By.xpath('//button'))

    await driver.findElement(By.xpath('//span')).click()

    const checked = await driver.findElement(By.xpath('(//span[contains(@class, "checked”)])'))

    const displayed = checked.isDisplayed() 

    expect(displayed).toBeTruthy() 
}

const deleteMovie = async (driver) => {

    // await driver.findElement(By.xpath('//input')).sendKeys('Pokemon: The First Movie')

    await driver.findElement(By.xpath('(//button)[2]')).click()

    // await driver.findElement(By.xpath('//button'))

    // await driver.findElement(By.xpath('//*[text()="x"]')).click()
}

const messageDisplayed = 

module.exports = {
    addMovie,
    crossOffMovie,
    deleteMovie
}
