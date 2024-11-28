import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
    <div class="zhuy">
        <div class="biaot" id="baiot">
            WELCOME TO THE PLANET
        </div>
        <div class="biaot_xiaobiaot">
            Hello are you still there? I miss you so much
        </div>
    </div>
`

setupCounter(document.querySelector('#baiot'))
