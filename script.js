
const seats = document.querySelectorAll("#seat span");
const seatname = document.getElementById("seat-name");
const seatPrice = document.getElementById("seat-price");
const seatCount = document.getElementById("seat-count");
const seatLeft = document.getElementById("available-seat")

let seatarr = [];
let seatC = 0;
let seatAvail = 40;

seats.forEach(function (seat) {
    seat.addEventListener("click", function(e) {
        e.target.classList.toggle("bg-[#1DD100]");

        if (seat.classList.contains("bg-[#1DD100]")) {
            seatarr.push(seat.textContent.trim());
            
            
        } else {
            const index = seatarr.indexOf(seat.textContent.trim());
            if (index > -1) {
                seatarr.splice(index, 1);
                
            }
        }

        // Update the seat names
        seatname.textContent = seatarr.join(", ");
        
        seatC = seatarr.length;
        seatAvail = 40 - seatarr.length;

        // update seatcount
        seatCount.textContent = seatC

        seatLeft.textContent = seatAvail;

        // Calculate the price based on the number of selected seats
        const pricecal = 550 * seatarr.length;
        seatPrice.textContent = pricecal;

        
    

    });
});
