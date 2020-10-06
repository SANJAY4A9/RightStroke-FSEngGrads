console.log("\n**************************Demo for Union type*************************\n");
function displayType(code) {
    if (typeof (code) === "number")
        console.log(code + ' is number.');
    else if (typeof (code) === "string")
        console.log(code + ' is string.');
}
displayType(432);
displayType("ARJUN");
