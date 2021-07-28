const myPage = require(`https://webdriver.io`);
const image = $('img[src="https://webdriver.io/img/open-jsf-logo.svg"]');

describe('Website', () => {
    it('should be on place', async () => {
        await browser.url('https://webdriver.io');
       
        expect().toBeExisting();
        // if (!image.isExisting()) {
        //     throw new Error ('There is no images by this link')
        // }
    })
})

