export default {
  translation: {
    appName: 'Приложение',
    flash: {
      session: {
        create: {
          success: 'Вы залогинены',
          error: 'Неправильный емейл или пароль',
        },
        delete: {
          success: 'Вы разлогинены',
        },
      },
      users: {
        create: {
          error: 'Не удалось зарегистрировать пользователя',
          success: 'Пользователь успешно зарегистрирован',
        },
        update: {
          error: 'Не удалось обновить пользователя',
          success: 'Пользователь успешно обновлен',
        },
        delete: {
          error: 'Не удалось удалить пользователя',
          success: 'Пользователь успешно удален',
        },
      },
      authenticateError: 'Доступ запрещён! Пожалуйста, авторизируйтесь.',
      authorizeError: 'Доступ запрещен! У вас нет прав на это действие.',
    },
    layouts: {
      application: {
        users: 'Пользователи',
        signIn: 'Вход',
        signUp: 'Регистрация',
        signOut: 'Выход',
        updateProfile: 'Изменить профиль',
        deleteProfile: 'Удалить профиль',
      },
    },
    views: {
      session: {
        new: {
          signIn: 'Вход',
          submit: 'Войти',
          email: 'Email',
          password: 'Пароль',
        },
      },
      users: {
        id: 'ID',
        email: 'Email',
        createdAt: 'Создан',
        new: {
          submit: 'Сохранить',
          signUp: 'Регистрация',
          email: 'Email',
          password: 'Пароль',
        },
        edit: {
          edit: 'Редактировать профиль',
          submit: 'Сохранить',
          email: 'Email',
          password: 'Пароль',
        },
      },
      welcome: {
        index: {
          hello: 'Приветствие!',
          description: 'Тестовое задание для РегионКонсалт',
        },
      },
      errors: {
        minLength: 'Не должно быть короче 3 символов',
        format: 'Должно соответствовать формату эмейл',
        unique: 'Эмейл уже используется',
        default: 'Неизвестная ошибка',
      },
    },
  },
};
