$(function(){

  var resumen = $('#resumen');
  var sensacion = $('#sensacion');
  var probabilidad = $('#probabilidad');
  var humedad = $('#humedad');
  var imagen = $('.img-fluid');
  var escondido = $('#escondido');

  
  var url = 'https://api.darksky.net/forecast/';
  var key = 'eabc331b530963da3feb3722e2228f4a';
  var coords = {
    scl: '-33.4488897,-70.6692655',
    ccp: '-36.8201352,-73.0443904'
  }

  var queryParams = ['?exclude=[minutely,hourly,daily,alerts,flags]', 'lang=es', 'units=auto'];
  var image = {
  'clear-day':'img/sunnys.svg',
  'rain':'img/rain.svg',
  'partly-cloudy-day': 'img/cloudy.svg'
  }




  $('#select').on('change', function (){

    $.ajax({
      url: url + key + '/' + coords[$(this).val()] + '?' + queryParams[0] + '&' + queryParams[1] + '&' + queryParams[2],
      method:'GET',
    }).then(function(data){
      resumen.text(parseInt(data.currently.temperature) + 'º ' + data.currently.summary);
      sensacion.text(data.currently.apparentTemperature);
      probabilidad.text(data.currently.precipProbability * 100 + '%');
      humedad.text(data.currently.humidity * 100 + '%');
      imagen.attr('src',image[data.currently.icon]);
      escondido.removeAttr('hidden', data.curre);
    })

  });
  
});


