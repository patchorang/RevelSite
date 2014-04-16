$(document).ready(function() {

  $(".mock-output").each(function(index){
    var outputFieldID = $(this).attr('id');
    if (params[outputFieldID]) {
      $("#" + outputFieldID).text(decodeURIComponent(params[outputFieldID]));
      delete params[outputFieldID];
    }
  }); 

  $("a.mock-link").click(function(e){
    e.preventDefault();
    var targetUrl = e.currentTarget.href;
    
    // Get all the mock-input data
    $(".mock-input").each(function(index){
      params[$(this).attr('id')] = $(this).val();
    });

    var mockDataString = "";
    $.each(params, function(key, value) {
      mockDataString += key + "=" + value + "&";
    });

    mockDataString = mockDataString.substr(0, mockDataString.length - 1);
    console.log(mockDataString);

    window.location = targetUrl + "?" + mockDataString;
  });

});

// From: https://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript
function getSearchParameters() {
      var prmstr = window.location.search.substr(1);
      return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

var params = getSearchParameters();

