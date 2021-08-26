var bodyEl = $("#root");
var cardEl = $("<div>");
var startbuttonEl = $("#startbutton");


var titleEl = $("<h1>");

var isBegin = true;

function startbutton() {

    cardEl.attr("class","card");
    cardEl.attr("id","startbutton");
    titleEl.text("Start");
    cardEl.attr("style","margin-top:23%; margin-left:46%;")
    cardEl.append(titleEl);
    bodyEl.append(cardEl);
    
};
startbutton();

cardEl.on("click", function () {
    if (isBegin) {
        titleEl.text("Reset");
        cardEl.animate({
            marginTop: "1%"},
            1000);
        tvOn();
        isBegin = !isBegin
    } else {
        startbutton();
        $(".contentdiv").remove();

        isBegin = !isBegin;
    }
});

function tvOn() {
    var tvEl = $("<div>");
    var tvContent = $("<p>");
    var trekQuote = ["Captain Janeway: We're Starfleet officers. Weird is part of the job.","Tuvok: Vulcans do not dance.","Tuvok: You're in love with a computer subroutine?","Icheb: [looking at his tricorder readings after Blanna becomes disoriented] Im detecting another lifesign. Seven of Nine: [looking around engineering] Where? Icheb: Inside Lieutenant Torres, it might be a parasite. Seven of Nine: [tapping her comm badge to contact the doctor] Seven of Nine to the doctor, I will be accompanying Lieutenant Torres to sickbay. The Doctor: Whats wrong? Seven of Nine: I believe shes pregnant. Tom Paris: But a hologram is just a projection of light held in a magnetic containment field, theres no real matter involved. [the holographic doctor slaps Tom]"];

    tvEl.attr("class","card contentdiv");
    tvEl.attr("id","tvElement");

    tvContent.text(trekQuote[Math.floor(Math.random() * trekQuote.length)]);
    tvEl.append(tvContent);
    bodyEl.append(tvEl);
    //tvEl.animate({width:"50%"},10000);
    tvEl.animate({height: "50vh",paddingTop: "50px"}, 1000);
}