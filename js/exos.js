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
// on stock la reponse dans la variable reponse1 (donc var = le prompt(message))
let reponse1 = prompt(question1);
let count = 0; // déclarer une variable pour stocker le nombre de bonnes réponses

function valideReponse(reponse, solution) { // function pour comparer la reponse à la solution (la function ici évite d'avoir à recopier pour chaque question)
    if (reponse === solution) {  // si reponse strictement égale à la solution
        alert("Gagné !") // pop up Gagné
        count += 1 // et + 1 à la variable count pour calculer le nombre de bonne réponse

    } else {  // sinon affiche le pop up en dessous
        alert("Perdu...")
    }
}

valideReponse(reponse1, solution1) // appel de la fonction avec la reponse 1 pour la question 1

/* Exo 3 */
// déclaration de nouvelles varaibles pour la question 2 et la réponse 2
let question2 = "Quel est l'âge du capitaine ?";
let solution2 = 63;

let reponse2 = parseInt(prompt(question2)); // appel de la fonction avec la reponse2 et solution 2
valideReponse(reponse2, solution2)
alert('Vous avez ' + count + ' bonne(s) réponse(s) !') // pop up final pour afficher le nombre de bonne réponse à l'utilisateur :)
