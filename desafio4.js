/*Desenvolva uma função para verificar se uma senha é segura:
    Leve em consideração os pontos abaixo:

    1. A senha deve ser passada pelo usuário.
    2. A senha deve conter no minimo 8 caracteres.
    3. A função deve retorna se a senha é fraca, média ou forte
        - Fraca: 
            - Contem 8 caracteres
        - Média:
            - Contem mais de 8 caracteres
        - Forte:
            - Contem mais de 8 caracteres
            - Contem caracteres especiais
*/
const caracteresEspecias = ['!', '@','#','$','%','$','*']

function segurancaSenha(senha){
    let temCaractereEspecial = false;

    for (let i = 0; i < caracteresEspecias.length; i++) {
        if (senha.includes(caracteresEspecias[i])) {
            temCaractereEspecial = true;
        }
    }

    if (senha.length < 8) {
        console.log("A senha precisa ter pelo menos oito caracteres.");
    } else if (senha.length == 8) {
        console.log("A segurança da senha é fraca");
    } else if  (senha.length > 8 && !temCaractereEspecial){
        console.log("A segurança da senha é media");
    } else if (senha.length > 8 && temCaractereEspecial) {
        console.log("A segurança da senha é forte");
    }

}
segurancaSenha('88888');  
segurancaSenha('88888abc111');  
segurancaSenha('888810108abc$');