/**
 *  Challenge Quizz
 *
 * Pour ce challenge, suit les instructions dans le fichier README.md
 * Et écris ton code ici même !
 */

/* Exo 1 */
let compteur = 0
const question1 = "Quelle mer borde la ville de Sébastopol ?"
const solution1 = "la mer Noire"


/* Exo 2 */

let reponse1 = ""
let resultat = window.prompt(question1, reponse1)

if (resultat == solution1) {
    window.alert("Gagné !")
    compteur++
}   else {
    window.alert("Perdu...")
}

/* Exo 3 */
const question2 = "Quel est l'âge du capitaine ?"
const solution2 = 63

let reponse2 = ""
let resultat2 = window.prompt(question2, reponse2)

if (resultat2 == solution2) {
    compteur++
    window.alert("Gagné ! Vous avez eu "+ compteur +" bonne(s) réponse(s)")
}   else {
    window.alert("Perdu... Vous avez eu "+ compteur +" bonne(s) réponse(s)")
}

