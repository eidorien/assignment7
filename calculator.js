window.onload = function () {

    var mDriven = document.getElementById('milesDriven');
    var gUsed = document.getElementById('gallonsUsed');
    var milesPgallon = document.getElementById('milesPgallon');
    var form = document.getElementById('form');

    function calculation(event) {
        event.preventDefault();

        var mDrivenNum = parseInt(mDriven.value);
        if (isNaN(mDrivenNum) || mDrivenNum <= 0) {
            // Show the error message
            alert('Miles driven must be a positive number.');
            return;
        }

        var gUsedNum = parseInt(gUsed.value);
        if (isNaN(gUsedNum) || gUsedNum <= 0) {
            // Show the error message
            alert('Gallons used must be a positive number.');
            return;
        }

        milesPgallon.value = parseInt(mDrivenNum) / parseInt(gUsedNum);
    }

    form.addEventListener('submit', calculation);
}
