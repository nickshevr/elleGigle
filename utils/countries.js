const countries = {
    en: [
        'Albania',
        'Algeria',
        'Angola',
        'Antigua',
        'Argentina',
        'Armenia',
        'Aruba',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bermuda',
        'Bolivia',
        'Bosnia',
        'Botswana',
        'Brazil',
        'British',
        'British',
        'Brunei',
        'Bulgaria',
        'Burkina',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Cape',
        'Chile',
        'China',
        'Colombia',
        'Costa',
        'Cote',
        'Croatia',
        'Cyprus',
        'Czech',
        'Denmark',
        'Dominican',
        'Ecuador',
        'Egypt',
        'El',
        'Equatorial',
        'Estonia',
        'Falkland',
        'Faroe',
        'Fiji',
        'Finland',
        'France',
        'Gabon',
        'Georgia',
        'Germany',
        'Ghana',
        'Gibraltar',
        'Greece',
        'Greenland',
        'Guam',
        'Guatemala',
        'Haiti',
        'Honduras',
        'Hong',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Ireland',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kuwait',
        'Laos',
        'Latvia',
        'Lebanon',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Macedonia',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Mauritius',
        'Mexico',
        'Moldova',
        'Monaco',
        'Montenegro',
        'Morocco',
        'Mozambique',
        'Namibia',
        'Nepal',
        'Netherlands',
        'Netherlands',
        'New',
        'Nicaragua',
        'Nigeria',
        'Norway',
        'Oman',
        'Pakistan',
        'Panama',
        'Paraguay',
        'Peru',
        'Philippines',
        'Poland',
        'Portugal',
        'Puerto',
        'Qatar',
        'Romania',
        'Russia',
        'Rwanda',
        'San',
        'Saudi',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'South',
        'South',
        'Spain',
        'Sri',
        'Sweden',
        'Switzerland',
        'Taiwan',
        'Tajikistan',
        'Tanzania',
        'Thailand',
        'Togo',
        'Trinidad',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Uganda',
        'Ukraine',
        'United',
        'United',
        'United',
        'Uruguay',
        'Uzbekistan',
        'Vatican',
        'Venezuela',
        'Vietnam',
        'Yemen',
        'Zambia',
        'Zimbabwe'
        ],
    ru: [
        'Австралия',
        'Австрия',
        'Азербайджан',
        'Албания',
        'Алжир',
        'Ангола',
        'Антигуа',
        'Аргентина',
        'Армения',
        'Аруба',
        'Багамские',
        'Бангладеш',
        'Барбадос',
        'Бахрейн',
        'Беларусь',
        'Белиз',
        'Бельгия',
        'Бенин',
        'Берег',
        'Бермудские',
        'Болгария',
        'Боливия',
        'Босния',
        'Ботсвана',
        'Бразилия',
        'Британская',
        'Бруней',
        'Буркина-Фасо',
        'Ватикан',
        'Великобритания',
        'Венгрия',
        'Венесуэла',
        'Виргинские',
        'Вьетнам',
        'Габон',
        'Гаити',
        'Гана',
        'Гватемала',
        'Германия',
        'Гибралтар',
        'Гондурас',
        'Гонконг',
        'Гренландия',
        'Греция',
        'Грузия',
        'Гуам',
        'Дания',
        'Доминиканская',
        'Египет',
        'Замбия',
        'Зимбабве',
        'Израиль',
        'Индия',
        'Индонезия',
        'Иордания',
        'Ирландия',
        'Исландия',
        'Испания',
        'Италия',
        'Йемен',
        'Кабо-Верде',
        'Казахстан',
        'Камбоджа',
        'Камерун',
        'Канада',
        'Катар',
        'Кения',
        'Кипр',
        'Китай',
        'Колумбия',
        'Коста-Рика',
        'Кувейт',
        'Лаос',
        'Латвия',
        'Ливан',
        'Литва',
        'Лихтенштейн',
        'Люксембург',
        'Маврикий',
        'Македония',
        'Малайзия',
        'Мали',
        'Мальдивские',
        'Мальта',
        'Марокко',
        'Мексика',
        'Мозамбик',
        'Молдова',
        'Монако',
        'Намибия',
        'Непал',
        'Нигерия',
        'Нидерландские',
        'Нидерланды',
        'Никарагуа',
        'Новая',
        'Норвегия',
        'Объединенные',
        'Оман',
        'Пакистан',
        'Панама',
        'Парагвай',
        'Перу',
        'Польша',
        'Португалия',
        'Пуэрто-Рико',
        'Россия',
        'Руанда',
        'Румыния',
        'Сальвадор',
        'Сан-Марино',
        'Саудовская',
        'Сейшельские',
        'Сенегал',
        'Сербия',
        'Сингапур',
        'Словакия',
        'Словения',
        'Соединенные',
        'Таджикистан',
        'Таиланд',
        'Тайвань',
        'Танзания',
        'Того',
        'Тринидад',
        'Тунис',
        'Туркменистан',
        'Турция',
        'Уганда',
        'Узбекистан',
        'Украина',
        'Уругвай',
        'Фарерские',
        'Фиджи',
        'Филиппины',
        'Финляндия',
        'Фолклендские',
        'Франция',
        'Хорватия',
        'Черногория',
        'Чешская',
        'Чили',
        'Швейцария',
        'Швеция',
        'Шри-Ланка',
        'Эквадор',
        'Экваториальная',
        'Эстония',
        'Южная',
        'Южно-Африканская',
        'Ямайка',
        'Япония'
    ]
};