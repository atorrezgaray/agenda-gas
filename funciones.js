function doGet(){

    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda GAS - Primera WebApp');

}

function obtenerDatosHTML(nombre){

  return HtmlService.createHtmlOutputFromFile(nombre).getContent();

}
