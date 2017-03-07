const mongoose = require('mongoose');
const Types = mongoose.Schema.Types;
const webdriver = require('selenium-webdriver');
const phoneApi = require('../utils/virtualPhoneApi');
const generator = require('../utils/generator');
const By = webdriver.By;

const Schema = new mongoose.Schema({
    firstName: {
        type: Types.String
    },
    lastName: {
        type: Types.String
    },
    email: {
        type: Types.String
    },
    gender: {
        type: Types.Number
    },
    phone: {
        type: Types.String
    },
    password: {
        type: Types.String
    },
    month: {
        type: Types.String
    },
    day: {
        type: Types.String
    },
    year: {
        type: Types.String
    },
    location: {
        type: Types.String
    }
});

Schema.statics.registerUser = function () {
    const userObect = generator.createUserObj();

    //const phone = await phoneApi.getNumber();

    const driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();

    driver.get('https://accounts.google.com/SignUp');
    driver.findElement(By.id('FirstName')).sendKeys(userObect.firstName);
    driver.findElement(By.id('LastName')).sendKeys(userObect.lastName);
    driver.findElement(By.id('GmailAddress')).sendKeys(userObect.email.split('@')[0]);
    driver.findElement(By.id('Passwd')).sendKeys(userObect.password);
    driver.findElement(By.id('PasswdAgain')).sendKeys(userObect.password);
    //@ToDo ДР и пол

    return this.create(userObect);
};
