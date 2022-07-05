function solve(a, b, c){
    let firstLength = a.length;
    let secondLength = b.length;
    let thirdLength = c.length;

    let sum = firstLength + secondLength + thirdLength;
    let avg = Math.floor(sum / 3)

    console.log(sum)
    console.log(avg)
}
solve('chocolate', 'ice cream', 'cake');