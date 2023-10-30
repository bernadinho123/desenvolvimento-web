
const body =document.body;

const pesquisa =document.createElement('div');
const texto_pesquisado = document.createElement('input');
const bnt_pesquisar = document.createElement('button');
pesquisa.style.textAlign ='center';
bnt_pesquisar.innerHTML = "Pesquisar";
bnt_pesquisar.onclick = () => {filtrar(texto_pesquisado.value)};

pesquisa.appendChild(texto_pesquisado);
pesquisa.appendChild(bnt_pesquisar);
body.appendChild(pesquisa);


const div_container = document.createElement('div');
div_container.id = 'container';
body.appendChild(div_container);

const cria_cartao = (atleta) =>{



const container_atleta = document.createElement('div');
const titulo = document.createElement('h3');
titulo.innerHTML = atleta.nome;
const imagem = document.createElement('img');
imagem.src = atleta.imagem;
imagem.alt=`foto de ${atleta.nome}`;
const descricao = document.createElement('p');
descricao.innerHTML = atleta.descricao;

container_atleta.appendChild(titulo);

container_atleta.appendChild(imagem);
container_atleta.appendChild(descricao);
div_container.appendChild(container_atleta);
container_atleta.style.backgroundColor='gray'
container_atleta.style.color='pink'
container_atleta.style.width='30rem'
container_atleta.style.textAlign='center'
container_atleta.style.margin='auto'


}



const constroi_atletas =(lista_atletas) => {
    for (const atleta of lista_atletas){
        cria_cartao(atleta);
    }
}



const filtrar = (entrada) => {
    const filtrado = atletas.filter(
        (ele) => ele.nome.toLowerCase().includes(entrada.toLowerCase())
    )
    constroi_atletas(filtrado);
}