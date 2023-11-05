// Responsive Header Js ==============
function header_adj() {
	if ($(window).width() < 991.98) {
		var header_height = $(".main_header").outerHeight();
		$(".nav-wrap .nav-list").css({ "padding-top": header_height + "px" });
	} else {
		$(".nav-wrap .nav-list").css({ "padding-top": "0" });
	}
}
function submenu_toggle() {
	if ($(window).width() < 991.98) {
		$(".nav-list li.with-submenu")
			.off()
			.click(function () {
				$(this).toggleClass("is-open");
				$(".submenu").slideToggle("slow");
			});
	}
}
$(document).ready(function () {
	header_adj();
	submenu_toggle();
	if ($(window).width() < 991.98) {
		$(".h_hamburger")
			.off()
			.click(function () {
				$(this).toggleClass("is-active");
				$("body,html").toggleClass("sidebar-open");
				$(".nav-wrap").toggleClass("is-open");
			});

		$(".overlay")
			.off()
			.click(function () {
				$(".h_hamburger").removeClass("is-active");
				$("body,html").removeClass("sidebar-open");
				$(".nav-wrap").removeClass("is-open");
			});
	} else {
		$(".h_hamburger").removeClass("is-active");
		$("body,html").removeClass("sidebar-open");
		$(".nav-wrap").removeClass("is-open");
	}
});
$(window).on("resize", function () {
	header_adj();
	submenu_toggle();
	if ($(window).width() < 991.98) {
		$(".h_hamburger")
			.off()
			.click(function () {
				$(this).toggleClass("is-active");
				$("body,html").toggleClass("sidebar-open");
				$(".nav-wrap").toggleClass("is-open");
			});

		$(".overlay")
			.off()
			.click(function () {
				$(".h_hamburger").removeClass("is-active");
				$("body,html").removeClass("sidebar-open");
				$(".nav-wrap").removeClass("is-open");
			});
	} else {
		$(".hamburger").removeClass("is-active");
		$("body,html").removeClass("sidebar-open");
		$(".nav-wrap").removeClass("is-open");
	}
});

$(window).on('scroll',function() {
    if($(window).scrollTop()){
      $('.scroll-header').addClass('white');
    }
    else{
      $('.scroll-header').removeClass('white');
    }
    
  });
  

  // FAQ ====================

const accordionItemHeaders = document.querySelectorAll(
	".accordion-item-header"
  );
  
  accordionItemHeaders.forEach((accordionItemHeader) => {
	accordionItemHeader.addEventListener("click", (event) => {
	  // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
  
	  const currentlyActiveAccordionItemHeader = document.querySelector(
		".accordion-item-header.active"
	  );
	  if (
		currentlyActiveAccordionItemHeader &&
		currentlyActiveAccordionItemHeader !== accordionItemHeader
	  ) {
		currentlyActiveAccordionItemHeader.classList.toggle("active");
		currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
	  }
	  accordionItemHeader.classList.toggle("active");
	  const accordionItemBody = accordionItemHeader.nextElementSibling;
	  if (accordionItemHeader.classList.contains("active")) {
		accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
	  } else {
		accordionItemBody.style.maxHeight = 0;
	  }
	});
  });

  
// Back to top================

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
	if(!backToTopButton.classList.contains("btnEntrance")) {
	  backToTopButton.classList.remove("btnExit");
	  backToTopButton.classList.add("btnEntrance");
	  backToTopButton.style.display = "block";
	}
  }
  else { // Hide backToTopButton
	if(backToTopButton.classList.contains("btnEntrance")) {
	  backToTopButton.classList.remove("btnEntrance");
	  backToTopButton.classList.add("btnExit");
	  setTimeout(function() {
		backToTopButton.style.display = "none";
	  }, 250);
	}
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
	if (!start) start = timestamp;
	const progress = timestamp - start;
	window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
	if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};







// Image Paralax Effects===========
let myPanel = document.getElementById("panel");
let subpanel = document.getElementById("panel-container");

myPanel.onmousemove = transformPanel;
myPanel.onmouseenter = handleMouseEnter;
myPanel.onmouseleave = handleMouseLeave;

let mouseX, mouseY;

let transformAmount = 5;

function transformPanel(mouseEvent) {
	mouseX = mouseEvent.pageX;
	mouseY = mouseEvent.pageY;

	const centerX = myPanel.offsetLeft + myPanel.clientWidth / 2;
	const centerY = myPanel.offsetTop + myPanel.clientHeight / 2;

	const percentX = (mouseX - centerX) / (myPanel.clientWidth / 2);
	const percentY = -((mouseY - centerY) / (myPanel.clientHeight / 2));

	subpanel.style.transform =
		"perspective(400px) rotateY(" +
		percentX * transformAmount +
		"deg) rotateX(" +
		percentY * transformAmount +
		"deg)";
}

function handleMouseEnter() {
	setTimeout(() => {
		subpanel.style.transition = "";
	}, 100);
	subpanel.style.transition = "transform 0.1s";
}

function handleMouseLeave() {
	subpanel.style.transition = "transform 0.1s";
	setTimeout(() => {
		subpanel.style.transition = "";
	}, 100);

	subpanel.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
}





  
//   Contact Form Page 
document.querySelector("#contact-form").addEventListener("submit", (e) => {
	e.preventDefault();
	e.target.elements.name.value = "";
	e.target.elements.email.value = "";
	e.target.elements.message.value = "";
  });
  



