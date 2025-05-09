/**
 *  Challenge Quizz
 *
 * Pour ce challenge, suit les instructions dans le fichier README.md
 * Et écris ton code ici même !
 */

/* Exo 1 */
// Ton code ici...

let question1 = "Quelle mer borde la ville de Sébastopol ?";
let solution1 = "la mer Noire";

/* Exo 2 */
// Ton code ici...


let reponse1 = prompt(question1)

let score = 0

function reponsesJustes(reponse, solution) {
    if (reponse == solution) {
    alert("Gagné");
    score += 1
}
else alert("Perdu")
}

reponsesJustes(reponse1, solution1)

/* Exo 3 */
// Ton code ici...

let question2 = "Quel est l'âge du capitaine ?"
let solution2 = 63

let reponse2 = prompt(question2)

reponsesJustes(reponse2, solution2)

// Bonus // 



alert("Vous avez " + score + " bonnes réponses")
