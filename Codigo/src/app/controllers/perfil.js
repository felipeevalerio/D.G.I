onload = () => {
    let editar = false, emin = document.getElementById('emailInput'), soin = document.getElementById('sobreInput');
    let dev = localStorage.getItem('dev'), investor = localStorage.getItem('investor'), player = localStorage.getItem('payer');
    if (dev == 'true')
        document.getElementById('dev').innerHTML = '<button class="dev" id="devbt" type="button"><div class="content"><img src="./assets/dev.svg" alt=""><p>Desenvolvedor</p></div></button>';
    if (investor == 'true')
        document.getElementById('investor').innerHTML = '<button class="investor" id="investorbt" type="button"><div class="content"><img src="./assets/investor.svg" alt=""><p>Investidor</p></div></button>';
    if (player == 'true')
        document.getElementById('player').innerHTML = '<button class="gamer" id="playerbt" type="button"><div class="content"><img src="./assets/gamer.svg" alt=""><p>Gamer</p></div></button>';
    emin.innerHTML = localStorage.getItem('email');
    soin.innerHTML = localStorage.getItem('sobre');
    document.getElementById('nameUser').innerText = localStorage.getItem('nome');
    document.getElementById('edit').onclick = () => {
        if (editar == false) {
            editar = true;
            document.getElementById('edit').innerText = 'Confirmar Edição';
            document.getElementById('dev').innerHTML = '<button class="dev" id="devbt" type="button"><div class="content"><img src="./assets/dev.svg" alt=""><p>Desenvolvedor</p></div></button>';
            document.getElementById('investor').innerHTML = '<button class="investor" id="investorbt" type="button"><div class="content"><img src="./assets/investor.svg" alt=""><p>Investidor</p></div></button>';
            document.getElementById('player').innerHTML = '<button class="gamer" id="playerbt" type="button"><div class="content"><img src="./assets/gamer.svg" alt=""><p>Gamer</p></div></button>';
            document.getElementById('nameUser').innerHTML = '<input type="text" name="nome" id="nome" value="' + localStorage.getItem('nome') + '" placeholder="Digite seu nome"></input>';
            soin.innerHTML = '<textarea name="about" id="sobre" placeholder="Diga um pouco sobre você">' + localStorage.getItem('sobre') + '</textarea>';
        } else {
            editar = false;
            document.getElementById('edit').innerText = 'Editar Perfil';
            localStorage.setItem('sobre', document.getElementById('sobre').value);
            localStorage.setItem('nome', document.getElementById('nome').value);
            if (document.getElementById('devbt').classList.contains('active') == true)
                localStorage.setItem('dev', true)
            else
                localStorage.setItem('dev', false)
            if (document.getElementById('investorbt').classList.contains('active') == true)
                localStorage.setItem('investor', true)
            else
                localStorage.setItem('investor', false)
            if (document.getElementById('playerbt').classList.contains('active') == true)
                localStorage.setItem('player', true)
            else
                localStorage.setItem('player', false)
            if (dev == 'true')
                document.getElementById('dev').innerHTML = '<div class="content">< img src = "./assets/dev.svg" alt = "" ><p>Desenvolvedor</p></div >';
            else
                document.getElementById('dev').innerHTML = ' ';
            if (investor == 'true')
                document.getElementById('investor').innerHTML = '<div class="content">< img src = "./assets/investor.svg" alt = "" ><p>Investidor</p></div >';
            else
                document.getElementById('investor').innerHTML = ' ';
            if (player == 'true')
                document.getElementById('player').innerHTML = '<div class="content">< img src = "./assets/gamer.svg" alt = "" ><p>Gamer</p></div >';
            else
                document.getElementById('player').innerHTML = ' ';
            soin.innerHTML = localStorage.getItem('sobre');
            document.getElementById('nameUser').innerText = localStorage.getItem('nome');
        }
    }
}