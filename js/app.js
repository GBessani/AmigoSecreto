let listaDeParticipantes = [];
function adicionar()
{
    let nome = document.getElementById('nome-amigo');
    if(nome.value == ''){alert('informe um nome!')
        return
    }
        listaDeParticipantes.push(nome.value);
        let listaDeAmigos = document.getElementById('lista-amigos');
        listaDeAmigos.innerHTML = listaDeParticipantes;
        nome.value = '';
}
function sortear()
{
    embaralhar(listaDeParticipantes);
    let sorteio = document.getElementById('lista-sorteio')
    
    for(let i = 0;i<listaDeParticipantes.length;i++)
    {  
        if(i == listaDeParticipantes.length - 1)
        {sorteio.innerHTML = sorteio.innerHTML + listaDeParticipantes[i] + ' --> ' + listaDeParticipantes[0] + '<br>';}
        else{sorteio.innerHTML = sorteio.innerHTML + listaDeParticipantes[i] + ' --> ' + listaDeParticipantes[i+1] + '<br>'}
    }
}
function embaralhar(lista)
{
    for(let indice = lista.length ; indice ; indice--)
    {
        const indiceAleatorio = Math.floor(Math.random()*indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio],lista[indice - 1]];
    }
}
function reiniciar()
{
   listaDeParticipantes = [];
   console.log(listaDeParticipantes)
   listaDeAmigos = document.getElementById('lista-amigos').innerHTML = '';
   sorteio = document.getElementById('lista-sorteio').innerHTML = '';
}