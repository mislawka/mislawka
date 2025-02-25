let debug = false;

const langs = ['pl', 'en']
var lang = 'en'

// Load cached language if stored
if (localStorage.getItem('language')) {
    lang = localStorage.getItem('language');
}

if (langs.indexOf(lang) !== -1) {
    $('#lang').prop('selectedIndex', langs.indexOf(lang))
} else {
    throw RangeError('Invalid language stored in local storage!');
}


const $lang = $('#lang');
$lang.on('change', () => {
    lang = langs[$lang[0].selectedIndex]
    localStorage.setItem('language', langs[$lang[0].selectedIndex]);

    dots.forEach((dot, index) => {
        if (dot[3] != undefined) {
            let title = `${prefixes[lang][dot[4]]} ${translations[lang][index]} ${dot[5]}`
            $('.dot').eq(index).attr('title', title);
        }
    });
});

const colors = [
    '#FF0000', // Red
    '#FE6E00', // Orange
    '#00D000', // Green
    '#326CC9', // Blue
    '#E042F5', // Purple
    'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,0,0,1) 50%, rgba(255,0,0,1) 100%)'
];

const address_prefix = 'https://mislawka07.wordpress.com/';

function load_dots() {
    dots.forEach((dot, index) => {
        if (dot[3] != undefined) {
            let title = `${prefixes[lang][dot[4]]} ${translations[lang][index]} ${dot[5]}`
            $('#map').append(`<a href="${address_prefix + dot[3]}" title="${title}" target="_blank" class="dot-link"><div class="dot" data-color="${colors[dot[2]]}"></div></a>`);
        } else {
            $('#map').append(`<div class="dot poland" data-color="${colors[dot[2]]}"></div>`);
        }
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

                verbose = false; // Change this to switch the mode
                if (verbose){
                    console.log(`Clicked at: X = ${xPercent}% | Y = ${yPercent}%`);
                } else {
                    console.log(`(${xPercent}, ${yPercent})`);
                }
            } else {
                console.warn('Map height or width is zero, unable to calculate percentage (w: ' + mapWidth + ', h: ' + mapHeight + ').');
            }
        }
    });
}
load_dots();



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

    const plane = $('#plane');
    const dom_dots = $('.dot');
    const map = $('#map');

    let dom_poland = $(dom_dots[dom_dots.length-1]);
    let last_dot = dom_poland.offset();
    let map_offset = map.offset();

    let to_poland = false;
    let poland = [
        last_dot.left - plane.width() / 2 - map_offset.left,
        last_dot.top - plane.height() / 2 - map_offset.top
    ];

    plane.css({
        left: poland[0] + 'px',
        top: poland[1] + 'px'
    });

    //plane.css('left', dots[dots.length - 1][0]);
    //plane.css('up', dots[dots.length - 1][1]);
    
    // Function to calculate the angle and distance between two points
    function calculateAngleAndDistance(x1, y1, x2, y2) {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI); // Convert radian to degree
      const distance = Math.sqrt(dx * dx + dy * dy);
      return { angle, distance };
    }

    // Move the plane to a new position
    function movePlane(start, end) {
        const mapOffset = map.offset();

        const startX = start.offset().left + start.width() / 2 - mapOffset.left;
        const startY = start.offset().top + start.height() / 2 - mapOffset.top;
        const endX = end.offset().left + end.width() / 2 - mapOffset.left;
        const endY = end.offset().top + end.height() / 2 - mapOffset.top;

        const { angle, distance } = calculateAngleAndDistance(startX, startY, endX, endY);

        // Rotate the plane
        plane.css({
            transform: `rotate(${angle}deg)`
        });

        // Animate the plane movement
        plane.animate({
            left: endX - plane.width() / 2 + 'px',
            top: endY - plane.height() / 2 + 'px'
        }, Math.sqrt(distance / 140)*1000, function() { 

        // After movement completes, start moving to another dot randomly
        setTimeout(() => {
            const newStart = end;
            const newEnd = to_poland ? dom_poland : $(dom_dots[Math.floor(Math.random() * dom_dots.length)]);

            movePlane(newStart, newEnd);
            to_poland = !to_poland;

        }, 500); // Wait 0.5 seconds before next move
      });
    }

    // Start moving the plane randomly between dots
    const randomEndDot = $(dom_dots[Math.floor(Math.random() * dom_dots.length)]);
    movePlane(dom_poland, randomEndDot);
});
