import $ from 'jquery';
import whatInput from 'what-input';


window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();



// define your grid at different breakpoints, mobile first (smallest to largest)

/*
const sizes = [
  { columns: 2, gutter: 1 },                   // assumed to be mobile, because of the missing mq property
  { mq: '768px', columns: 3, gutter: 1 },
  { mq: '1024px', columns: 4, gutter: 1 }
]

// create an instance

const instance = Bricks({
  container: "[data-grid]",
  packed:    'data-packed',        // if not prefixed with 'data-', it will be added
  sizes:      sizes,
  position:   false
})

// bind callbacks

instance
  .on('pack',   () => console.log('ALL grid items packed.'))
  .on('update', () => console.log('NEW grid items packed.'))
  .on('resize', size => console.log('The grid has be re-packed to accommodate a new BREAKPOINT.'))

document.addEventListener('DOMContentLoaded', event => {
  instance
    .resize(true)     // bind resize handler
    .pack()           // pack initial items
})

*/
