const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
const all = document.getElementById('all')
const fullCups = document.querySelectorAll('.cup-small.full').length
const totalCups = smallCups.length

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
    overDrink()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
        
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${400 - (40 * fullCups / 1)}mg`
    }
}
function overDrink() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length
    
    if(fullCups === 5 ){
        document.querySelector('h1').innerText = "I guess that's enough";
        document.querySelector('small').innerText = "This should be enough for one day!"
    }else if(fullCups > 5){
        document.querySelector('small').innerText = "Going insane aren't we?"
        document.querySelector('h1').innerText = "You need to stop!";
        document.getElementById("dont").style.color = "#E40017"
        document.getElementById("liters").style.color = "#E40017"
    }else if(fullCups === totalCups){
        document.getElementsByClassName('remained').style.color = "#E40017"
    }

     else {
        document.querySelector('small').innerText = "There is not enough amount of caffeine!"
        document.getElementById("dont").style.color = 'white'
        document.getElementById("liters").style.color = "black"
        document.querySelector('h1').innerText = "Drink Coffee";
    }
}
