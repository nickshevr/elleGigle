const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;
const generator = require('./utils/generator');

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

const userObect = generator.createUserObj();

driver.get('https://accounts.google.com/SignUp');
driver.findElement(By.id('FirstName')).sendKeys(userObect.firstName);
driver.findElement(By.id('LastName')).sendKeys(userObect.lastName);
driver.findElement(By.id('GmailAddress')).sendKeys(userObect.email.split('@')[0]);
driver.findElement(By.id('Passwd')).sendKeys(userObect.password);
driver.findElement(By.id('PasswdAgain')).sendKeys(userObect.password);
driver.wait(until.titleIs('webdriver - Google Search'), 1000000);