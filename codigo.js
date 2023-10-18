const ingrid = atletas[0];


const body =document.body;
const div_container = document.createElement('div');
div_container.id = 'container';
body.appendChild(div_container);

const cria_cartao = (atleta) =>{



const container_atleta = document.createElement('div');
const titulo = document.createElement('h3');
titulo.innerHTML = atleta.nome;
const imagem = document.createElement('img');
imagem.src = atleta.imagem;
const descricao = document.createElement('p');
descricao.innerHTML = atleta.descricao;

container_atleta.appendChild(titulo);

container_atleta.appendChild(imagem);
container_atleta.appendChild(descricao);
div_container.appendChild(container_atleta);
container_atleta.style.backgroundColor='gray'
container_atleta.style.color='pink'
container_atleta.style.width='30rem'
}


atletas.forEach((atleta) => {cria_cartao(atleta)});


/*
const preenche = function(atleta) { 
    espaco_nome.innerText=atleta.nome;
    imagem.src=atleta.imagem
    espaco_descricao.innerText=atleta.descricao
    container.style.width='20rem'
    container.style.backgroundColor='gray'
    container.style.color='pink'
}
preenche(ingrid);
*/