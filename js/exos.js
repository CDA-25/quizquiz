/**
 *  Challenge Quizz
 *
 * Pour ce challenge, suit les instructions dans le fichier README.md
 * Et écris ton code ici même !
 */

/* Exo 1 */
// Ton code ici...
let question1 = "Quelle mer borde la ville de Sébastopol ?"
let solution1 = "La mer Noire"
let score = 0
/* Exo 2 */
// Ton code ici...
let reponse1 = prompt(question1)
    if (reponse1 === solution1) {
        score++
        alert("Gagné")
    }
    else { alert("Perdu") }
/* Exo 3 */
// Ton code ici...
let question2 = "Quel est l'âge du capitaine ?"
let solution2 = 63;

let reponse2 = parseInt(prompt(question2))
    if (reponse2 === solution2) {
        score++
        alert("Gagné")
    }
    else { alert("Perdu")}

alert("Votre score est de: " + score + "sur 2 !")
