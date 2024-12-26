
const seats = document.querySelectorAll("#seat span");
const seatname = document.getElementById("seat-name");
const seatPrice = document.getElementById("seat-price");
const seatCount = document.getElementById("seat-count");
const seatLeft = document.getElementById("available-seat");
const cuponVal = document.getElementById("cupon");
const grandPrice = document.getElementById("grand-price");
const applyBtn = document.getElementById("apply");
const applySec = document.getElementById("apply-sec")
const passengerName = document.getElementById("p-name").value;

let seatarr = [];
let seatC = 0;
let seatAvail = 40;
let pricecal = 0; // Move price calculation to global scope for accessibility

// Seat selection logic
seats.forEach(function (seat) {
    seat.addEventListener("click", function (e) {
        e.target.classList.toggle("bg-[#1DD100]");

        if (seat.classList.contains("bg-[#1DD100]")) {
            seatarr.push(seat.textContent.trim());
        } 
       
        seatname.textContent = seatarr.join(", ");

        if(seatarr.length>4){
            alert("You can't select more than 4 seat")
            seatarr.pop()
        }

        seatC = seatarr.length;
        seatAvail = 40 - seatarr.length;

        // Update seat count and availability
        seatCount.textContent = seatC;
        seatLeft.textContent = seatAvail;

       
        pricecal = 550 * seatarr.length;
        seatPrice.textContent = pricecal;
    });
});

// Coupon application logic
applyBtn.addEventListener("click", function () {
    const couponValue = cuponVal.value.trim();
    let finalPrice = pricecal;

    if (couponValue === "NEW15") {
        finalPrice = pricecal * 0.5;
        applySec.classList.add("hidden") 
    } else if (couponValue === "COUPLE20") {
        finalPrice = pricecal * 0.80;
        applySec.classList.add("hidden")
    }

    grandPrice.textContent = finalPrice.toFixed(2); 
});

function hideHome(){
        const home1 = document.getElementById("main-1")
        const home2 = document.getElementById("home-2")
        home1.classList.add("hidden")
        home2.classList.remove("hidden")
}

function hideScondHome(){
    const home1 = document.getElementById("main-1")
        const home2 = document.getElementById("home-2")
        home1.classList.remove("hidden")
        home2.classList.add("hidden")
}