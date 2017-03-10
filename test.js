const webdriver = require('selenium-webdriver');
const proxy = require('selenium-webdriver/proxy');
const By = webdriver.By;
const until = webdriver.until;
const generator = require('./utils/generator');
const getProxy = require('./utils/https-proxy').getProxyList;

getProxy().then(res => {
    const driver = new webdriver.Builder()
        .forBrowser('chrome')
        //.setProxy(proxy.manual({https: `${res[23].ip}:${res[23].port}`}))
        .build();

    const userObect = generator.createUserObj();

    driver.get('https://accounts.google.com/SignUp');
    driver.manage().window().maximize();
    driver.sleep(4000);
    driver.findElement(By.id('FirstName')).sendKeys(userObect.firstName);
    driver.findElement(By.id('LastName')).sendKeys(userObect.lastName);
    driver.findElement(By.id('GmailAddress')).sendKeys(userObect.email.split('@')[0]);
    driver.findElement(By.id('Passwd')).sendKeys(userObect.password);
    driver.findElement(By.id('PasswdAgain')).sendKeys(userObect.password);
    driver.findElement(By.xpath(`//*[@id="BirthMonth"]/div[1]`)).sendKeys(userObect.month);
    driver.findElement(By.id('BirthDay')).sendKeys(userObect.day);
    driver.findElement(By.id('BirthYear')).sendKeys(userObect.year);
    driver.findElement(By.xpath(`//*[@id="Gender"]/div[1]`)).sendKeys(userObect.gender.slice(0, 1)); // f -female, m - male
    driver.sleep(2000);
    driver.findElement(By.xpath('//*[@id="submitbutton"]')).click();
    driver.sleep(1000);
    driver.findElement(By.xpath('//*[@id="tos-scroll-button"]')).click();
    driver.sleep(1000);
    driver.findElement(By.xpath('//*[@id="iagreebutton"]')).click();
    driver.sleep(5000);

    driver.getTitle().then(function(title) {
        driver.sleep(5000);
        console.log(title);
    });

    driver.quit();
});