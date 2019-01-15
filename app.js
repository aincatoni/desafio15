$(function(){

  var dolar = $('#dolar');
  var euro = $('#euro');
  var utm = $('#utm');
  var uf = $('#uf');

  
  var url = 'https://mindicador.cl/api';
  var datos = {};
  var monto = {};


  $(function (){

    $.ajax({
      url: url,
      method:'GET',
    }).then(function(data){
      datos = data;
      console.log((data.dolar.valor).toFixed(0),(data.euro.valor).toFixed(0),(data.utm.valor).toFixed(0),(data.uf.valor).toFixed(0));
      dolar.text((data.dolar.valor).toFixed(0));
      euro.text((data.euro.valor).toFixed(0));
      utm.text((data.utm.valor).toFixed(0));
      uf.text((data.uf.valor).toFixed(0));
    })

  });

  $('#convert').on('click', function(){
  
    monto = $('input').val()
    resultado = monto / datos.dolar.valor;
    
    $('#converted-usd').text(resultado.toFixed(2));
    resultado = monto / datos.euro.valor;
    $('#converted-eur').text(resultado.toFixed(2));
    resultado = monto / datos.utm.valor;
    $('#converted-utm').text(resultado.toFixed(2));
    resultado = monto / datos.euro.valor;
    $('#converted-uf').text(resultado.toFixed(2));

  });
  
});


