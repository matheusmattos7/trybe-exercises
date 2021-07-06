function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Exercicio 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function calendarDays() {
  const daysMonth = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let dezDaysListItem = document.createElement('li');
    dezDaysListItem.innerText = dezDaysList[index];

      if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
        dezDaysListItem.className = 'day holiday';
      } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
        dezDaysListItem.className = 'day friday';
      } else if (dezDaysList[index] === 25) {
        dezDaysListItem.className = 'day holiday friday'; 
      } else {
        dezDaysListItem.className = 'day';
      }

    daysMonth.appendChild(dezDaysListItem);
  }  
}
calendarDays();

//Exercicio 2

function btnFeriados(Feriados) {
 let buttonContainer =  document.querySelector('.buttons-container');
 let newButton = document.createElement('button');
 
 newButton.innerHTML = Feriados;
 newButton.id = 'btn-holiday';
 buttonContainer.appendChild(newButton);
}

btnFeriados();

//Exercicio 3
