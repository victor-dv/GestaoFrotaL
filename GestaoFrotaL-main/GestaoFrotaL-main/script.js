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

 const bootao = document.querySelector('.btn-primary').addEventListener ('click', ()=> {
    let pesoTotal =(Number(chassi.value) + Number(reboque.value) + Number(outrosEqui.value));

    let cargaUtil =(Number(pesoBruto.value) - pesoTotal);

    let viagensMensais =(Number(qntd.value) / 30);

    let tempoIda =((Number(distanciaPerIda.value) / Number(velOperacionalIda.value)) * 60);
    let tempoVolta =((Number(distanciaPerVolta.value) / Number(velOperacionalVolta.value)) * 60);
    let totalViagem =(Number(tempoIda) + Number(tempoVolta) + Number(tempoD.value) + Number(tempoC.value));

    let tempoDiaOperacao =(Number(tDiario.value) * Number(jornada.value) * 60);

    let viagensDia =(Number(tempoDiaOperacao) / Number(totalViagem));

    let diasDisponiveiMes =(Number(diasUteis.value) - Number(manutencao.value));

    let viagensMensaisVeiculo =(Number(viagensDia) * Number(diasDisponiveiMes));

    let frotaNecessaria = Math.ceil(Number(viagensMensais) / Number(viagensMensaisVeiculo));

    resultadoH2++;

    let newDiv = document.createElement('div');
    
    newDiv.innerHTML=`

      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Resultado ${resultadoH2} </h5>
        <button type="button" class="btn-close remove" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
        <h6>Tipo da carga: ${tipo.value}</h6>
        <h6>Carga útil: ${cargaUtil}</h6>
        <h6>Viagens Mensais: ${viagensMensais}</h6>
        <h6>Total da viagem:${totalViagem}</h6>
        <h6>Frota Total: ${frotaNecessaria}</h6>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary remove" data-bs-dismiss="modal">Close</button>
        <button id="fav "type="button" class="btn btn-primary">Save in Favorites</button>
      </div>

 
    `;

    divPai.appendChild(newDiv);

    let favoritos = [];




  const removeButtons = document.querySelectorAll(".remove");
  removeButtons.forEach(button => {
    button.addEventListener('click', () => {
      newDiv.innerHTML = '';
  });
});

  const save = document.querySelector("fav")

  for (let index = 0; index < save.length; index++) {

    save[index].addEventListener('click', () => {
        console.log(save[index].resultadoH2)

     const myFav =   save.find(element => element.id == save[index].resultadoH2 )
        favoritos.push(myFav)
    })
    // document.getElementById(btnFav[index].value).addEventListener('click', console.log("ok"))
}
  

    
}
 )
 




