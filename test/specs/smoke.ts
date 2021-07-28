
describe('My Sites', () => {
    it('Check Titles Lodash',  async () => {
        await browser.url('https://lodash.com/');
        expect(await browser.getTitle()).toEqual('Lodash')
    })

    it('Check Titles Youtube', async () => {
        await browser.url('https://youtube.com/');
        expect(await browser.getTitle()).toEqual('YouTube')
    })
})

