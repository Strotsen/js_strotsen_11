// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        else{event.preventDefault()
            const numero = document.querySelector ('#validationCustom01').value;
            const parrafo = document.querySelector ('#parrafo')
            parrafo.innerHTML = numero;

        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()




const valorTicket=200;

const descuntoEstudiante=0.80;
const descuntoTrainee=0.50;
const descuntoJunior=0.15;

const cantidad =document.getElementById ('cantidad');
const categoria =document.getElementById('categoriaSelect');
const botonCalcular =document.getElementById('Calcular');
const botonReset =document.getElementById ('reset');
const parrafo = document.getElementById ('p');


function totalPagar (){
let totalValor =(cantidad.value)*valorTicket;
if(categoria.value ==0){
    totalValor = totalValor ;
}

if(categoria.value ==1){
    totalValor = totalValor - (totalValor *descuntoEstudiante);
}

if(categoria.value ==2){
    totalValor = totalValor - (totalValor *descuntoTrainee);
}if(categoria.value ==3){
    totalValor = totalValor - (totalValor *descuntoJunior);
}


parrafo.innerHTML = ` Total a pagar : ${totalValor}`;




}
botonCalcular.addEventListener(`click`,totalPagar);
botonReset.addEventListener(`click`,()=>{
    parrafo.textContent=`Total a pagar`;
});