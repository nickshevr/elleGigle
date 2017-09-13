const webdriver = require('selenium-webdriver');
const By = webdriver.By;

const REMOTE_NOTE = 'http://notes.u-kon.com/RemotePhonebook.xml';
const REMOTE_NAME = 'ukon';

const IPS_TABLE_ALL = [
    /*
    //'192.168.20.39',
    //'192.168.20.1',
    '192.168.20.5',
    '192.168.20.6',
    '192.168.20.9',
    '192.168.20.11',
    '192.168.20.12',
    '192.168.20.13',
    '192.168.20.14',
    '192.168.20.15',
    '192.168.20.16',
    '192.168.20.18',
    '192.168.20.19',
    //'192.168.20.20',
    '192.168.20.21',
    '192.168.20.22',
    '192.168.20.23',
    '192.168.20.25',*/
    '192.168.20.26',
    '192.168.20.27',
    '192.168.20.28',
    '192.168.20.31',
    '192.168.20.32',
    '192.168.20.33',
    '192.168.20.34',
    '192.168.20.35',
    '192.168.20.36',
    '192.168.20.38',
    '192.168.20.40',
    '192.168.20.41',
    '192.168.20.42',
    '192.168.20.43',
    '192.168.20.44',
    '192.168.20.46',
    '192.168.20.47',
    '192.168.20.48',
    '192.168.20.49',
    '192.168.20.50',
    '192.168.20.51',
    '192.168.20.52',
    '192.168.20.53',
    '192.168.20.54',
    '192.168.20.55',
    '192.168.20.57',
    '192.168.20.58',
    '192.168.20.59',
    '192.168.20.61',
    '192.168.20.62',
    '192.168.20.63',
    '192.168.20.65',
    '192.168.20.66',
    '192.168.20.67',
    '192.168.20.68',
    '192.168.20.71',
    '192.168.20.72',
    '192.168.20.73',
    '192.168.20.75',
    '192.168.20.76',
    '192.168.20.80',
    '192.168.20.83',
    '192.168.20.84',
    '192.168.20.85',
    '192.168.20.86',
    '192.168.20.87',
    '192.168.20.88',
    '192.168.20.89',
    '192.168.20.91',
    '192.168.20.92',
    '192.168.20.93',
    '192.168.20.94',
    '192.168.20.95',
    '192.168.20.96',
    '192.168.20.97',
    '192.168.20.98',
    '192.168.20.100',
    '192.168.20.103',
    '192.168.20.107',
    '192.168.20.108',
    '192.168.20.109',
    '192.168.20.110',
    '192.168.20.111',
    '192.168.20.114',
//'192.168.20.200',
    '192.168.20.207',
    '192.168.20.224',
    '192.168.20.230',
    '192.168.20.237'
];
const PASSWORD = 'proof';

const MAIN_DNS = '192.168.10.10';
const ADDITIONAL_DNS = '8.8.8.8';

const login = (driver, ip) => {
    driver.get(`http://${ip}`);
    driver.sleep(1000);
    driver.manage().window().maximize();

    driver.findElement(By.xpath(`//*[@id="center"]/form/table/tbody/tr[3]/td[2]/input`))
        .then(null, err => {
            console.log("Not responsed!");
            throw new Error("Not responsed!");
        });

    driver.findElement(By.xpath(`//*[@id="center"]/form/table/tbody/tr[3]/td[2]/input`)).sendKeys("admin");

    driver.findElement(By.xpath(`//*[@id="center"]/form/table/tbody/tr[4]/td[2]/input[1]`)).sendKeys(PASSWORD);
    driver.sleep(1000);
    driver.findElement(By.xpath('//*[@id="idConfirm"]')).click();
    driver.sleep(1000);
};

const changeKeyboard = (driver, ip) => {
    return new Promise((res, rej) => {
        try {
            login(driver, ip);
        } catch(e) {
            console.log("LOGIN ERR", e);
            rej();
        }

        driver.findElement(By.xpath('//*[@id="dsskey"]/div[2]'))
            .then(elem => {
                    elem.click();
                },
                err => {
                    rej();
                });

        driver.sleep(1000);

        driver.findElement(By.xpath('//*[@id="dsskey-programkey"]/a')).click();

        driver.sleep(1000);

        driver.findElement(By.id(`selType_3`)).sendKeys('N');

        driver.sleep(1000);

        driver.findElement(By.id(`selType_2`)).sendKeys('Удаленная за');

        driver.sleep(1000);

        driver.findElement(By.id(`Label_2`)).clear();
        driver.findElement(By.id(`Label_2`)).sendKeys('контакты');

        driver.sleep(1000);

        driver.findElement(By.name(`btnSubmit`)).click();

        driver.sleep(1000).then(() => {
            res();
        })
    })
}

const changeDNS = (driver, ip) => {
    return new Promise((res, rej) => {
        try {
            login(driver, ip);
        } catch(e) {
            console.log("LOGIN ERR", e);
            rej();
        }

        driver.findElement(By.xpath('//*[@id="network"]/div[2]'))
            .then(elem => {
                    elem.click();
                },
                err => {
                    console.log("Password didnt match!");
                    rej();
                    throw new Error();
                });

        driver.sleep(1000);

        driver.findElement(By.name(`NetworkWanStaticPriDns`)).clear();
        driver.findElement(By.name(`NetworkWanStaticPriDns`)).sendKeys(MAIN_DNS);


        driver.sleep(1000);

        driver.findElement(By.name(`NetworkWanStaticSecDns`)).clear();
        driver.findElement(By.name(`NetworkWanStaticSecDns`)).sendKeys(ADDITIONAL_DNS);

        driver.sleep(1000);

        driver.findElement(By.name(`btnSubmit`)).click();

        driver.switchTo().alert().accept();

        driver.sleep(1000).then(() => {
            res();
        })
    })
}

const remotePhonebook = (driver, ip) => {
    return new Promise((res, rej) => {
        try {
            login(driver, ip);
        } catch(e) {
            console.log("LOGIN ERR", e);
            rej();
        }

        driver.findElement(By.xpath('//*[@id="contacts"]/div[2]/label'))
            .then(elem => {
                    elem.click();
                },
                err => {
                    console.log("Password didnt match!");
                    rej();
                    throw new Error();
                });

        driver.sleep(1000);

        driver.findElement(By.id('contacts-remote')).click();

        driver.sleep(1000);

        driver.findElement(By.id(`RemotePhoneBook0URL`)).clear();
        driver.findElement(By.id(`RemotePhoneBook0URL`)).sendKeys(REMOTE_NOTE);

        driver.sleep(1000);

        driver.findElement(By.id('RemotePhoneBook0Name')).clear();
        driver.findElement(By.id('RemotePhoneBook0Name')).sendKeys(REMOTE_NAME);

        driver.findElement(By.name(`btnSubmit`)).click();

        driver.sleep(1000).then(() => {
            res();
        })
    })
}

const changeContacts = (driver, ip) => {
    return new Promise((res, rej) => {
        try {
            login(driver, ip);
        } catch(e) {
            console.log("LOGIN ERR", e);
            rej();
        }

        driver.findElement(By.xpath('//*[@id="contacts"]/div[2]/label'))
            .then(elem => {
                    elem.click();
                },
                err => {
                    console.log("Password didnt match!");
                    rej();
                    throw new Error();
                });

        //*[@id="contacts-favorite"]/a

        driver.sleep(1000);

        driver.findElement(By.id('contacts-favorite')).click();

        driver.sleep(1000);

        driver.findElement(By.xpath(`//*[@id="SettingSearchTable"]/tbody/tr[4]/td[3]/select/option[1]`)).click();

        driver.sleep(1000);

        driver.findElement(By.xpath(`//*[@id="SettingSearchTable"]/tbody/tr[4]/td[4]/table/tbody/tr[1]/td/input`)).click();

        driver.sleep(1000);

        driver.findElement(By.xpath(`//*[@id="listSearchEnabled"]/option[1]`)).click();

        driver.sleep(1000);

        driver.findElement(By.xpath(`//*[@id="SettingSearchTable"]/tbody/tr[4]/td[4]/table/tbody/tr[3]/td/input`)).click();

        driver.findElement(By.name(`btnSubmit`)).click();

        driver.sleep(1000).then(() => {
            res();
        })
    })
}

const changePassword = (driver, ip, realPWD, verPrefix) => {
    driver.get(`http://${ip}`);
    driver.sleep(1000);

    driver.findElement(By.xpath(`//*[@id="center"]/form/table/tbody/tr[3]/td[2]/input`))
        .then(null, err => {
            console.log("Not responsed!");
            return reject("Not responsed!");
        });

    driver.findElement(By.xpath(`//*[@id="center"]/form/table/tbody/tr[3]/td[2]/input`)).sendKeys("admin");

    driver.findElement(By.xpath(`//*[@id="center"]/form/table/tbody/tr[4]/td[2]/input[1]`)).sendKeys("admin");
    driver.sleep(1000);
    driver.findElement(By.xpath('//*[@id="idConfirm"]')).click();
    driver.sleep(1000);

    //*[@id="network"]/div[2]/label

    driver.findElement(By.xpath('//*[@id="security"]/div[2]'))
        .then(elem => {
                elem.click();
            },
            err => {
                console.log("Password didnt match!");
                return reject("Password didnt match!");
            });

    driver.sleep(1000);

    //*[@id="body-middle"]/form/table/tbody/tr[3]/td[3]/input
    //*[@id="body-middle"]/form/table/tbody/tr[3]/td[3]/input
    //*[@id="body-middle"]/form/table/tbody/tr[3]/td[3]/input
    /*
        driver.findElement(By.xpath(`${verPrefix}/tbody/tr[3]/td[3]/input`)).then(null,
            err => {
                verPrefix = '//!*[@id="body-middle"]/form';
                console.log("Version web didnt match!");
            });*/

    //Change password
    /*    driver.findElement(By.xpath(`${verPrefix}/tbody/tr[3]/td[3]/input`)).sendKeys("admin");
        driver.sleep(1000);

        driver.findElement(By.xpath(`${verPrefix}/tbody/tr[4]/td[3]/input`)).sendKeys(NEW_PASSWORD);
        driver.sleep(1000);

        driver.findElement(By.xpath(`${verPrefix}/tbody/tr[5]/td[3]/input`)).sendKeys(NEW_PASSWORD);*/

    driver.findElement(By.name(`editOldPassword`))
        .then(elem => {
                elem.sendKeys("admin");
            },
            err => {
                console.log("Unucky!");
                return reject("Unucky");
            });

    driver.sleep(1000);

    driver.findElement(By.name(`editNewPassword`))
        .then(elem => {
                elem.sendKeys(NEW_PASSWORD);
            },
            err => {
                console.log("Unucky!");
                return reject("Unucky");
            });

    driver.sleep(1000);

    driver.findElement(By.name(`editConfirmPassword`))
        .then(elem => {
                elem.sendKeys(NEW_PASSWORD);
            },
            err => {
                console.log("Unucky!");
                return reject("Unucky");
            });

    driver.sleep(1000);

    driver.findElement(By.name(`btnSubmit`))
        .then(elem => {
                elem.click();
            },
            err => {
                console.log("Unucky!");
                return reject("Unucky");
            });

    driver.findElement(By.name(`btnSubmit`)).click();

    driver.switchTo().alert().accept();

    driver.sleep(3000);
};

const init = async () => {
    const driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();

    for (const ip of IPS_TABLE_ALL) {
        try {
            await changeKeyboard(driver, ip);
        } catch(e){
            console.log(`${ip}`, e);
        }
    }

    driver.quit();
};

init().then(() => {}).catch(e => console.log(e));
