// const buttonYes = document.getElementById('button-yes');
// const buttonNo = document.getElementById('button-no');

// buttonNo.addEventListener('click', () => {
//     window.location.href = 'result.html';
// });

const alternatives = [
    {text:"", images:"img/cat-1.jpg"},
    {text:"Aku berjanji ini akan menjadi pengalaman tak terlupakan", images:"img/cat-2.jpg"},
    {text:"Pikirkan lagi", images:"img/cat-3.jpg"},
    {text:"Ayo, beranikan diri untuk mengatakan iya", images:"img/cat-4.jpg"},
    {text:"Jangan biarkan rasa takut menghalangimu", images:"img/cat-5.jpg"}
];
const ohyes = {text:"Aku tahu kamu akan menerimanya", images:"img/valentine-cat.jpg"};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
function updateDisplay(item) {
    console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'YES') {
            title.textContent = "Yes Ma Baby gurll.. RAWRR"; // Mengubah teks h1
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
        
            // Membuat elemen iframe Spotify
            const spotifyIframe = document.createElement("iframe");
            spotifyIframe.style.borderRadius = "12px";
            spotifyIframe.src = "https://open.spotify.com/embed/track/030OCtLMrljNhp8OWHBWW3"; 
            spotifyIframe.width = "300";
            spotifyIframe.height = "80";
            spotifyIframe.frameBorder = "0";
            spotifyIframe.allowTransparency = "true";
            spotifyIframe.allow = "autoplay; encrypted-media";
        
            // Menambahkan iframe ke dalam body
            document.body.appendChild(spotifyIframe);
        
            // **Trik agar lagu otomatis diputar**
            setTimeout(() => {
                spotifyIframe.src += "?autoplay=1"; // Tambahkan parameter autoplay setelah iframe ditambahkan
            }, 1000); // Beri jeda 1 detik agar iframe ter-load dulu
        }
        
        
        if (button.textContent === 'NO'){
            count++;
            if(count < alternatives.length){
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});