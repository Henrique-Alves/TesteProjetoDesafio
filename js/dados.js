const listGame = {
    games: [
        {
            nome: "dark souls",
            tela: "https://sm.ign.com/t/ign_br/news/g/gamescom-2/gamescom-2015-prepare-for-dark-souls-3-with-this-g_9qgr.1280.jpg",
            anoLancamento: "2009",
            tipo: "RPG",
            nota: "9"
        },

        {
            nome: "CS",
            tela: src="https://s2.glbimg.com/_0reXPq2B0kVJXmZwzN9vB97Fq4=/0x0:1920x1080/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/s/W/rPsLN6SyAp4q7AcIBYTQ/1541419312747-tr-2-wallpaper.png",
            anoLancamento: "2012",
            tipo: "Ação",
            nota: "9"
        },

        {
            nome: "battlefield 5",
            tela: "https://thumbs.gfycat.com/FittingFarCommongonolek-size_restricted.gif",
            anoLancamento: "2018",
            tipo: "Ação",
            nota: "9"
        },

        {
            nome: "call of duty",
            tela: "https://img.olhardigital.com.br/uploads/acervo_imagens/2019/10/r16x9/20191015120757_1200_675_-_call_of_duty_mobile.jpg",
            anoLancamento: "2003",
            tipo: "acão",
            nota: "7"
        },

        {
            nome: "Assassin's Creed",
            tela: "https://s2.glbimg.com/x5dqQybuuq4-kwc-wNuHTeH-r64=/695x0/s.glbimg.com/po/tt2/f/original/2016/11/30/assassins-creed-3-gratis-uplay-ubisoft-30-anos.jpg",
            anoLancamento: "2012",
            tipo: "Ação e aventura",
            nota: "7"
        },

        {
            nome: "watch dogs",
            tela: "https://s2.glbimg.com/PXSHDEX_xF43LgzNS7crxZ6lvrw=/0x0:1011x706/695x485/s.glbimg.com/po/tt2/f/original/2014/05/28/watch-dogs-001_1_1.jpg",
            anoLancamento: "2014",
            tipo: "Ação e aventura",
            nota: "8"
        },

        {
            nome: "GTA 5",
            tela: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_MTwtV9sVwLlf3vKolOKyerZyUqrxjZoaZ5mj2EILAdRnAi9K&usqp=CAU",
            anoLancamento: "2013",
            tipo: "Ação",
            nota: "10"
        },

        {
            nome: "Red Dead Redemption 2",
            tela: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBAzhKB85veIGu8mB5wYkM0KQs1glFw6cS72jz7UYUdLXfIYhs&usqp=CAU",
            anoLancamento: "2018",
            tipo: "Ação e aventura",
            nota: "9"
        },

        {
            nome: "God of War",
            tela: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ_0uMpgLJxFs5t7YgFWeJdrzHY2cbAmD_jR49dhEM0sx1de-j&usqp=CAU",
            anoLancamento: "2018",
            tipo: "Ação e aventura",
            nota: "7"
        },

        {
            nome: "Forza Horizon 4s",
            tela: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfGhp4jPt9R2ajVTQiQfaolAjiC0A5IHDF5-pOSy1IY8qiw_E1&usqp=CAU",
            anoLancamento: "2018",
            tipo: "Esportes ou Corrida",
            nota: "8"
        },
    ]
}

const dados = listGame.games.map((item) => {
    addCard(item);            
});

function addCard(item){
    let divAll = document.querySelector('.cards');
        divAll.appendChild(montaDivCard(item)); 
}

function montaDivCard(item){
   let divcard = document.createElement('div');
   divcard.appendChild(recebeImagem(item.tela,'card-img-top'));

   divcard.classList.add('card');
   divcard.appendChild(montaDivInterna(item));
   return divcard;
}

function recebeImagem(item, classe){
    console.log(item);
    let imagem = document.createElement('img');  
    imagem.src = item;
    imagem.classList.add(classe);

    return imagem;
}

function montaDivInterna(item){
    let divInt = document.createElement('div')
    divInt.classList.add('card-body')
   
    divInt.appendChild(montaP("Titulo: "+item.nome,'card-nome'));
    divInt.appendChild(montaP("Ano de Lançamento: "+item.anoLancamento, 'card-anoLancamento'));
    divInt.appendChild(montaP("Gênero: "+item.tipo, 'card-tipo'));
    divInt.appendChild(montaP("Nota: "+item.nota, 'card-nota'));

    return divInt;
}

function montaP(item,classe){
    var p = document.createElement('p')
    p.textContent = item;
    p.classList.add(classe)
    return p
}





