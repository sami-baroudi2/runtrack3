function jourtravaille(date)
{
    let dayworkornot = "jour de semaine de travail.";
    const joursferies =
    [
        // Les jours fériés
        new Date(2022, 0, 1),
        new Date(2022, 3, 18),
        new Date(2022, 4, 1),
        new Date(2022, 4, 8),
        new Date(2022, 4, 26),
        new Date(2022, 5, 6),
        new Date(2022, 6, 14),
        new Date(2022, 7, 15),
        new Date(2022, 10, 1),
        new Date(2022, 10, 11),
        new Date(2022, 11, 25),
    ];
    if (date.getDay() == 0 || date.getDay() == 6)
    {
        dayworkornot = "week-end.";
    }
    for (i = 0; i < joursferies.length; i++)
    {
        if (date.getTime() == joursferies[i].getTime())
        {
            dayworkornot = "jour férié.";
        }
    }
    return dayworkornot;
}
// Les mois.
var mois =
[
    "janvier",
    "fevrier",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
];
// Variable date
var date1 = new Date(2022, 0, 1);
console.log("Le " + date1.getDate() + " " + mois[date1.getMonth()] + " est un " + jourtravaille(date1));
var date2 = new Date(2022, 2, 19);
console.log("Le " + date2.getDate() + " " + mois[date2.getMonth()] + " est un " + jourtravaille(date2));
var date3 = new Date(2022, 3, 18);
console.log("Le " + date3.getDate() + " " + mois[date3.getMonth()] + " est un " + jourtravaille(date3));
var date4 = new Date(2022, 7, 25);
console.log("Le " + date4.getDate() + " " + mois[date4.getMonth()] + " est un " + jourtravaille(date4));