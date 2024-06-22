// switch

let hora = 19

switch (hora) {
  case 9:
    console.log('Horário de começar o trabalho!')
    break;
  case 18:
    console.log('Expediente finalizado!')
    break;
  default:
    console.log('Horário não especificado!')
}

let temperatura = 31

switch (true) {
  case temperatura < 20:
    console.log('Está frio')
    break;
  case temperatura >= 20 && temperatura <= 30:
    console.log('Está agradavel')
    break;
  case temperatura >= 30:
    console.log('Está quente')
    break;
}
