const seats = document.querySelectorAll("#seat span")

seats.forEach(function (seat){
    seat.addEventListener("click", function(e){
        e.target.classList.toggle("bg-[#1DD100]")
    })
});