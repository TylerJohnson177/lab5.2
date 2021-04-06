$(document).ready(function ()
{
    $("input#JQuery").on("change", updatePrice);
    $("input#donation").on("change", updatePrice);
});

function updatePrice()
{
    //Gather information from the user//

    let JQueryCount = parseInt( $("#JQuery").val() );
    let donationCount = parseInt( $("#donation").val() );

    //Run the calculations//

    let JQueryPrice = JQueryCount * 39.99;
    let donationPrice = donationCount * 14.99;
    let grandTotal = JQueryPrice + donationPrice;

    //Print the information//

    $("td#totalLearning").text(`$${JQueryPrice}`);
    $("td#totalDonation").text(`$${donationPrice}`);
    $("p#grandTotal").text(`$${grandTotal}`);


}