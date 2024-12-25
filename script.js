const seat = document.getElementById('s')

seat.addEventListener("click", function highlightSeat(e){
    e.target.classList.toggle('bg-orange-400');
 })