let debug = false;

const colors = [
    '#FF0000', // Red
    '#FE6E00', // Orange
    '#00D000', // Green
    '#326CC9', // Blue
    '#E042F5', // Purple
];

const address_prefix = 'https://mislawka07.wordpress.com/';

const dots = [
    [28.74, 21.92, 0, 'canada-2019', 'Wyprawa Kanada/Canada 2019'], 							// Canada, Otlawa
    [25.77, 36.11, 0, 'kuba-cuba-2016', 'Wyprawa Kuba/Cuba 2016'],  							// Cuba
    [22.92, 37.45, 0, 'meksyk-mexico-2016', 'Wyprawa Meksyk/Mexico 2016'],    						// Mexico
    [23.16, 41.52, 0, 'nicaragua-2019', 'Wyprawa Nikaragua/Nicaragua 2019'], 						// Nicaragua
    [23.95, 43.53, 0, 'costarica-2019', 'Wyprawa Kostaryka/Costa Rica 2019'],						// Costarica
    [29.27, 61.97, 0, 'boliwia-bolivia-2017', 'Wyprawa Boliwia/Bolivia 2017'], 						// Bolivia
    [28.40, 63.68, 0, 'chile-2017-atacama', 'Wyprawa Chile 2017 - Atacama'], 						// Chile, Atacama
    [28.72, 70.74, 0, 'chile-2017', 'Wyprawa Chile 2017'], 								// Chile, Santiago
    [44.05, 10.31, 0, 'islandia-iceland-2017', 'Wyprawa Islandia/Iceland 2017'], 					// Iceland
    [46.93, 17.82, 0, 'walia-wales-2016', 'Wyprawa Walia/Wales 2016'], 							// Wales
    [53.52, 19.24, 0, 'ukrainaukraine-2007', 'Wyprawa Ukraina/Ukraine 2007'], 						// Ukraine
    [45.60, 17.52, 0, 'irlandia-ireland-2016', 'Wyprawa Irlandia/Ireland 2016'], 					// Ireland
    [53.23, 15.68, 0, 'ryga-riga-2017', 'Wyprawa Łotwa/Latvia -Ryga/Riga 2017'], 					// Latvia, Riga
    [44.82, 30.86, 0, 'morocco-2018', 'Wyprawa Maroko/Morocco 2018'], 							// Morocco
    [52.30, 70.89, 0, 'rpa-cape-town-2015', 'Wyprawa RPA/South Africa 2015 - Cape Town'], 				// RPA, Cape Town
    [55.41, 68.59, 0, 'rpa-durban-2015', 'Wyprawa RPA/South Africa 2015 - Durban'], 					// RPA, Durban
    [54.63, 65.98, 0, 'rpa-pretoria-2015', 'Wyprawa RPA/South Africa 2015 - Johannesburg, Pretoria'], 			// RPA, Pretoria
    [54.63, 26.41, 0, 'turcjaturkey-2014', 'Wyprawa Turcja/Turkey 2014'], 						// Turkey
    [52.74, 22.69, 0, 'serbia-2015', 'Wyprawa Serbia 2015'], 								// Serbia
    [51.86, 22.02, 0, 'chorwacjacroatia-2003', 'Wyprawa Chorwacja/Croatia 2003/2015'], 					// Croatia
    [51.93, 23.23, 0, 'bih-2015', 'Wyprawa Bosnia i Hercegowina/Bosnia and Herzegovina 2015'], 				// Bosnia And Herzegovina
    [52.40, 23.76, 0, 'czarnogora-2015', 'Wyprawa Czarnogóra/Montenegro 2015'], 					// Montenegro
    [52.74, 24.70, 0, 'albania-2015', 'Wyprawa Albania 2015'], 								// Albania
    [68.08, 32.15, 0, 'indieindia-2007', 'Wyprawa Indie/India 2007'], 							// India, New Dheli
    [70.23, 32.68, 0, 'nepal-2007', 'Wyprawa Nepal 2007'], 								// Nepal, Kathmandu
    [78.05, 35.62, 0, 'hong-kong-michala-2004', 'Wyprawa Michała Hong Kong 2004'], 					// Hong Kong
    [79.14, 46.81, 0, 'malezjamalaysia-borneo-2014', 'Wyprawa Malezja/Malaysia 2014 - Borneo'], 			// Malaysia, Borneo
    [75.33, 46.35, 0, 'malezjamalaysia-2014', 'Wyprawa Malezja/Malaysia 2014'], 					// Malaysia
    [76.03, 49.11, 0, 'singapursingapore-2014', 'Wyprawa Singapur/Singapore 2014'], 					// Singapore
    [79.14, 46.81, 0, 'tajlandiathailand-2013', 'Wyprawa Tajlandia/Thailand 2013'], 					// Thailand, Bangkok
    [75.72, 41.90, 0, 'kambodzacambodia-2013', 'Wyprawa Kambodża/Cambodia 2013'], 					// Cambodia
    [76.42, 43.59, 0, 'wietnamvietnam-2013', 'Wyprawa Wietnam/Vietnam 2013'], 						// Vietnam
    [74.71, 40.98, 0, 'tajlandiathailand-2013', 'Wyprawa Tajlandia/Thailand 2013'], 					// Thailand
    [76.88, 54.27, 0, 'indonezjaindonesia-2014', 'Wyprawa Indonezja/Indonesia 2014'], 					// Indonesia
    [55.74, 31.34, 0, 'egiptegypt-2012', 'Wyprawa Egipt/Egypt 2012'], 							// Egypt
    [51.44, 14.14, 1, 'karlskrona-maraton-bike-2011', 'Rajd Karlskrona Maraton Bike 2011'], 				// Karlskrona
    [51.28, 16.03, 1, 'bornholm-2006', 'Rajd Bornholm 2006'], 								// Bornholm
    [51.05, 17.77, 1, 'rajd-nysa-odra-2014', 'Rajd Nysa-Odra 2014'], 							// Nysa-Odra
    [53.36, 16.60, 1, 'wilnovilnius-2011', 'Rajd Gdańsk - Wilno 2011'], 						// Gdansk - Vilnius
    [45.37, 23.96, 1, 'camino-frances-camino-de-santiago-2010', 'Rajd Roncesvalles - Camino de Santiago 2010'], 	// Camino Frances
    [45.91, 27.33, 1, 'via-de-la-plata-camino-de-santiago-2012', 'Rajd Sevilla - Camino de Santiago 2012'], 		// Camino Via de la Plata
    [47.78, 23.54, 2, 'pirenejepyrenees-2004', 'Wyprawa Pireneje/Pyrenees 2004'], 					// Pyrenees
    [51.28, 24.72, 2, 'wlochyitaly-2001', 'Wyprawa Włochy/Italy 2001'], 						// Italy 2001
    [49.94, 21.83, 2, 'wlochyitaly-2002', 'Wyprawa Włochy/Italy 2002'], 						// Italy 2002
    [51.28, 22.72, 3, 'chorwacja-croatia-2019-rejs', 'Rejs Chorwacja/Croatia 2019'], 					// Cruise Croatia
    [52.84, 26.26, 3, 'grecjagreece-2013', 'Rejs Grecja/Greece 2013'], 							// Cruise Greece
    [84.45, 75.80, 4, 'australia-i-tasmania-2024/', 'Wyprawa Tasmania 2024 - comming soon'], 							// Tasmania
    [83.47, 67.52, 4, 'australia-i-tasmania-2024/', 'Wyprawa Austratia 2024 - comming soon'] 							// Australia
];

dots.forEach(dot => {
	$('#map').append(`<a href="${address_prefix + dot[3]}" title="${dot[4]}" target="_blank"><div class="dot" data-color="${colors[dot[2]]}"></div></a>`);
});

// Position the dots dynamically based on the dots array
dots.forEach((dot, index) => {
    const $dot = $('.dot').eq(index);
    $dot.css({
        'left': dot[0] + '%',
        'top': dot[1] + '%'
    });
});

// Click event to get the coordinates relative to the container
$(document).on('click', function(e) {
    if (debug) {
        const mapOffset = $('#map').offset();
        const mapWidth = $('#map').eq(0).width();
        const mapHeight = parseInt($('#map').eq(0).css('padding-top').slice(0, -2));

        if (mapHeight > 0 && mapWidth > 0) {  // Ensure map dimensions are valid
            const xPercent = Math.round((e.pageX - mapOffset.left) / mapWidth * 10000) / 100;
            const yPercent = Math.round((e.pageY - mapOffset.top) / mapHeight * 10000) / 100;

            console.log(/*`Clicked at: X = ${xPercent}% | Y = ${yPercent}% */`(${xPercent}, ${yPercent})`);
        } else {
            console.warn('Map height or width is zero, unable to calculate percentage (w: ' + mapWidth + ', h: ' + mapHeight + ').');
        }
    }
});


let lit = true;

// Main function to toggle dot colors
function main() {
    $('.dot').each(function() {
        const newColor = lit ? $(this).attr('data-color') : '#303030';
        $(this).css('background', newColor);
    });
    
    lit = !lit;

    /* Was meant to scale dots along with the website scale,
    so they are the same size on different zoom
    levels, but didn't work.

    let initialSize = 6;
    let scaleFactor = 1 / window.devicePixelRatio;
    $('.dot').each(() => {
        $(this).css({
            width: `${initialSize * scaleFactor}px`,
            height: `${initialSize * scaleFactor}px`
        })
    });
    */

    setTimeout(() => {
        $('.dot').each(function() {
            const newColor = lit ? $(this).attr('data-color') : '#303030';
            $(this).css('background', newColor);
        });

        lit = !lit

        setTimeout(main, 200); // Unlit for 200ms
    }, 500); // Lit for 500ms
}

// Start the color toggling when the page loads
$(document).ready(function() {
    main();
});
