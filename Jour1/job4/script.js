'use strict';
function bissextile(Annee) {
    if (Annee%4 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(bissextile(2024));