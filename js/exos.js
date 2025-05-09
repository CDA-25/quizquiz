/**
 *  Challenge Quizz
 *
 * Pour ce challenge, suit les instructions dans le fichier README.md
 * Et écris ton code ici même !
 */

/* Exo 1 */
//const question1 = "Quelle mer borde la ville de Sébastopol ?"
//const solution1 = "la mer Noire"


/* Exo 2 */
// Vérification de la réponse
/* const reponse1 = prompt(question1)
if (reponse1 === solution1) {
    alert("Gagné !");
} else {
    alert("Perdu...");
}
 */


/* Exo 3 */
/* const  question2 = "Quel est l'âge du capitaine ?"
const solution2 = "63"

const reponse2 = prompt(question2)
if (reponse2 === solution2) {
    alert("Gagné !");
} else {
    alert("Perdu...");
}
 */

/* Bonus */
//Trouve un moyen pour compter le nombre de bonnes réponses de l'utilisateur. 
// Une fois toutes les questions posées, affiche un message du type "Vous avez X bonnes réponses".

/* Exo 1 */
const question1 = "Quelle mer borde la ville de Sébastopol ?"
const solution1 = "la mer Noire"
let score = 0

// Fonction pour poser une question et vérifier la réponse
function poserQuestion(question, solution) {
    const reponse = prompt(question);
    if (reponse === solution) {
        alert("Gagné !");
        return 1; // Retourne 1 si la réponse est correcte
    } else {
        alert("Perdu...");
        return 0; // Retourne 0 si la réponse est incorrecte
    }
}

/* Exo 2 */
// Utilisation de la fonction pour chaque question
score += poserQuestion(question1, solution1);

/* Exo 3 */
const  question2 = "Quel est l'âge du capitaine ?"
const solution2 = "63"

score += poserQuestion(question2, solution2);

/* Bonus */
alert("Vous avez " + score + " bonnes réponses");