//get slider element
const range = document.getElementById('range')

//when the slider moves(input event)
range.addEventListener('input' , (e)=>{

    const value = +e.target.value
     

    //get the label next to the slider
    const label = e.target.nextElementSibling

    const range_width = getComputedStyle(e.target).getPropertyValue('width')

    const label_width = getComputedStyle(e.target).getPropertyValue('width')

    const num_width = +range_width.substring(0 , range_width.length - 2)

    const num_label_width = +label_width.substring(0 , label_width.length - 2)
    
    const max = +e.target.max

    const min = +e.target.min

    const left = value * (num_width / max) -num_label_width / 2 +
    scale(value , min , max , 10 , -10)

    label.style.left = `${left}px`

    label.innerHTML = value
})

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

//scale() function --converts one range of numbers to another
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }