const eduList = document.querySelector('.education-list');
const items = document.querySelectorAll('.education-list__items');

function toggleEducation() {
    if (this.classList.contains('edu__dropdown-active')) {
        this.classList.remove('edu__dropdown-active');
        console.log("Condition 1!")
    } else if (eduList.querySelector('.edu__dropdown-active')) {
        eduList.querySelector('.edu__dropdown-active').classList.remove('edu__dropdown-active');
        this.classList.add('edu__dropdown-active');
        console.log("Condition 2!")
    } else {
        this.classList.add('edu__dropdown-active');
        console.log("Condition 3!")
    }
}

// Event Listeners
for (let item of items) {
    if (item.querySelector(".education-list__dropdown")) {
        item.addEventListener("click", toggleEducation, false);
        item.addEventListener("keypress", toggleEducation, false);
    }
}
