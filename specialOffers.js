const weekDays = [
	{ day: 'Понедельник', img: 'specialOffers1.jpeg', description: 'Каждому гостю к каждому ужину (с 18:00) наша домашняя настойка В ПОДАРОК.' },
	{ day: 'Вторник', img: 'specialOffers2.jpg', description: 'Комбо-ужины по 399 р. и 499 р. (узнай, какой сегодня, <a href="http://project5848550.tilda.ws/page29111104.html">тут</a>).' },
	{ day: 'Среда', img: 'specialOffers3.jpg', description: 'К каждой бутылке вина подарим закуску на ваш выбор. Профит!' },
	{ day: 'Четверг', img: 'specialOffers4.jpg', description: 'Все алкогольные коктейли умножаются на два. Берёшь один, а получаешь два. В - Выгода!' },
	{ day: 'Пятница', img: 'specialOffers5.jpg', description: 'Угощаем всех гостей домашним пуншем на ужин (с 18:00).' },
	{ day: 'Суббота', img: 'specialOffers6.jpg', description: 'Каждому гостю к каждому ужину (с 18:00) наша домашняя настойка В ПОДАРОК.' },
	{ day: 'Воскресенье', img: 'specialOffers7.jpeg', description: 'Приходите семьей, подарим детям какао или картофель фри (на ваш выбор), дадим раскраски и игрушки.' },
	{ day: 'Ежедневная акция', img: 'specialOffers8.jpg', description: 'Скидка 20% на кофе с собой.' }
]

function weekDaysFunc(weekDay) {
	return `<div class="oneDay">
					<div class="imgContainer">
						<img src="${weekDay.img}" alt="Какая-то вкусняшка."/>
					</div>
					<p>${weekDay.day}</p>
					<div class="hiddenContent">
						<p>${weekDay.description}</p>
					</div>
			</div>`
}

const contentArray = weekDays.map(day => weekDaysFunc(day))
const content = contentArray.join(' ')
document.querySelector('.flexContainer').innerHTML = content