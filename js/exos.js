/**
 *  Challenge Quizz
 *
 * Pour ce challenge, suit les instructions dans le fichier README.md
 * Et écris ton code ici même !
 */

/* Exo 1 */
// Ton code ici...
let question1 = "Quelle mer borde la ville de Sébastopol ?";

let solution1 = "La mer Noire";


/* Exo 2 */
// Ton code ici...
// on stock la reponse dans la variable reponse1 (donc var = le prompt(message))
let reponse1 = prompt(question1);
let count = 0;

function valideReponse(reponse, solution) {
    if (reponse === solution) {
        alert("Gagné !")
        count += 1

    } else {
        alert("Perdu...")
    }
}

valideReponse(reponse1, solution1)

/* Exo 3 */
// Ton code ici...
let question2 = "Quel est l'âge du capitaine ?";
let solution2 = 63;

let reponse2 = parseInt(prompt(question2));
valideReponse(reponse2, solution2)
alert('Vous avez ' + count + ' bonne(s) réponse(s) !')
