let score_n = document.querySelector('.score-input-txt');
let maximum_score = 720;


// document.addEventListener('click', displayResult());


function displayResult() {
    let result = '';
    let score = Number(score_n.value);

    console.log(score);
    if (score != null) {
        if (score >= 651 && score <= 686) {
            result = '1 - 73';

        }

        else if (score >= 601 && score <= 650) {
            result = '72 - 1,259';

        }

        else if (score >= 551 && score <= 600) {
            result = '1,260 - 10,658';

        } else if (score >= 501 && score <= 550) {
            result = '10,659 - 39,521';

        } else if (score >= 451 && score <= 500) {
            result = '39,522 - 69,503';

        } else if (score >= 401 && score <= 450) {
            result = '69,504 - 88,239';

        } else if (score >= 351 && score <= 400) {
            result = '88,240 - 105,578';

        } else if (score >= 301 && score <= 350) {
            result = '105,579 - 126,935';

        } else if (score >= 251 && score <= 300) {
            result = '126,936 - 157,952';

        } else if (score >= 201 && score <= 250) {
            result = '157,953 - 198,346';

        } else if (score >= 144 && score <= 200) {
            result = '198,347 - 303,040';

        } 

        else if (score < 144 && score >= 0) {
            result = 'Below 303,041';

        }

        else {
            result = 'Invalid Input';
        }
    }


    document.querySelector('.Displayresult').innerHTML = `Your predicted rank: ${result}`;
}

