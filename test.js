const webdriver = require('selenium-webdriver');
const proxy = require('selenium-webdriver/proxy');
const By = webdriver.By;
const until = webdriver.until;
const generator = require('./utils/generator');

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    //.setProxy(proxy.manual({https: "185.92.221.187:3128"}))
    .build();

const userObect = generator.createUserObj();

driver.get('https://accounts.google.com/SignUp');
driver.findElement(By.id('FirstName')).sendKeys(userObect.firstName);
driver.findElement(By.id('LastName')).sendKeys(userObect.lastName);
driver.findElement(By.id('GmailAddress')).sendKeys(userObect.email.split('@')[0]);
driver.findElement(By.id('Passwd')).sendKeys(userObect.password);
driver.findElement(By.id('PasswdAgain')).sendKeys(userObect.password);
driver.findElement(By.xpath(`//*[@id="BirthMonth"]/div[1]`)).sendKeys('a');
driver.findElement(By.id('BirthDay')).sendKeys(userObect.day);
driver.findElement(By.id('BirthYear')).sendKeys(userObect.year);
driver.findElement(By.xpath(`//*[@id="Gender"]/div[1]`)).sendKeys('m'); // f -female, m - male
driver.findElement(By.xpath('//*[@id="submitbutton"]')).click();
driver.sleep(1000);
driver.findElement(By.xpath('//*[@id="tos-scroll-button"]')).click();
driver.sleep(1000);
driver.findElement(By.xpath('//*[@id="iagreebutton"]')).click();
driver.sleep(5000);
driver.quit();

//<div class="goog-inline-block goog-flat-menu-button-caption" id=":0" role="option" aria-setsize="12" aria-posinset="1">January</div>