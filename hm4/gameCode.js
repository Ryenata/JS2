//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var action, ok;

var answers = [];

do {//Выводим первый вопрос
    ok = false;
    action = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
   
    if (action == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, action);
        if (action == 1) {
            answers.push(works.a1)
        } else {
            answers.push(works.a2)
        }
      }
} while (!ok);
switch (action) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            action = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (action == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, action);
                if (action == 1) {
                    answers.push(works.b1)
                } else {
                    answers.push(works.b2)
                }
            }
        } while (!ok);
switch (action) {
       case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
        forthScreen();

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
            forthScreen();

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            action = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (action == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, action);
                if (action == 1) {
                    answers.push(works.c1)
                } else {
                    answers.push(works.c2)
                }
            }
        } while (!ok);
        switch (action) {
            case 1: // Второе действие
            forthScreen();
                
                break;
            case 2: // Второе действие
            forthScreen();
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
// console.log(answers);

 var checkAnswer = +prompt("Показать Ваши ответы ? Введите 1 (да) или 0 (нет).")
 if (checkAnswer == 1) {
    var questionNum = +prompt("Введите номер вопроса (1, 2, 3)");
    if(questionNum == 1){
        alert(works.a00 +"\n"+ answers[0]);
    }
    else if(questionNum == 2){
        alert(works.b00 +"\n"+answers[1]);
    }
    else if(questionNum == 3){
        alert(works.c00 +"\n"+answers[2]);
    }
    else{
        alert ("Вы ввели неправильное число.")
    }
} 
else {
    alert("До свидания !");
}
// ------------------------------------------
function isAnswer(q, action) {
    if (isNaN(action) || !isFinite(action)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (action < 1 || action > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

function forthScreen () {
    do {
        ok = false;
        action = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
        if (action == -1) {
            break;
        }
        else {
            ok = isAnswer(works.d0, action);
            if (action == 1) {
                answers.push(works.d1)
            } else {
                answers.push(works.d2)
            }
        }
    } while (!ok);
}





