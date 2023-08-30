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
function calc() {
    let pesoTotal = Number(chassi.value) + Number(reboque.value) + Number(outrosEqui.value);   //Peso total do veículo:

    let cargaUtil = Number(pesoBruto.value) - pesoTotal // Carga útil do veículo
    
    let viagensMensais = Number(qntd.value) / 30  //Número de viagens mensais

    /* Tempo total de viagem */
    let tempoIda = (Number(distanciaPerIda.value) / Number(velOperacionalIda.value)) * 60
    let tempoVolta = (Number(distanciaPerVolta.value) / Number(velOperacionalVolta.value)) * 60
    let totalViagem = Number(tempoIda) + Number(tempoVolta) + Number(tempoD.value) + Number(tempoC.value)
    

    let tempoDiaOperacao = Number(tDiario.value) * Number(jornada.value) * 60; // Tempo diário de operação


    let viagensDia = Number(tempoDiaOperacao) / Number(totalViagem) //Número de viagens de um veículo por dia

    let diasDisponiveiMes = Number(diasUteis.value) - Number(manutencao.value) //Calculo do número total de dias disponíveis por mês

    let viagensMensaisVeiculo = Number(viagensDia) * Number(diasDisponiveiMes) //Número de viagens mensais de um veículo
    
    let frotaNecessaria = Math.ceil (Number(viagensMensais) / Number(viagensMensaisVeiculo)) //Calculo da frota necessária

    


    let newDiv = document.createElement('div')
    newDiv.classList("divFilho")
    newDiv.innerHTML=`
    
    <h3>"peso total: "${pesoTotal}</h3>
    <h3>"carga útil: "${cargaUtil}</h3>
    <h3>"Viagens Mensais: "${viagensMensais}</h3>
    <h3>"Tempo de ida: "${tempoIda}</h3>
    <h3>"Tempo de volta: "${tempoVolta}</h3>
    <h3>"Total da viagem:"${totalViagem}</h3>
    <h3>"Tempo Diario de operação :  "${tempoDiaOperacao}</h3>
    <h3>"Número de viagens de um veículo por dia :  "${viagensDia}</h3>
    <h3>"Calculo do número total de dias disponíveis por mês: "${diasDisponiveiMes}</h3>
    <h3>"Número de viagens mensais de um veículo: "${viagensMensaisVeiculo}</h3>
    <h3>"peso total: "${frotaNecessaria}</h3>
    `
    divPai.appendChild(newDiv)



    
   /*  alert( +
        "\ncarga útil: " + cargaUtil +
        "\n " +  +
        "\nTempo de ida: " + tempoIda +
        "\nTempo de volta: " + tempoVolta +
        "\nTotal da viagem: " + totalViagem +
        "\nTempo Diario de operação : " + tempoDiaOperacao+
        "\nNúmero de viagens de um veículo por dia :  "+viagensDia+
        "\nCalculo do número total de dias disponíveis por mês: "+diasDisponiveiMes+
        "\nNúmero de viagens mensais de um veículo: "+viagensMensaisVeiculo+
        "\nFrota nescessaria: "+frotaNecessaria
        ) */
}
