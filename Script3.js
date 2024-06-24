function calcularestabosta() {
    var velocidade = (document.getElementById('velocidade').value);
    var metrosporsegundo = velocidade / 3.6;
    var horas = 435 / velocidade;

    
    document.write("A velocidade convertida para m/s será de: " + metrosporsegundo + " m/s. Demorará cerca de " + horas+ " horas para chegar ao seu destino.");
}
