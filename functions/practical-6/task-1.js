// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(children, partner, geographic, job) {
    return `You will be ${job} in ${geographic}, and merried to ${partner} with ${children} kids`
}

console.log(tellFortune(1, "Aneta", "Canada", "Web developeeeer"));
 