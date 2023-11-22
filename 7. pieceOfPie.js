function pieceOfPie(pies, startIndex, endIndex) {

    const start = pies.indexOf(startIndex);
    const end = pies.indexOf(endIndex) + 1;

    const result = pies.slice(start, end);

    return result;

}
console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));

