/**
 *  Challenge Quizz
 *
 * Pour ce challenge, suit les instructions dans le fichier README.md
 * Et écris ton code ici même !
 */

/* Exo 1 */
let question1 = "Quelle mer borde la ville de Sébastopol ?"
let solution1 = "la mer Noire"
let qestionJuste = 0

/* Exo 2 */
let reponse1 = prompt(question1) //prompt ca veut dire zehma tu affiche (question1) et tu peux repondre ecrire ce que tu veux 
if (reponse1 === solution1) {    //du coup si dans mon prompt je met solution1 ta gagner sinon perdu 
    alert("Gagné !")
}else {
    alert("perdu...")
}

/* Exo 3 */
let question2 = "Quel est l'âge du capitaine ?"
let solution2 = 63
let reponse2 = parseInt(prompt(question2))     //mon prompt transforme n'importe quel reponse qu'on ecrit en string du coup le parseInt transforme en number 
if (reponse2 === solution2){                   // donc tu peux repondre qu'avec des nombres sinon NaN
    alert("Gagné !")
}else {
    alert("perdu...")
}

//Bonus

