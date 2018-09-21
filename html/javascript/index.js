function onloadcurrency() {
    var from = document.getElementById('from')
    var to = document.getElementById('to')
    var xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function () {
        if (xHttp.readyState == 4 && xHttp.status == 200) {
            var obj = JSON.parse(this.responseText);
            var options = "";
            for (key in obj.rates) {
                options = options + "<option>" + key + "</option>";
            }
            from.innerHTML = options;
            to.innerHTML = options;
        }
    }
    xHttp.open('GET', 'https://api.exchangeratesapi.io/latest?base=USD ', true);
    xHttp.send();


}

function convertCurrency() {

    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var amount = document.getElementById('amount').value;
    var result = document.getElementById('result');

    if (from.length > 0 && to.length > 0 && amount.length > 0) {
        var xHttp = new XMLHttpRequest();
        xHttp.onreadystatechange = function () {
            if(xHttp.readyState==4 && xHttp.status==200){
                var obj=JSON.parse(this.responseText);
                var fact=obj.rates[to];
                if(fact !=undefined){
                    result.innerHTML=parseFloat(amount)*parseFloat(fact).toFixed(1)
                }
                
            }
            
         }
        xHttp.open('GET', 'https://api.exchangeratesapi.io/latest?base=' + from + '&symbols=' + to, true);
        xHttp.send();
    
        console.log('Tulosta määrä');

    }




}
