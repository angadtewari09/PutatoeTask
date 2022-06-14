let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const findMyState = () => {

    let location;
    function success(position) {
     
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
        fetch(geoApiUrl)
            .then(res => res.json())
            .then(data => {
                const location =`${data.localityInfo.administrative[3].name}, ${data.localityInfo.administrative[2].name}, ${data.localityInfo.administrative[1].name}, ${data.localityInfo.administrative[0].name}  `
                document.querySelector(".current-location").innerHTML = location;
                
            });
            
    }
    const error = () => {
        console.log('Unable to reach location!')
    }
    navigator.geolocation.getCurrentPosition(success , error);
}