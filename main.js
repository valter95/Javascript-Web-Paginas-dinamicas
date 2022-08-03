function TocaSom(IdElementoAudio)
{
    const elemento = document.querySelector(IdElementoAudio);

    if(elemento != null && elemento.localName === 'audio')
    {
        elemento.play;
    }
    else
    {
        alert("Elemento não encontrado");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador <listaDeTeclas.length; contador ++)
{
    const tecla =  listaDeTeclas[contador];

    const instrumento = tecla.classList[1];
    tecla.onclick = function () {
        TocaSom(`#som_${instrumento}`);
    };

    tecla.onkeydown =  function(evento)
    {
        if(evento.code === 'Enter' || evento.code === 'Space'){
        tecla.classList.add('ativa');
        };
    }
    tecla.onkeyup =  function(evento)
    {
       
        tecla.classList.remove('ativa');
        
    }
}