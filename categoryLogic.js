function loadSchemes(category) {
    var output = "<h2>Available Schemes</h2>";

    var schemes = schemesData[category];

    for (var i = 0; i < schemes.length; i++) {
        output += "<p><b>" + schemes[i].name + "</b><br>";
        output += "Eligibility: " + schemes[i].eligibility + "<br>";
        output += "Benefit: " + schemes[i].benefit + "</p><hr>";
    }

    document.getElementById("schemeResult").innerHTML = output;
}
