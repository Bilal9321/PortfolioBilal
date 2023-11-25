const formbtn = document.getElementById('button23');

document.getElementById("form1").addEventListener("submit",function(event){
  event.preventDefault();
  formbtn.value = "sending...";

  const serviceId = "service_xqdkh0m";
  const templateId = "template_eihzypj";

  emailjs.send("service_xqdkh0m", "template_eihzypj", {
    to_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    // subject: document.getElementById("subject_one").value,
    message: document.getElementById("message").value,
  });

  emailjs.sendForm(serviceId, templateId, this).then(
    () => {
      formbtn.value = " Send Email";

      // alert('Mail Send Successfully Thank You!..')
      (function function3() {
        swal("Thank You!", "Mail Send Successfully!", "success");
      })();
    },
    (error) => {
      formbtn.value = " ";
      //   alert(JSON.stringify(error));
      (function function4() {
        error(
          swal(
            "Sorry!",
            "Opps, something went wrong. Please try again later.",
            "error"
          )
        );
      })();
    }
  );
});


// Owl Carosul 
$(document).ready(function(){
    $('.myCarousel').owlCarousel({
      items : 5,
      margin : 10,
      loop : true,
      nav : true,
      // dots : false,
      autoplay: true,
      autoplayHoverPause : true,
      smartSpeed : 100,
      responsive : {
        0 :
        {
          items : 1
        },
        768 : {
          items : 2
        },
        992 : {
          items : 3
        },
        1200 : {
          items : 5
        }
      }
    });
  
    $('.owl-prev').empty().append('<i class="bi bi-arrow-left-square-fill"></i>');
    $('.owl-next').empty().append('<i class="bi bi-arrow-right-square-fill"></i>');
  });
  


// Scroll to the Top Button
document.addEventListener("DOMContentLoaded", function () {
    var arrowUpButton = document.getElementById("arrow-up");

    // Scroll to the top when the arrow-up button is clicked
    arrowUpButton.addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});

// Data Group
function filterProjects(category) {
  const projectItems = document.querySelectorAll('.project-item');
  
  projectItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');

      if (category === 'all' || itemCategory === category) {
          item.style.display = 'block';
      } else {
          item.style.display = 'none';
      }
  });
}
  

// Home Slide Effect
const canvas = document.getElementById('image-canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = 'images/bilal.jpg';

img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;

    const reveal = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw random shapes to reveal the image
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * Math.min(canvas.width, canvas.height);
        
        ctx.fillRect(x, y, size, size); // You can use other shape-drawing methods here

        if (canvas.width < img.width) {
            requestAnimationFrame(reveal);
        }
    };

    reveal();
};



// })