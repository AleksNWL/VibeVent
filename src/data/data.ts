import { z } from "zod";

export const zodSchema = z.object({
    id: z.string(),
    title: z.string(),
    category: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    image: z.string(),
})

export type Event = z.infer<typeof zodSchema>;

const data = [
    {
        id: "techExpo",
        title: "Выставка технологий",
        category: "Технологии",
        description: "Современные технологические тренды и гаджеты.",
        date: "2025-06-12",
        location: "Санкт-Петербург, Экспофорум",
        image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769"
    },
    {
        id: "foodFest",
        title: "Фестиваль уличной еды",
        category: "Еда",
        description: "Лучшие фудтраки и авторская кухня.",
        date: "2025-04-30",
        location: "Казань, Центральный парк",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
    },
    {
        id: "theaterNight",
        title: "Ночь в театре",
        category: "Театр",
        description: "Специальная ночь спектаклей и мастер-классов.",
        date: "2025-05-10",
        location: "Екатеринбург, Театр драмы",
        image: "https://www.theatreglas.ru/uploads/2023/03/WhatsApp-Image-2023-03-16-at-13.33.07-1-200x300.jpeg"
    },
    {
        id: "codingBootcamp",
        title: "Bootcamp по программированию",
        category: "Образование",
        description: "Интенсив по веб-разработке для начинающих.",
        date: "2025-06-01",
        location: "Новосибирск, IT-хаб",
        image: "https://www.dotlogics.com/images/new-about-us/discover.jpg"
    },
    {
        id: "comicCon",
        title: "Комик-Кон Россия",
        category: "Развлечения",
        description: "Косплей, комиксы, игры и встречи с актёрами.",
        date: "2025-07-15",
        location: "Москва, Экспоцентр",
        image: "https://a.d-cd.net/ef3d485s-1920.jpg"
    },
    {
        id: "jazzEvening",
        title: "Вечер джаза",
        category: "Музыка",
        description: "Атмосфера Нью-Йорка под открытым небом.",
        date: "2025-05-25",
        location: "Сочи, Летняя сцена",
        image: "https://avatars.mds.yandex.net/i?id=94af77acf845d53655a01830b6b36adf8795a08f-9098836-images-thumbs&n=13"
    },
    {
        id: "bookFair",
        title: "Книжная ярмарка",
        category: "Литература",
        description: "Тысячи книг, встречи с писателями, автографы.",
        date: "2025-09-10",
        location: "Москва, ВДНХ",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794"
    },
    {
        id: "filmFestival",
        title: "Фестиваль короткометражек",
        category: "Кино",
        description: "Показ лучших коротких фильмов со всего мира.",
        date: "2025-08-21",
        location: "Калининград, Кинотеатр 'Заря'",
        image: "https://m.media-amazon.com/images/M/MV5BYzM5ZTlmY2MtMjgzZS00Njk0LWIzMGMtN2FmNzQzNDM2NjMxXkEyXkFqcGc@._V1_.jpg"
    },
    {
        id: "yogaDay",
        title: "День йоги на природе",
        category: "Спорт",
        description: "Медитация, йога-сессии, питание.",
        date: "2025-06-21",
        location: "Краснодар, Парк 30-летия Победы",
        image: "https://a0.muscache.com/pictures/lombard/MtTemplate-935298-media_library/original/dc528385-8976-45eb-bb9d-5184f2689375.jpeg"
    },
    {
        id: "startupPitch",
        title: "Стартап-питч",
        category: "Бизнес",
        description: "Молодые команды презентуют свои проекты инвесторам.",
        date: "2025-07-01",
        location: "Москва, Digital October",
        image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
    },
    {
        id: "ecoForum",
        title: "Экологический форум",
        category: "Экология",
        description: "Будущее планеты и зелёные технологии.",
        date: "2025-10-10",
        location: "Санкт-Петербург, Планетарий",
        image: "https://i.pinimg.com/736x/de/a0/3f/dea03f66d5a33f86e03572de012a05a6.jpg"
    },
    {
        id: "danceBattle",
        title: "Танцевальный баттл",
        category: "Танцы",
        description: "Уличные танцы, хип-хоп, судейство от профи.",
        date: "2025-06-17",
        location: "Воронеж, Городской амфитеатр",
        image: "https://i.ytimg.com/vi/B5kQF4qccnM/maxresdefault.jpg"
    },
    {
        id: "artWeekend",
        title: "Арт-выходные",
        category: "Искусство",
        description: "Выставки, мастер-классы, живопись на пленэре.",
        date: "2025-05-04",
        location: "Пермь, Арт-резиденция",
        image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620"
    },
    {
        id: "scienceNight",
        title: "Ночь науки",
        category: "Наука",
        description: "Научные шоу, лекции и эксперименты.",
        date: "2025-11-03",
        location: "Томск, Научный центр",
        image: "https://images.squarespace-cdn.com/content/v1/605cb16a57c3483a98926c4b/1618275444705-467ITDC8TME89NOW8FRI/shutterstock_675978094.jpg"
    },
    {
        id: "fashionDay",
        title: "День моды",
        category: "Мода",
        description: "Показы от дизайнеров и модные зоны.",
        date: "2025-09-05",
        location: "Москва, Гостиный двор",
        image: "https://s.yimg.com/ny/api/res/1.2/Vilv6HkcBOh7kjGWUNu8iw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTE0NDA-/https://media.zenfs.com/en/page_six_articles_559/40b16151c2ceec924227c92b2b70d3b5"
    },
    {
        id: "retroAuto",
        title: "Ретро-авто выставка",
        category: "Авто",
        description: "Старинные автомобили и мотоциклы.",
        date: "2025-08-12",
        location: "Самара, Площадь Славы",
        image: "https://avatars.mds.yandex.net/i?id=f4a586d66ac2b72df4b8bafcdd9be52d_l-8453627-images-thumbs&n=13"
    },
    {
        id: "cinemaUnderStars",
        title: "Кино под звёздами",
        category: "Кино",
        description: "Открытые показы фильмов вечером.",
        date: "2025-07-28",
        location: "Ростов-на-Дону, Набережная",
        image: "https://i.pinimg.com/736x/15/8f/a4/158fa40f7e893dae8bc478a52ab53769.jpg"
    },
    {
        id: "digitalArt",
        title: "Цифровое искусство",
        category: "Искусство",
        description: "NFT, интерактив и медиа-арт.",
        date: "2025-06-09",
        location: "Москва, Центр цифрового искусства",
        image: "https://avatars.mds.yandex.net/get-shedevrum/12421798/img_acb929861aa111efb10f0272250bcc9d/orig"
    },
    {
        id: "indieMusic",
        title: "Фестиваль инди-музыки",
        category: "Музыка",
        description: "Молодые группы и атмосфера свободы.",
        date: "2025-07-19",
        location: "Уфа, Арена Фестивальная",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d"
    }
]

const result = zodSchema.array().safeParse(data);

if (!result.success) {
    console.error("Ошибка валидации!", result.error.format());
} else {
    const events: Event[] = result.data;
    console.log("Корректные события:", events);
}

export const events: Event[] = zodSchema.array().parse(data);