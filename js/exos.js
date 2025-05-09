/**
 *  Challenge Quizz
 *
 * Pour ce challenge, suit les instructions dans le fichier README.md
 * Et écris ton code ici même !
 */

/* Exo 1 */
// Ton code ici...
let question1 = "Quelle mer borde la ville de Sébastopol ?"
let solution1 = "La mer noire"


/* Exo 2 */
// Ton code ici...
let reponse1 = prompt(question1)
let nbBonneResponse=0;


if (reponse1==solution1)
    {
        alert("Gagné !");
        nbBonneResponse+=1;
    }
    else { alert("Perdu...")};


/* Exo 3 */
// Ton code ici...

let question2 = "Quel est l'âge du capitaine ?"
let solution2 = 63

let reponse2 = parseInt(prompt(question2))

if (reponse2==solution2)
    {
        alert("Gagné !");
        nbBonneResponse+=1;
    }
    else alert("Perdu...");



alert("Vous avez "+ nbBonneResponse+" bonnes réponse(s).")