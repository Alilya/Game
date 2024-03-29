import Slider from 'react-slick'
import cross from './images/кросы.jpg'
import koldun from './images/куклаКолдуна.jpg'
import zarya from './images/наЗаре.jpg'
import bar from './images/поБарам.jpg'
import puyala from './images/пыяла.jpg'
import karl from "./images/карл.jpg"

import SimpleSlider from './slyder'

let film;
let chatgpt;
let china;
let logic;
let view;
let slider;

let DB = [

    film = [
        { id: 100, text: "Собака ждала мужика на вокзале имя на Х", answer: "Хатико", name: "film" },
        { id: 200, text: `
            Фильм, где Томми ненавидит цыган, 
            там еще собака проглотила мячик и учавствовала в ограблении`, answer: "Большой куш (спиздили)", name: "film" },
        { id: 300, text: "Что за фильм в котором был грунт?", answer: "Стражи Галактики", name: "film" },
        { id: 400, text: "Фильм где Аффлек ищет жену..", answer: "Исчезнувшая", name: "film" },
        { id: 500, text: "Фильм в котором Ди Каприо мемный показывает пальцем и говорит я я", answer: "Однажды в Голливуде", name: "film" },
    ],
    chatgpt = [
        {
            id: 100, text:`
            Мощный ветер в сопровождении дождя значительно усилился,
            Все указывает на то, что возврата уже нет.
            Ты не моя кукла, и я не твой Андрей,
            Нашей любви пришел конец, как разрядилась батарейка.`, answer: "Жуки: Батарейка", name: "chatgpt"
        },

        {
            id: 200, text: `
            На какое-то время, до второго, я отправлюсь в место,
            где прибой балтийский встречает взгляд.
            Глаза, не привыкшие к этому окружению, увидят игру волн.
            В морских приключениях, будучи и моряком, и подводным путешественником,
            Себя обнаружу в глубинах, если вдруг окажусь на дне`, answer: "Игорь Скляр: Комарово", name: "chatgpt"
        },
        {
            id: 300, text: `
            Попробуй взглядом, ощути мои ласки,
            Неотразимо нужно мне это.
            Снова в вихре кажется, что в голове кружится.
            Милый, я признаю свою ошибку, как сладкий мармелад.`, answer: "Катя Лель: Мой мармеладный (Я не права)", name: "chatgpt"
        },
        {
            id: 400, text: `
            Потерял рассудок, плаваю в безумие,
            Она мне необходима, она мне необходима,
            Она мне необходима.
            Я потерялась в неразберихе.
            Меня вовсе нет, полностью и, безусловно, серьезно.
            Ситуация "помощь", в явном затруднении.
            Сама себя не понимаю, откуда ты взялась,
            Почему, почему, поддалась твоему влиянию?`, answer: "Тату: Я сошла с ума", name: "chatgpt"
        },
        {
            id: 500, text: `
            Призови меня в свой контекст,
            Путешествие сквозь амбивалентные периоды.
            Экспедиция за тобой,
            Где бы ориентиры маршрута ни предрекали.
            Я достигну точки, где ты раскрываешь в атмосфере светило,
            Где разрушенные иллюзии
            Восстанавливают силу, взлетая в высокие сферы снова.`, answer: "Алла Пугачёва: Позови меня с собой", name: "chatgpt"
        },
        
    ],
    china = [
        {
            id: 100, text: `
            Я пользователи делаю то, что я хочу делать
            Я хочу посадить -я звоню доктору (Алио)
            Кто меня не любит, я тебя не слышу (что?)
            Ты только что завидую мне, я молчу
            Когда я этого хочу, я не держу размер
            Я не себя самостоятельно себя.
            Мой продюсер сказал: «Ты поп -звезда»
            Кстати, мой продюсер - мой биумбан, да`, answer: "Инстасамка: За деньги да", name: "china"
        },
        
        {
            id: 200, text: `
            Реактивный: стекло всегда наполовину полное, всегда
            Это хорошо и не существует
            "Да" между "нет" и "да"
            Я верю, что лучшая жизнь, жизнь танцует под наблюдением чувствительного Бога
            Повторите это упражнение`, answer: "Кровосток: Думай позитивно", name: "china"
        },
        {
            id: 300, text: `
            Я использую это, просыпается Аган
            Это больше не бьет меня, больше не больно.
            Поверьте, это не слезы -просто вода
            Это больше не бьет меня, больше не больно.
            я привык`, answer: "Олечка Бузова: Привыкаю", name: "china"
        },
        {
            id: 400, text: `
            Дом снова один и тот же дом
            Как и я, он знаком со мной, -
            Он думает, что я странный человек:
            "Он снова здесь
            Стоять прямо здесь
            Не спать всю ночь
            И Т. Д ... ""`, answer: "Секрет: Моя любовь на пятом этаже", name: "china"
        },
        {
            id: 500, text: `
            От вашего крика
            Не вздох
            Я так потерян, я слишком свободен
            Я успокоился от длинного слова
            Когда вы внезапно решите снова получить крылья ...
            Переместить руку от моего пульса
            Я жив (слишком жив)
            Снять мой пульс
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`, answer: "Моя Мишель (Ева Польна): Зима в сердце", name: "china"
        },
    ],
    logic = [
        { id: 100, text: <img src={cross} />, answer: "Тима Белорусских: Мокрые кроссы", name: "logic" },
        { id: 200, text: <img src={bar} />, answer: "Анна Асти: По барам", name: "logic" },
        { id: 300, text: <img src={puyala} />, answer: "АИГЕЛ: Пыяла", name: "logic" },
        { id: 400, text: <img src={koldun} />, answer: "Король и Шут: Кукла колдуна", name: "logic" },
        { id: 500, text: <img src={zarya} />, answer: "Альянс (Баста): На заре", name: "logic" },
    ],
    view = [
        { id: 100, text:`Мужик растет обратно`, answer: "Загадочная история Бенджамина Баттона", name: "view" },
        { id: 200, text: `Фильм где девушка таскает фикус`, answer: "Леон", name: "view" },
        { id: 300, text: `Сериал с киберскотчем`, answer: "Шерлок", name: "view" },
        { id: 400, text: "Подростки играли в игру и отбивались от животных и чувака с ружьем", answer: "Джуманджи", name: "view" },
        { id: 500, text: "Николсон бухает, печптает книгу и ломает дверь", answer: "Сияние", name: "view" },
    ],
    slider = [
        { id: 100, text:karl, answer: "answer", name: "slider" },     
    ]

]

export default DB;