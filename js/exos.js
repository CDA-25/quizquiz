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
let score = 0 

/* Exo 2 */
// Ton code ici...
    let reponse1 = prompt("Quelle mer borde la ville de Sébastopol ?");
    if (reponse1 === solution1) {
        score++
        alert("Gagné ! T'es vraiment le boss du matosse !");
    } else {
        alert("Perdu.. If I speak, i'm in very big trouble.. I prefer not to speak.");
    }

/* Exo 3 */
// Ton code ici...
let question2 = "Quel est l'âge du capitaine ?"
let solution2 = 63

let reponse2 = parseInt(prompt("Quel est l'âge du capitaine ?"));
if (reponse2 === solution2) {
    score++
    alert("C'est bien ça.");
} else {
    alert("Faux !!! au bûcher racaille !");
}

alert("Votre score est de : " + score + "/2")
