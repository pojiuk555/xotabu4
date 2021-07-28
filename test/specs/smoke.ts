
describe('My Sites', () => {
    it('Check Titles Lodash',  async () => {
        await browser.url('https://lodash.com/');
        expect(await browser.getTitle()).toEqual('Lodash')
    })

    it('Check Titles Youtube', async () => {
        await browser.url('https://youtube.com/');
        expect(await browser.getTitle()).toEqual('YouTube')
    })

    // it('Check image', async () => {
    //     await browser.url('https://webdriver.io/');
    //     let image = $('img[src="https://webdriver.io/img/open-jsf-logo.svg"]')
    //     // if (!(await image).isExisting) {
    //     //     throw new Error('no Image on place')
    //     // }
        

   // })
})

