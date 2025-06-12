let score_n = document.querySelector('.score-input-txt');
let maximum_score = 720;


// document.addEventListener('click', displayResult());


function displayResult() {
    let result = '';
    let score = Number(score_n.value);

    console.log(score);
    if (score != null) {
        if (score >= 672 && score <= maximum_score) {
            result = '1-10';

        }

        else if (score >= 650 && score <= 671) {
            result = '11-100';

        }

        else if (score >= 630 && score <= 649) {
            result = '101-500';

        } else if (score >= 616 && score <= 629) {
            result = '501-1000';

        } else if (score >= 571 && score <= 615) {
            result = '1001-5000';

        } else if (score >= 542 && score <= 570) {
            result = '5001-10000';

        } else if (score >= 528 && score <= 541) {
            result = '10001-20000';

        } else if (score >= 515 && score <= 527) {
            result = '20,001-30,000';

        } else if (score >= 496 && score <= 514) {
            result = '30,001-50,000';

        } else if (score >= 465 && score <= 495) {
            result = '50,001-1,00,000';

        } else if (score >= 424 && score <= 464) {
            result = '1,00,001-2,00,000';

        } else if (score < 424) {
            result = 'Above 2,00,000';

        }

        else {
            result = 'Invalid Input';
        }
    }


    document.querySelector('.Displayresult').innerHTML = `Your predicted rank: ${result}`;
}

