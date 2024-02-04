const day = 'monday';
switch (day) {
    case 'monday':
        console.log('Plan course sturture');
        // console.log('go to coading setup');
        break;
    case 'tuesday':
        console.log('Prepare your theory ');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('prepare');
        break;
    case 'friday':
        console.log('watch video');
        break;
    case 'sunday':
        console.log('enjoy weekend')
        break;
    default:
        console.log('Not a valid day');
}
if (day === 'monday') {
    console.log('Plan course sturture');
}
else if (day === 'tuesday') {
    console.log('prepare theory')
}
else if (day === 'wednesday') {

}