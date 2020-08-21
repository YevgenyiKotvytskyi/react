'use strict';

const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья',
    ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';

const command = employers.filter(person => (person.length > 0 && person.trim() !== ''));

command.forEach((person, index) => {
    person = person.trim().toLowerCase();
    command[index] = person[0].toUpperCase() + person.slice(1);
});

const data = {
    cash: [3, 8, 3],
    react: ['JSX', 'components', 'props', 'state', 'hooks'],
    add: ['styled-components', 'firebase']
};


const calcCash = (own = 0, ...arg) => {
    let total = own;
    const [data] = arg;
    data.forEach(elem => total += +elem);
    return total;
};

const lesson = calcCash(null, data.cash);

const makeBusiness = (director, teacher, allModule, gang, course) => {
    teacher = teacher || 'Максим';
    console.log(
        `Стартуем новый курс: "${course}.  Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}
Команда Академии: ${gang}`);
    console.log('Первое что изучим будет ' + data.react[0] + ". Он очень похож на HTML!");
    console.log('Технологии которые мы изучим: ');
    console.log(...data.add, 'и другие');
};

makeBusiness('Артем', null, lesson, command, nameCourse);
