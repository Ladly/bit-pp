var month = 10;

switch(month) {
    case 1:
    case 2:
    case 12:
    console.log('It is winter');
        break;
    case 3:
    case 4:
    case 5:
        console.log('It is spring');
        break;
    case 6:
    case 7:
    case 8:
        console.log('It is summer');
        break;
    case 9:
    case 10:
    case 11:
        console.log('It is fall');
        break;
        default:
            console.log("input must be a number between 1 and 12");
}
