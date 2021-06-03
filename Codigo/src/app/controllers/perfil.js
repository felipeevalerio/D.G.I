const reader = new FileReader();
onload = () => {
    let editar = false, emin = document.getElementById('emailInput'), soin = document.getElementById('sobreInput'), ckdev = false, ckinvestor = false, ckplayer = false;
    let dev = localStorage.getItem('dev'), investor = localStorage.getItem('investor'), player = localStorage.getItem('payer');
    if (dev == 'true'){
        document.getElementById('dev').innerHTML = '<button class="dev" id="devbt" type="button"><div class="content"><img src="./assets/dev.svg" alt=""><p>Desenvolvedor</p></div></button>';
        ckdev = true
    }
    if (investor == 'true'){
        document.getElementById('investor').innerHTML = '<button class="investor" id="investorbt" type="button"><div class="content"><img src="./assets/investor.svg" alt=""><p>Investidor</p></div></button>';
        ckinvestor = true
    }
    if (player == 'true'){
        document.getElementById('player').innerHTML = '<button class="gamer" id="playerbt" type="button"><div class="content"><img src="./assets/gamer.svg" alt=""><p>Gamer</p></div></button>';
        ckplayer = true
    }
    if (localStorage.getItem('imgProfile') == undefined)
        document.getElementById('imgProfile').src = './assets/profile.jpg';
    else
        document.getElementById('imgProfile').src = localStorage.getItem('imgProfile');
    emin.innerHTML = localStorage.getItem('email');
    soin.innerHTML = localStorage.getItem('sobre');
    document.getElementById('nameUser').innerText = localStorage.getItem('nome');
    document.getElementById('edit').onclick = () => {
        if (editar == false) {
            editar = true;
            document.getElementById('edit').innerText = 'Confirmar Edição';
            document.getElementById('dev').innerHTML = '<button class="dev btnTypeProfile" id="devbt" type="button"><div class="content"><img src="./assets/dev.svg" alt=""><p>Desenvolvedor</p></div></button>';
            document.getElementById('investor').innerHTML = '<button class="investor btnTypeProfile" id="investorbt" type="button"><div class="content"><img src="./assets/investor.svg" alt=""><p>Investidor</p></div></button>';
            document.getElementById('player').innerHTML = '<button class="gamer btnTypeProfile" id="playerbt" type="button"><div class="content"><img src="./assets/gamer.svg" alt=""><p>Gamer</p></div></button>';
            document.getElementById('nameUser').innerHTML = '<input type="text" name="nome" id="nome" value="' + localStorage.getItem('nome') + '" placeholder="Digite seu nome"></input>';
            document.getElementById('uploadPlace').innerHTML = '<label for="uploadImgProfile">Adicionar Imagem</label><input type="file" id="uploadImgProfile">'
            let devbt = document.getElementById('devbt'), investorbt = document.getElementById('investorbt'), playerbt = document.getElementById('playerbt');
            if(ckdev == true)
                devbt.classList.add('active');
            devbt.onclick = () => {
                if (devbt.classList.contains('active') == false)
                    devbt.classList.add('active');
                else
                    devbt.classList.remove('active');
            }
            if(ckinvestor == true)
                investorbt.classList.add('active');
            investorbt.onclick = () => {
                if (investorbt.classList.contains('active') == false)
                    investorbt.classList.add('active');
                else
                    investorbt.classList.remove('active');
            }
            if(ckplayer == true)
                playerbt.classList.add('active');
            playerbt.onclick = () => {
                if (playerbt.classList.contains('active') == false)
                    playerbt.classList.add('active');
                else
                    playerbt.classList.remove('active');
            }
            soin.innerHTML = '<textarea name="about" id="sobre" placeholder="Diga um pouco sobre você">' + localStorage.getItem('sobre') + '</textarea>';
        } else {
            editar = false;
            document.getElementById('edit').innerText = 'Editar Perfil';
            localStorage.setItem('sobre', document.getElementById('sobre').value);
            localStorage.setItem('nome', document.getElementById('nome').value);
            if (document.getElementById('uploadImgProfile').files[0] != undefined) {
                reader.readAsDataURL(document.getElementById('uploadImgProfile').files[0]);
                reader.onload = () => {
                    localStorage.setItem('imgProfile', reader.result);
                    document.getElementById('imgProfile').src = localStorage.getItem('imgProfile');
                }
            }
            document.getElementById('uploadPlace').innerHTML = ' ';
            if (devbt.classList.contains('active') == true){
                localStorage.setItem('dev', true);
                ckdev = true;
                document.getElementById('dev').innerHTML = '<button class="dev" id="devbt" type="button"><div class="content"><img src="./assets/dev.svg" alt=""><p>Desenvolvedor</p></div></button>';
            }else{
                localStorage.setItem('dev', false);
                ckdev = false;
                document.getElementById('dev').innerHTML = ' ';
            }
            if (document.getElementById('investorbt').classList.contains('active') == true){
                localStorage.setItem('investor', true);
                ckinvestor = true;
                document.getElementById('investor').innerHTML = '<button class="investor" id="investorbt" type="button"><div class="content"><img src="./assets/investor.svg" alt=""><p>Investidor</p></div></button>';
            }else{
                localStorage.setItem('investor', false);
                ckinvestor = false;
                document.getElementById('investor').innerHTML = ' ';
            }
            if (document.getElementById('playerbt').classList.contains('active') == true){
                localStorage.setItem('player', true);
                ckplayer = true;
                document.getElementById('player').innerHTML = '<button class="gamer" id="playerbt" type="button"><div class="content"><img src="./assets/gamer.svg" alt=""><p>Gamer</p></div></button>';
            }else{
                localStorage.setItem('player', false);
                ckplayer = false;
                document.getElementById('player').innerHTML = ' ';
            }
            soin.innerHTML = localStorage.getItem('sobre');
            document.getElementById('nameUser').innerText = localStorage.getItem('nome');
        }
    }
}