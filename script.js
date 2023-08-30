// Dados veiculo
const chassi = document.getElementById("chassi")
const pesoBruto = document.getElementById("pbt")
const reboque = document.getElementById("reboque")
const outrosEqui = document.getElementById("outrosEqui")
const velOpercionalIda = document.getElementById("velOperacionalIda")
const velOperacionalVolta = document.getElementById("velOperacionalVolta")
/* Dados Operacionais id */
const tempoD = document.getElementById("tempoD")
const tempoC = document.getElementById("tempoC")
const distanciaPerIda = document.getElementById("distanciaPerIda")
const distanciaPerVolta = document.getElementById("distanciaPerVolta")
const jornada = document.getElementById("jornada")
const tDiario = document.getElementById("tDiario")
const diasUteis = document.getElementById("diasUteis")
const manutencao = document.getElementById("manutencao")
//Dados da Carga
const tipo = document.getElementById("tipo")
const qntd = document.getElementById("qntd")

const divPai = document.getElementById("divPai")

let resultadoH2 = 0;

function calc() {
    let pesoTotal = Math.ceil(Number(chassi.value) + Number(reboque.value) + Number(outrosEqui.value));

    let cargaUtil = Math.ceil(Number(pesoBruto.value) - pesoTotal);

    let viagensMensais = Math.ceil(Number(qntd.value) / 30);

    let tempoIda = Math.ceil((Number(distanciaPerIda.value) / Number(velOperacionalIda.value)) * 60);
    let tempoVolta = Math.ceil((Number(distanciaPerVolta.value) / Number(velOperacionalVolta.value)) * 60);
    let totalViagem = Math.ceil(Number(tempoIda) + Number(tempoVolta) + Number(tempoD.value) + Number(tempoC.value));

    let tempoDiaOperacao = Math.ceil(Number(tDiario.value) * Number(jornada.value) * 60);

    let viagensDia = Math.ceil(Number(tempoDiaOperacao) / Number(totalViagem));

    let diasDisponiveiMes = Math.ceil(Number(diasUteis.value) - Number(manutencao.value));

    let viagensMensaisVeiculo = Math.ceil(Number(viagensDia) * Number(diasDisponiveiMes));

    let frotaNecessaria = Math.ceil(Number(viagensMensais) / Number(viagensMensaisVeiculo));

    resultadoH2++;

    let newDiv = document.createElement('div');
    newDiv.classList.add("resul");
    newDiv.innerHTML=`
    <h2>Resultado ${resultadoH2} </h2>
    <h3>Peso total: ${pesoTotal}</h3>
    <h3>Carga útil: ${cargaUtil}</h3>
    <h3>Viagens Mensais: ${viagensMensais}</h3>
    <h3>Tempo de ida: ${tempoIda}</h3>
    <h3>Tempo de volta: ${tempoVolta}</h3>
    <h3>Total da viagem:${totalViagem}</h3>
    <h3>Tempo Diario de operação :  ${tempoDiaOperacao}</h3>
    <h3>Número de viagens de um veículo por dia :  ${viagensDia}</h3>
    <h3>Calculo do número total de dias disponíveis por mês: ${diasDisponiveiMes}</h3>
    <h3>Número de viagens mensais de um veículo: ${viagensMensaisVeiculo}</h3>
    <h3>Tipo da carga: ${tipo.value}</h3>
    <h3>Peso total: ${frotaNecessaria}</h3>
    `;

    divPai.appendChild(newDiv);
}






