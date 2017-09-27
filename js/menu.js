document.querySelector( "#menu" )
  .addEventListener( "click", function() {
    this.classList.toggle( "open" );
           document.querySelector(".nav").classList.toggle("open");

  document.querySelector("#menu-text").classList.toggle("open");
  });
