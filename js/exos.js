/**
 *  Challenge Quizz
 *
 * Pour ce challenge, suit les instructions dans le fichier README.md
 * Et écris ton code ici même !
 */

/* Exo 1 */
let score = 0;
let question1 = "Quelle mer borde la ville de Sébastopol ?";
let solution1 = "la mer Noire";

/* Exo 2 */
let reponse1 = prompt(question1);
if (reponse1 == solution1) {
    score++;
    alert("Gagné !"); 
} else {
    alert("Perdu ...");
}

/* Exo 3 */
let question2 = "Quel est l'âge du capitaine ?";
let solution2 = 63;
let reponse2 = prompt(question2);
if (reponse2 == solution2) {
    score++;
    alert("Gagné !");
}
else {
    alert("Perdu ...");
}

alert("Votre score est de " + score + " / 2");