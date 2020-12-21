const eduList = document.querySelector('.education-list');
const items = document.querySelectorAll('.education-list__items');

function toggleEducation() {
    if (this.classList.contains('edu__dropdown-active')) {
        this.classList.remove('edu__dropdown-active');
        this.querySelector('a').classList.remove('edu-border__fix')
    } else if (eduList.querySelector('.edu__dropdown-active')) {
        eduList.querySelector('.edu__dropdown-active').classList.remove('edu__dropdown-active');
        eduList.querySelector('.edu-border__fix').classList.remove('edu-border__fix');
        this.classList.add('edu__dropdown-active');
        this.querySelector('a').classList.add('edu-border__fix')
    } else {
        this.classList.add('edu__dropdown-active');
        this.querySelector('a').classList.add('edu-border__fix')
    }
}

// Event Listeners
for (let item of items) {
    if (item.querySelector(".education-list__dropdown")) {
        item.addEventListener("click", toggleEducation, false);
        item.addEventListener("keypress", toggleEducation, false);
    }
}
