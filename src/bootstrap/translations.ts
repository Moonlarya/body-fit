import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      AddPlaylist: {
        welcome_title: "Let's get better!",
        welcome_subtitle: "Choose workout program and let's start!",
        select_direction: "Choose here",
        go_button: "Go!",
      },
      CreatePlayList: {
        title: "Take it yourself!",
        subtitle: "You can create your own workout program",
        day: "Day",
        save_button: "Save workout",
      },
      DayForm: {
        adding_for: "Adding for day",
        add_link: "Add url",
        save_day: "Save day",
      },
      MyWorkouts: {
        title: "Let's build yourself!",
        subtitle: "Now you can workout with your favourite workouts",
        choose: "Choose here",
        404: "You haven't create your own workout yet :C",
        day: "DAY",
        create_button: "Create workout set",
      },
    },
  },
  ua: {
    translation: {
      AddPlaylist: {
        welcome_title: "Давай ставати краще разом!",
        welcome_subtitle: "Обирай програму для тренувань і давай розпочнемо!",
        select_direction: "Обирати тут",
        go_button: "Поїхали!",
      },
      CreatePlayList: {
        title: "Ти знаєш як тобі краще!",
        subtitle:
          "Ти можеш створити власну програму тренувань з улюблених відео на Youtube!",
        day: "День",
        save_button: "Зберегти програму",
      },
      DayForm: {
        adding_for: "Додати вправи для дня №",
        add_link: "Додати посилання",
        save_day: "Зберегти день",
      },
      MyWorkouts: {
        title: "Давай будувати себе!",
        subtitle: "Тепер ти можеш обрати улюблениму програмаму тренувань",
        choose: "Обирати тут",
        404: "Тут поки що немає створених власноруч тренувань :C",
        day: "ДЕНЬ",
        create_button: "Створити тренування",
      },
    },
  },
  ru: {
    translation: {
      AddPlaylist: {
        welcome_title: "Давай совершенствоваться вместе!",
        welcome_subtitle: "Выбирай программу для тренировок и давай начнем!",
        select_direction: "Выбирать тут",
        go_button: "Погнали!",
      },
      CreatePlayList: {
        title: "Ты знаешь как тебе лучше!",
        subtitle:
          "Ты можешь создать собственную программу тренировок по любимым видео на Youtube!",
        day: "День",
        save_button: "Сохранить программу",
      },
      DayForm: {
        adding_for: "Добавить упражнения для дня №",
        add_link: "Добавить ссылку",
        save_day: "Сохранить день",
      },
      MyWorkouts: {
        title: "Давай строить себя по кирпичику!",
        subtitle: "Теперь ты можешь заниматься по любимой программе тренировок",
        choose: "Выбирать тут",
        404: "Пока что тут нет созданных самостоятельно тренировок :C",
        day: "ДЕНЬ",
        create_button: "Создать тренировку",
      },
    },
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    saveMissing: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
