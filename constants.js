const prefixes = {
    "pl": [
        "Wyprawa",
        "Rajd",
        "Rejs",
        ""
    ],
    "en": [
        "Journey",
        "Rally",
        "Cruise",
        ""
    ]
};

const translations = {
    "pl": [
        "Kanada",
        "Kuba",
        "Meksyk",
        "Nikaragua",
        "Kostaryka",
        "Boliwia",
        "Chile - Atacama",
        "Chile",
        "Islandia",
        "Walia",
        "Ukraina",
        "Irlandia",
        "Łotwa",
        "Maroko",
        "RPA - Cape Town",
        "RPA - Durban",
        "RPA - Johannesburg, Pretoria",
        "Turcja",
        "Serbia",
        "Chorwacja",
        "Bośnia i Hercegowina",
        "Czarnogóra",
        "Albania",
        "Indie",
        "Nepal",
        "Michała Hong Kong",
        "Malezja - Borneo",
        "Malezja",
        "Singapur",
        "Kombodża",
        "Wietnam",
        "Tajlandia",
        "Indonezja",
        "Egipt",
        "Pireneje",
        "Włochy",
        "Włochy",
        "Tasmania",
        "Austratia",
        "Japonia",
        
        "Karlskrona Maraton",
        "Bornholm",
        "Nysa - Odra",
        "Gdańsk - Wilno",
        "Roncesvalles - Camino de Santiago",
        "Sevilla - Camino de Santiago",

        "Chorwacja",
        "Grecja",

        "Polska",
    ],
    "en": [
        "Canada",
        "Cuba",
        "Mexico",
        "Nicaragua",
        "Costarica",
        "Bolivia",
        "Chile - Atacama",
        "Chile",
        "Iceland",
        "Wales",
        "Ukraine",
        "Ireland",
        "Latvia - Riga",
        "Morocco",
        "South Africa - Cape Town",
        "South Africa - Durban",
        "South Africa - Johannesburg, Pretoria",
        "Turkey",
        "Serbia",
        "Croatia",
        "Bosnia and Herzegovina",
        "Montenegro",
        "Albania",
        "India",
        "Nepal",
        "Hong Kong",
        "Malysia - Borneo",
        "Malysia",
        "Singapore",
        "Kombodia",
        "Vietnam",
        "Thailand",
        "Indonesia",
        "Egipt",
        "Pyrenees",
        "Italy",
        "Italy",
        "Tasmania",
        "Austratia",
        "Japan",
        
        "Karlskrona Maraton",
        "Bornholm",
        "Nysa - Odra",
        "Gdańsk - Wilno",
        "Roncesvalles - Camino de Santiago",
        "Sevilla - Camino de Santiago",

        "Croatia",
        "Greece",
        
        "Poland",
    ]
};

const dots = [
    [28.74, 21.92, 0, 'canada-2019',                 0, 2019], // Canada, Otlawa
    [25.77, 36.11, 0, 'kuba-cuba-2016',              0, 2016], // Cuba
    [23.00, 37.85, 0, 'meksyk-mexico-2016',          0, 2016], // Mexico
    [23.16, 41.52, 0, 'nicaragua-2019',              0, 2019], // Nicaragua
    [23.95, 43.53, 0, 'costarica-2019',              0, 2019], // Costarica
    [29.27, 62.31, 0, 'boliwia-bolivia-2017',        0, 2017], // Bolivia
    [28.40, 63.68, 0, 'chile-2017-atacama',          0, 2017], // Chile, Atacama
    [28.72, 70.74, 0, 'chile-2017',                  0, 2017], // Chile, Santiago
    [44.05, 10.31, 0, 'islandia-iceland-2017',       0, 2017], // Iceland
    [46.93, 17.82, 0, 'walia-wales-2016',            0, 2016], // Wales
    [53.52, 19.24, 0, 'ukrainaukraine-2007',         0, 2007], // Ukraine
    [45.60, 17.52, 0, 'irlandia-ireland-2016',       0, 2016], // Ireland
    [53.23, 15.68, 0, 'ryga-riga-2017',              0, 2017], // Latvia, Riga
    [45.25, 31.09, 0, 'morocco-2018',                0, 2018], // Morocco
    [52.80, 71.00, 0, 'rpa-cape-town-2015',          0, 2015], // RPA, Cape Town
    [55.41, 68.59, 0, 'rpa-durban-2015',             0, 2015], // RPA, Durban
    [54.63, 65.98, 0, 'rpa-pretoria-2015',           0, 2015], // RPA, Pretoria
    [54.93, 26.41, 0, 'turcjaturkey-2014',           0, 2014], // Turkey
    [52.74, 22.69, 0, 'serbia-2015',                 0, 2015], // Serbia
    [51.86, 22.02, 0, 'chorwacjacroatia-2003',       0, [2003, 2015]], // Croatia
    [51.93, 23.23, 0, 'bih-2015',                    0, 2015], // Bosnia And Herzegovina
    [52.40, 23.76, 0, 'czarnogora-2015',             0, 2015], // Montenegro
    [52.74, 24.70, 0, 'albania-2015',                0, 2015], // Albania
    [68.08, 32.15, 0, 'indieindia-2007',             0, 2007], // India, New Dheli
    [70.23, 32.68, 0, 'nepal-2007',                  0, 2007], // Nepal, Kathmandu
    [78.05, 35.62, 0, 'hong-kong-michala-2004',      0, 2004], // Hong Kong
    [79.14, 46.81, 0, 'malezjamalaysia-borneo-2014', 0, 2014], // Malaysia, Borneo
    [75.33, 46.35, 0, 'malezjamalaysia-2014',        0, 2014], // Malaysia
    [76.03, 49.11, 0, 'singapursingapore-2014',      0, 2014], // Singapore
    [75.72, 41.90, 0, 'kambodzacambodia-2013',       0, 2013], // Cambodia
    [76.42, 43.59, 0, 'wietnamvietnam-2013',         0, 2013], // Vietnam
    [74.71, 40.98, 0, 'tajlandiathailand-2013',      0, 2013], // Thailand
    [76.88, 54.27, 0, 'indonezjaindonesia-2014',     0, 2014], // Indonesia
    [55.44, 34.88, 0, 'egiptegypt-2012',             0, 2012], // Egypt
    [47.78, 23.54, 2, 'pirenejepyrenees-2004',       0, 2004], // Pyrenees
    [51.28, 24.72, 2, 'wlochyitaly-2001',            0, 2001], // Italy 2001
    [49.94, 21.83, 2, 'wlochyitaly-2002',            0, 2002], // Italy 2002
    [84.45, 75.80, 5, 'australia-i-tasmania-2024',   0, 2024], // Tasmania
    [83.47, 67.52, 5, 'australia-i-tasmania-2024',   0, 2024], // Australia
    [83.59, 27.60, 4, 'japonia-japan-2025',          0, 2025], // Japan

    [51.44, 14.14, 1, 'karlskrona-maraton-bike-2011',            1, 2011], // Karlskrona
    [51.28, 16.03, 1, 'bornholm-2006',                           1, 2006], // Bornholm
    [51.05, 17.77, 1, 'rajd-nysa-odra-2014',                     1, 2014], // Nysa-Odra
    [53.36, 16.60, 1, 'wilnovilnius-2011',                       1, 2011], // Gdansk - Vilnius
    [45.65, 23.33, 1, 'camino-frances-camino-de-santiago-2010',  1, 2010], // Camino Frances
    [46.19, 26.76, 1, 'via-de-la-plata-camino-de-santiago-2012', 1, 2012], // Camino Via de la Plata

    [51.28, 22.72, 3, 'chorwacja-croatia-2019-rejs', 2, 2019], // Cruise Croatia
    [52.84, 26.26, 3, 'grecjagreece-2013',           2, 2013], // Cruise Greece

    [52.08, 16.66, 6, undefined, 3]
];
