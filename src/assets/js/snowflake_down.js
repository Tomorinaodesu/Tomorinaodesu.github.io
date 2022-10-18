// 引入snowflake_down style
import '../js/snowflake_down.css'

let indexSnow = 0

let body = document.querySelector('body')

let snowflakebox = document.createElement('div')    
// snowflakebox add in body
body.appendChild(snowflakebox)
snowflakebox.id = 'snowflakebox'

let boxHeight = snowflakebox.clientHeight
let boxWidth = snowflakebox.clientWidth

// Pagesize change
window.onresize = () => {
    boxHeight = snowflakebox.clientHeight
    boxWidth = snowflakebox.clientWidth
}

setInterval(() => {
    // create snowflake in snowflakebox
    let snowflake = document.createElement('span')
    snowflake.setAttribute('index',indexSnow)
    snowflake.id = 'snowflake'

    // position
    let pSnowflake = Math.ceil(Math.random() * boxWidth)
    snowflake.style.top = 0
    snowflake.style.left = pSnowflake + 'px'
    // setting snowflake size、opacity and translateX

    // plan one
    // let hwLight = Math.floor(2 + Math.random()*8) +'px'
    // snowflake.style.height = hwLight
    // snowflake.style.width = hwLight
    // snowflake.style.boxShadow = `0 0 ${hwLight+"px"} 0 white`

    // plan two
    let wlight = Math.floor(2 + Math.random() * 8) + 'px'
    snowflake.style.width = wlight
    let hLight = Math.floor(2 + Math.random()*8) +'px'
    snowflake.style.height = hLight
    snowflake.style.boxShadow = `0 0 ${(hLight > wlight ? wlight : hLight) + "px"} 0 white`

    // plan three
    // let wlight = Math.floor(2 + Math.random() * 8) + 'px'
    // snowflake.style.width = wlight
    // let hLight = Math.floor(2 + Math.random()*8) +'px'
    // snowflake.style.height = hLight
    //  snowflake.style.boxShadow = `0 0 ${hLight+"px"} 0 white`
    

    
    
    // let opacitySnow = Math.random()
    // snowflake.style.opacity = opacitySnow > 0.8 ? 0.8 : opacitySnow

    snowflake.style.opacity = Math.random()
    let x = (Math.ceil(Math.random()*10))
    snowflake.style.transform = `translateZ(${(x > 5 ? -(x-5) : x)+"px"})`
    //add snowflake in snowflakebox
    snowflakebox.appendChild(snowflake)
    
    // 伪随机动画
    let type = Math.ceil(Math.random()*10)
    snowflake.style.animation = `snow${type} 10s linear infinite alternate`

    indexSnow++
    //snowing
    let overtime = 1
    // top position
    let sum = 0
    let rd = 0
    const pTimer = setInterval(() => {
        // 开始动画
        if (overtime === 1) {
            rd = Math.ceil(Math.random() * 2)
        }
        snowflake.style.top = sum + 'px'
        sum += rd
        if (boxHeight < overtime) {
            clearInterval(pTimer)
            snowflake.remove()
        }
        overtime++
    }, 20);
}, 100);


