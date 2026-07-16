export type NavigationChild = {
  id: string;
  label: string;
};

export type NavigationItem = {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  count: string;
  children?: NavigationChild[];
};

export const navigation: NavigationItem[] = [
  {
    id: 'leadership', label: 'Руководство отдела', shortLabel: 'Руководство', description: 'Руководители подразделений и состав отдела', count: '01',
    children: [{ id: 'leadership-tree', label: 'Структура руководства' }],
  },
  {
    id: 'rules', label: 'Экипировка', shortLabel: 'Экипировка', description: 'Спецсредства и табельное оружие', count: '02',
    children: [{ id: 'rules-equipment', label: 'Экипировка и оружие' }],
  },
  {
    id: 'binds', label: 'Бинды и команды', shortLabel: 'Бинды', description: 'Команды для типовых ситуаций', count: '03',
    children: [{ id: 'binds-commands', label: 'Команды службы' }, { id: 'binds-animations', label: 'Фракционные анимации' }, { id: 'binds-presentation', label: 'Представление и документы' }, { id: 'binds-protocol', label: 'Оформление протокола' }, { id: 'binds-stop', label: 'Остановка Т/С' }, { id: 'binds-tablet', label: 'Планшет и база МВД' }, { id: 'binds-special', label: 'Спецсредства и задержание' }, { id: 'binds-radio', label: 'Рация и базы розыска' }, { id: 'binds-extra', label: 'Дополнительные бинды' }],
  },
  {
    id: 'reports', label: 'Доклады', shortLabel: 'Доклады', description: 'Форматы докладов и вызовов', count: '04',
    children: [{ id: 'reports-shift', label: 'Смена и перерыв' }, { id: 'reports-car', label: 'Автопатруль' }, { id: 'reports-heli', label: 'Вертолёт' }, { id: 'reports-foot', label: 'Пеший патруль' }, { id: 'reports-moto', label: 'Мотопатруль' }, { id: 'reports-call', label: 'Принятие вызова' }, { id: 'reports-post', label: 'Передвижной пост' }, { id: 'reports-oon', label: 'Отлов ООН' }, { id: 'reports-mvd', label: 'Общая рация МВД' }],
  },
  {
    id: 'autopark', label: 'Автопарк', shortLabel: 'Автопарк', description: 'Транспорт и уровни доступа', count: '05',
    children: [{ id: 'autopark-cars', label: 'Машины подразделения' }, { id: 'autopark-rules', label: 'Правила использования' }],
  },
  {
    id: 'posts', label: 'Посты', shortLabel: 'Посты', description: 'Расположение и обязанности', count: '06',
    children: [{ id: 'posts-mobile', label: 'Передвижные посты' }, { id: 'posts-special', label: 'Специальные посты ОМВД' }],
  },
  {
    id: 'callsigns', label: 'Позывные', shortLabel: 'Позывные', description: 'Система обозначений в эфире', count: '07',
    children: [{ id: 'callsigns-format', label: 'Форматы подразделений' }, { id: 'callsigns-duty', label: 'Обязанности в эфире' }],
  },
];
