if (window.location.pathname.includes('login.html') == true) {
    onload = () => {
        document.getElementById('btLogin').onclick = () => {
            let senhaInput = document.getElementById('senha').value, emailInput = document.getElementById('email').value;
            let usuarios = JSON.parse(localStorage.getItem('users')), login = false;
            for (let c = 0; c < usuarios.length; c++) {
                if ((emailInput == usuarios[c]['email']) && (senhaInput == usuarios[c]['senha'])) {
                    sessionStorage.setItem('currentUser', c);
                    login = true;
                    window.location.href = href="index.njk";
                }
            }
            if (login == false) {
                alert('Email ou senha inválidos');
                document.getElementById('senha').value = '';
            }
        }
    }
} else {
    onload = () => {
        let loggedUser = sessionStorage.getItem('currentUser');
        if (loggedUser == null)
            document.getElementById('logado').classList.add('false');

        else
            document.getElementById('logoff').classList.add('false');
    }
}