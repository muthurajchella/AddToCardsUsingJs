let moviesTickets = [
    {TicketNo:1, MovieName: "KGF", TheaterName: "Sathyam Cinemas", ShowTime: "11pm"},
    {TicketNo:2, MovieName: "RRR", TheaterName: "Ram Cinemas", ShowTime: "11am"},
    {TicketNo:3, MovieName: "VIKRAM", TheaterName: "Udhayam Cinemas", ShowTime: "2pm"},
    {TicketNo:4, MovieName: "LKG", TheaterName: "Escape Multiz", ShowTime: "5pm"},
    {TicketNo:5, MovieName: "PUSHPA", TheaterName: "Mayajaal Cinemas, ECR", ShowTime: "11pm"},
    
]

let yourTickets = [];

let getBtn1 = document.getElementById("btn1");
let getBtn2 = document.getElementById("btn2");
let getBtn3 = document.getElementById("btn3");
let getBtn4 = document.getElementById("btn4")

function bookTicket(TicketNo){
    let book = parseInt(prompt("Enter You'r Ticket Number"))
    let ticket = moviesTickets.find(function(item, index){
        return item.TicketNo === book;
    });
    let your= yourTickets.some(some => some.TicketNo === book)
    if(your){
        yourTickets.find(find =>{
            if(find.TicketNo===book){
                find.qty++
            }
        })
    }else{
        if(ticket){
            ticket.qty = 1;
            yourTickets.push(ticket);
        }
    }
    
    // console.log(yourTickets);
}getBtn1.addEventListener("click", bookTicket);

const yourTicket = (book) => {
    console.log("Your Booking Tickets :", yourTickets)
}; getBtn2.addEventListener("click", yourTicket);

const increment = () => {
    let book = parseInt(prompt("Enter You'r Ticket Number"))
    const addTicket = yourTickets.map((map) => {
        if(map.TicketNo === book){
            return{
                ...map,
                qty: map.qty++,
            };
        }else return map;
    });
    console.log("Added Ticket :", addTicket);
};getBtn3.addEventListener("click", increment);

const decrement = () => {
    let book = parseInt(prompt("Enter You'r Ticket Number"))
    const addTicket = yourTickets.map((map) => {
        if(map.TicketNo === book){
            return{
                ...map,
                qty: map.qty--,
            };
        }else return map;
    });
    console.log("Added Ticket :", addTicket);
};getBtn4.addEventListener("click", decrement);

console.log("Added Ticket :", addTicket);