
//navbar toggler 
let navToggler = document.getElementById('navbar-toggler');

let navCollapse = document.querySelector('.navbar-collapse');

navToggler.addEventListener('click', () => {
    navCollapse.classList.toggle('showNav');
});

//navbar links on click (bug fix)
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();

        const targetURL = link.getAttribute("href");

        window.location.href = targetURL;
      });
    });
  });
  

// smooth scroll function on click
const navbar = document.querySelector('.navbar-nav');

navbar.addEventListener('click', clickHandler);

function clickHandler(e) {
    const clickedElement = e.target.closest('.nav-item');
    
    if (clickedElement && clickedElement.matches('.nav-item')) {
        e.preventDefault();
        
        const href = clickedElement.firstElementChild.getAttribute('href');

        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// description box for practice areas image onclick function
document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.content-item');
  const descriptionBox = document.getElementById('desc');

  items.forEach(item => {
      item.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent the default behavior of the anchor link
          
          const itemId = item.getAttribute('id');
          let description = '';

          switch (itemId) {
              case 'Content1':
                  description = 'Our firm safeguards creative works, inventions, and brands. We provide legal expertise in patents, copyrights, trademarks, and trade secrets, ensuring your innovations and assets are legally protected and defended.';
                  break;
              case 'Content2':
                  description = 'Our firm offers comprehensive technology and communication law services. We specialize in legal matters related to digital innovation, data privacy, cybersecurity, and telecommunications regulations, ensuring your business operates seamlessly within the complex realm of technology and communication.';
                  break;
              case 'Content3':
                  description = 'Our firm provides comprehensive criminal law services, defending your rights and interests. We specialize in representing individuals facing criminal charges, offering expert legal counsel, and ensuring fair and just legal proceedings.';
                  break;
              case 'Content4':
                  description = 'We offer skilled civil and dispute resolution services, guiding clients through legal complexities. Our expertise encompasses diverse cases, from contractual disputes to personal injury claims, ensuring effective solutions and favorable outcomes.';
                  break;
              case 'Content5':
                  description = 'Our firm specializes in family law, trust, wills, and probate matters, providing compassionate guidance during sensitive life transitions. We ensure comprehensive legal support for family-related issues and effective estate planning to secure your legacy.';
                  break;
              case 'Content6':
                  description = 'We offer expert building, engineering, and construction law services, ensuring compliance, resolving disputes, and safeguarding your construction projects. Our legal team navigates complex regulations to deliver successful outcomes for your ventures.';
                  break;
              case 'Content7':
                  description = 'Our law firm specializes in commercial law and conveyancing services, facilitating seamless transactions and providing strategic legal counsel. We ensure smooth business operations and guide clients through property transfers and real estate transactions.';
                  break;
              case 'Content8':
                  description = 'We provide expert bankruptcy and insolvency legal services, offering guidance and solutions for financial challenges. Our firm navigates complex legalities to assist clients in managing debt, restructuring, and achieving a fresh financial start.';
                  break;
              case 'Content9':
                  description = 'Our law firm specializes in tort law, advocating for clients affected by personal injuries, negligence, and civil wrongs. We pursue just compensation and remedies to restore your rights and well-being.';
                  break;
              case 'Content10':
                  description = 'We offer defamation law expertise, protecting individuals and businesses from false statements that harm reputation. Our legal team ensures fair compensation and remedies for damages caused by defamation.';
                  break;
              case 'Content11':
                  description = 'Our firm provides comprehensive insurance law services, guiding clients through complex coverage issues, claims, and disputes. We ensure fair treatment and favorable outcomes in insurance-related legal matters.';
                  break;
              case 'Content12':
                  description = 'We specialize in land law and dispute resolution, offering legal support for property ownership, boundaries, and real estate conflicts. Our team ensures effective solutions and peaceful resolutions for land-related issues.';
                  break;
          }

          descriptionBox.textContent = description;
      });
  });
});

// lawyers image show description on click
function toggleDescription(imgElement) {
  const description = imgElement.parentNode.nextElementSibling.querySelector('.hidden-description');

  description.classList.toggle('show');
}



