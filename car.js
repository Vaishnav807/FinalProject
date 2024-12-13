const images = [
    "https://purepng.com/public/uploads/large/purepng.com-red-porsche-911-gt3-rs-4-carcarvehicletransportporsche-961524661235vbivb.png",
    "https://pngimg.com/d/nissan_PNG52.png",
    "https://www.pngarts.com/files/8/Ferrari-SF90-Stradale-PNG-Image-Background.png",
    "https://images.carprices.com/pricebooks_data/usa/colorized/2025/BMW/View2/M8_Competition_Coupe/4.4L/258F_300.png",
    "https://www.real-luxury.com/media/tz_portfolio_plus/article/cache/noleggio-mclaren-720s-53-1_o.png"
];

let currentIndex = 0;

let imgElement = document.getElementById("pic1");

updateImage();

function updateImage(){
    imgElement.src = images[currentIndex];
}

function prevButton(){
    if(currentIndex > 0){
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }
    updateImage();
}

function nextButton(){
    console.log("Next button clicked");
    console.log(currentIndex)
    if(currentIndex < images.length - 1){
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateImage();
} 
