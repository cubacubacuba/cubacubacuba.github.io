// Code adapted from [Snippets Code] by [Snippetsdevelop]


window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");  // Corrected to target .header
    header.classList.toggle("sticky", window.scrollY > 0);
})

// Function to handle the click event for all devices
function setupClickAnimation(containerClass, centerClass, leftSpecClass, rightSpecClass) {
    document.querySelector(containerClass).addEventListener('click', function () {
        const centerImage = this.querySelector(centerClass);
        const leftSpecs = this.querySelector(leftSpecClass);
        const rightSpecs = this.querySelector(rightSpecClass);

        // Toggle enlarged class for the image
        centerImage.classList.toggle('enlarged');

        // Show or hide specifications based on image size
        if (centerImage.classList.contains('enlarged')) {
            leftSpecs.style.display = 'block';
            rightSpecs.style.display = 'block';
            
            // After 3 seconds, return to normal size
            setTimeout(function () {
                centerImage.classList.remove('enlarged');
                leftSpecs.style.display = 'none';
                rightSpecs.style.display = 'none';
            }, 10000); // 3000ms = 3 seconds
        } else {
            leftSpecs.style.display = 'none';
            rightSpecs.style.display = 'none';
        }
    });
}

// Apply the function to laptop, phone, and iPad
setupClickAnimation('.laptopDisplay', '.laptopCenter', '.specs.leftSpecs', '.specs.rightSpecs');
setupClickAnimation('.phoneDisplay', '.phoneCenter', '.Phonespecs.leftSpecs', '.Phonespecs.rightSpecs');
setupClickAnimation('.ipadDisplay', '.ipadCenter', '.Ipadspecs.leftSpecs', '.Ipadspecs.rightSpecs');

// Function to observe elements and apply the animation
function animateOnScroll(elements) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.4 }); // Trigger when 40% visible
  
    elements.forEach(element => observer.observe(element));
  }
  
  // Target titles
  document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll('.titlelaptop, .titlephone, .titleipad');
    animateOnScroll(titles);
  });
// Array of colors to cycle through
const colors = ['#000000', '#FFC0CB', '#FFFFFF']; // Black, Pink, White

    // Function to cycle through colors with smooth transition
    function changeColor(elements, colors) {
      let index = 0;
      setInterval(() => {
        elements.forEach((element) => {
          element.style.color = colors[index];  // Set the color
        });
        index = (index + 1) % colors.length;    // Move to the next color
      }, 2000); // Change color every 2 seconds
    }

    // Apply the function after the DOM loads
    document.addEventListener("DOMContentLoaded", () => {
      const titles = document.querySelectorAll('.titlelaptop, .titlephone, .titleipad');
      changeColor(titles, colors);
    });

    let cards = document.querySelectorAll(".card");
      let stackArea = document.querySelector(".stack-area");

      function rotateCards() {
        let angle = 0;
        cards.forEach((card) => {
          if (card.classList.contains("active")) {
            card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
          } else {
            card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
            angle = angle - 10;
          }
        });
      }

      rotateCards();

      window.addEventListener("scroll", () => {
        let proportion =
          stackArea.getBoundingClientRect().top / window.innerHeight;
        if (proportion <= 0) {
          let n = cards.length;
          let index = Math.ceil((proportion * n) / 2);
          index = Math.abs(index) - 1;
          for (let i = 0; i < n; i++) {
            if (i <= index) {
              cards[i].classList.add("active");
            } else {
              cards[i].classList.remove("active");
            }
          }
          rotateCards();
        }
      });

      //Code for responsiveness

      function adjust() {
        let windowWidth = window.innerWidth;
        let left = document.querySelector(".left");
        left.remove();
        if (windowWidth < 800) {
          stackArea.insertAdjacentElement("beforebegin", left);
        } else {
          stackArea.insertAdjacentElement("afterbegin", left);
        }
      }
      adjust();

      //detect Resize

      window.addEventListener("resize", adjust);
  

  