onload = () => {
    let editar = false, emin = document.getElementById('emailInput'), soin = document.getElementById('sobreInput');
    emin.innerHTML = localStorage.getItem('email');
    soin.innerHTML = localStorage.getItem('sobre');
    document.getElementById('nameUser').innerText = localStorage.getItem('nome');
    document.getElementById('edit').onclick = () => {
        if (editar == false) {
            editar = true;
            document.getElementById('edit').innerText = 'Confirmar Edição';
            document.getElementById('nameUser').innerHTML = '<input type="text" name="nome" id="nome" value="' + localStorage.getItem('nome') + '" placeholder="Digite seu nome"></input>';
            soin.innerHTML = '<textarea name="about" id="sobre" placeholder="Diga um pouco sobre você">' + localStorage.getItem('sobre') + '</textarea>';
        } else {
            editar = false;
            document.getElementById('edit').innerText = 'Editar Perfil';
            localStorage.setItem('sobre', document.getElementById('sobre').value);
            localStorage.setItem('nome', document.getElementById('nome').value);
            soin.innerHTML = localStorage.getItem('sobre');
            document.getElementById('nameUser').innerText = localStorage.getItem('nome');
        }
    }
}