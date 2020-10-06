
enum weekday
{
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

for(let d=1;d<=7;d++)
{
    console.log('Day '+d +' of the week is '+weekday[d])
}