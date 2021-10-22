/** Test Pop-Up */
$("h1").click(function(){
  alert("Hi");
});

/** KLICK MICH!-Button */
$(".button-einleitung").click(function(){
  $("section").toggleClass("rotated");
});

/** Galerie 1 */
$(".img-wrap").on("click", function(){
  $(this).toggleClass("lightbox");
});

/** Galerie 2 */
$("#galerie-2").on("click", ".zurueck" ,function(){
  $(this).parent(".img-wrap").removeClass("lightbox");
  $(this).parent(".img-wrap").prev(".img-wrap").addClass("lightbox");
});

$("#galerie-2").on("click", ".weiter", function(){
  $(this).parent(".img-wrap").removeClass("lightbox");
  $(this).parent(".img-wrap").next(".img-wrap").addClass("lightbox");
});

/** Farbwechsel */
$(".farbwechsel-button").click(function(){
  $(".farbwechsel").toggleClass("blau");
});

/** Ein- und Ausklappen */
$(".ausklapp-titel").click(function(){
  $(this).next(".ausklapp-liste").toggle(300);
});


/** Chart */
Chart.defaults.font.family = "'Source Sans Pro', 'Fira Sans', sans-serif";
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [{
            label: '# of Votes',
            data: [12, 10, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
