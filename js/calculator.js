$ (function(){
    function hideDiv() {
        $("#xdiv").hide();
        $("#ydiv").hide();
        $("#zdiv").hide();
      }
    hideDiv();
    $("#gas").on("click",function(){
        hideDiv();
        $("#xdiv").show();
        $("#ydiv").show();
        $("#promX").html("Zadej spotřebované palivo (počet litrů)");
        $("#promY").html("Zadej ujetou vzdálenost   (počet km)");
    })
    $("#tank").on("click",function(){
        hideDiv();
        $("#xdiv").show();
        $("#ydiv").show();
        $("#promX").html("Zadej objem nádrže (v litrech)");
        $("#promY").html("Zadej cenu benzínu/nafty (v l/kč)");
    })
    $("#trip").on("click",function(){
        hideDiv();
        $("#xdiv").show();
        $("#ydiv").show();
        $("#zdiv").show();
        $("#promX").html("Zadej počet kilometrů"); 
        $("#promY").html("Zadej průměrnou spotřebu paliva (1l/100km)");
        $("#promZ").html("Zadej cenu benzínu/nafty (v l/kč)");
    })
    let calc = {
        Sgas:function(){
            return (this.x / this.y)*100
        },
        Stank:function(){
            return (this.x * this.y)
        },
        Strip:function(){
            return ((this.x/100)*this.y)*this.z
        }
    }
    $("#button").on("click", function(){
        if ($('#gas').is(':checked')) {
            calc.x=$("#x").val();
            calc.y=$("#y").val();
            $("#result").html(`Průměrná spotřeba je: ${calc.Sgas().toFixed(2)} l/100km`)
        }
        if ($('#tank').is(':checked')) {
            calc.x=$("#x").val();
            calc.y=$("#y").val();
            $("#result").html(`Cena plné nádrže činí ${calc.Stank().toFixed(2)} Kč`)
        }
        if ($('#trip').is(':checked')) {
            calc.x=$("#x").val();
            calc.y=$("#y").val();
            calc.z=$("#z").val();
            $("#result").html(`Cena paliva za cestu je ${calc.Strip().toFixed(2)} Kč`)
        }
    })
});