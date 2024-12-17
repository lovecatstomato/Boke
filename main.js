import './style.css'
import { setupCounter } from './public/counter.js'

document.querySelector('#app').innerHTML = `
    <div class="zhuy" id="zhuy_tiaozhuan">
        <div class="biaot" id="baiot">
            WELCOME TO THE PLANET
        </div>
        <div class="biaot_xiaobiaot">
            Hello are you still there? I miss you so much
        </div>
    </div>
`

setupCounter(document.querySelector('#zhuy_tiaozhuan'))
