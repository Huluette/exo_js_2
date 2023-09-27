const img = document.querySelector('#img');
const btn = document.querySelector('#btn');


btn.addEventListener('click', () => {
    if(img.style.display == 'block') {
        img.style.display = 'none';
    }

    else {
        img.style.display = 'block';
    }
})