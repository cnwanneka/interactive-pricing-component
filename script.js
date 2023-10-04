let view = document.getElementById('pageView');
let cost = document.getElementById('cost');
let slider = document.getElementById('price-slider');
let toggle = document.getElementById('billing');
let pageViews = ['10K', '50K', '100K', '500K', '1M'];
let perMonth = [8, 12, 16, 24, 36];
let isYearly = false;

slider.addEventListener('input', function() {
    updateValue();
    console.log(slider.value);
});

toggle.addEventListener('change', function() {
    if(isYearly == false) {
        isYearly = true;
    } else {
        isYearly = false;
    }
});

function updateValue(){
    if(isYearly){
        cost.innerHTML = perMonth[slider.value] * 0.75
    } else {
        cost.innerHTML = perMonth[slider.value]
    }
}    