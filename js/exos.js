/**
 *  Challenge Quizz
 *
 * Pour ce challenge, suit les instructions dans le fichier README.md
 * Et écris ton code ici même !
 */


/* Exo 1 */
// Ton code ici...


let bonneReponses = 0


const question1 = "Quelle mer borde la ville de Sébastopol ?"

const solution1 = "la mer Noire"

/* Exo 2 */
// Ton code ici...

let reponse1 = ""
const Q1 = prompt(question1, reponse1)


if(Q1 == solution1){
    bonneReponses++
    alert("Gagné");
    
}
else{
    alert("Perdu");
}




/* Exo 3 */
// Ton code ici...

const question2 = "Quel est l'âge du capitaine ?"
const solution2 = 63

let reponse2 = ""
const Q2 = prompt(question2, reponse2)


if(Q2 == solution2){
    bonneReponses++
    alert(" Gagné " +  " Vous avez eu " + bonneReponses + " bonnes réponses ");
    
}
else{
    alert(" Perdu " + " Vous avez eu " + bonneReponses + " bonnes réponses ");
}






