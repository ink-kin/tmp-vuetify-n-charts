<template>
  <v-app id="sandbox">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      app
      overflow
    >
      <v-img src="@/assets/Communication-Service-logo.png" />
        <v-list dense>
          <router-link to="/">
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-home</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Маркетинговый отчёт</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
          <v-list-item link>
            <v-list-item-action>
              <v-icon @click="show1 = !show1">mdi-table</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title @click="show1 = !show1">Анализ</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <router-link :to="item.to" v-for="item in menuLiItemshow1" :key="item.title">
            <v-list-item link v-show="show1">
              <v-list-item-action>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{item.title}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
          <v-list-item link>
            <v-list-item-action>
              <v-icon @click="show2 = !show2">mdi-map</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title @click="show2 = !show2">Торги</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <router-link :to="item.to" v-for="item in menuLiItemshow2" :key="item.title">
            <v-list-item link v-show="show2">
              <v-list-item-action>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{item.title}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
          <v-list-item link>
            <v-list-item-action>
              <v-icon @click="show3 = !show3">mdi-chart-pie</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title @click="show3 = !show3">Медиа</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <router-link :to="item.to" v-for="item in menuLiItemshow3" :msg="item.title" :key="item.title">
            <v-list-item link v-show="show3">
              <v-list-item-action>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{item.title}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
          <v-list-item link>
            <v-list-item-action>
              <v-icon @click="show4 = !show4">mdi-page-next-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title @click="show4 = !show4">Страницы сайта</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <router-link :to="item.to" v-for="item in menuLiItemshow4" :key="item.title">
            <v-list-item link v-show="show4">
              <v-list-item-action>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{item.title}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="primaryDrawer.clipped"
      app
    >
      <v-app-bar-nav-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      />
      <v-toolbar-title>Сервис Коммуникаций и Маркетинга</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

    <v-btn
      bottom
      color="pink"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
    >
      <v-icon>mdi-settings</v-icon>
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="800px"
    >
      <v-card>
        <v-card-text>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <span>Scheme</span>
              <v-switch
                v-model="$vuetify.theme.dark"
                primary
                label="Dark"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <span>Drawer</span>
              <v-radio-group
                v-model="primaryDrawer.type"
                column
              >
                <v-radio
                  v-for="drawer in drawers"
                  :key="drawer"
                  :label="drawer"
                  :value="drawer.toLowerCase()"
                  primary
                />
              </v-radio-group>
              <v-switch
                v-model="primaryDrawer.clipped"
                label="Clipped"
                primary
              />
              <v-switch
                v-model="primaryDrawer.floating"
                label="Floating"
                primary
              />
              <v-switch
                v-model="primaryDrawer.mini"
                label="Mini"
                primary
              />
            </v-col>
            <!-- v-col
              cols="12"
              md="6"
            >
              <span>Footer</span>
              <v-switch
                v-model="footer.inset"
                label="Inset"
                primary
              />
            </v-col -->
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            text
            color="primary"
            @click="dialog = !dialog"
          >Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  export default {
    data: () => (
      {drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false,
      },
      footer: {
        inset: false,
      },
      title: 'Илья Клишин',
      dialog: false,
      drawer: null,
      show1: false,
      show2: false,
      show3: false,
      show4: true,
      xbodyitems: [
        { icon: 'mdi-contacts', text: 'Синопсис', href: "/contact" },
        { icon: 'mdi-help-circle', text: 'Помощь', href: "/contact" },
        { icon: 'mdi-content-copy', text: 'Услуги', href: "/contact" },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-search-web',
          text: 'Сайт',
          model: false,
          href: "/contact",
          children: [
            { icon: 'mdi-search-web', text: 'Проведение исследований', href: "/contact" },
            { icon: 'mdi-search-web', text: 'Создание дизайн-макета сайта', href: "/contact" },
            { icon: 'mdi-search-web', text: 'Программирование и CMS', href: "/contact" },
            { icon: 'mdi-search-web', text: 'Наполнение сайта', href: "/contact" },
            { icon: 'mdi-search-web', text: 'Запуск, развитие и продвижение', href: "/contact" },
          ],
        },
        { icon: 'mdi-message', text: 'Сценическая речь', href: "/contact" },
        { icon: 'mdi-settings', text: 'Техника', href: "/contact" },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-presentation-play',
          text: 'МАРКЕТИНГ И РЕКЛАМА',
          model: false,
          href: "/contact",
          children: [
            { icon: 'mdi-presentation-play', text: 'Media/СМИ', href: "/contact" },
            { icon: 'mdi-presentation-play', text: 'Медиа План', href: "/contact" },
            { icon: 'mdi-presentation-play', text: 'Медиа закупки', href: "/contact" },
            { icon: 'mdi-presentation-play', text: 'Маркетинг', href: "/contact" },
            { icon: 'mdi-presentation-play', text: 'Исследования', href: "/contact" },
            { icon: 'mdi-presentation-play', text: 'PR/SMM', href: "/contact" },
            { icon: 'mdi-presentation-play', text: 'Инфоповод', href: "/contact" },
            { icon: 'mdi-presentation-play', text: 'Контент', href: "/contact" },
            { icon: 'mdi-presentation-play', text: 'Мероприятия', href: "/contact" },
            { icon: 'mdi-presentation-play', text: 'Промо', href: "/contact" },
            { icon: 'mdi-presentation-play', text: 'Креатив', href: "/contact" },
            { icon: 'mdi-presentation-play', text: 'Нэйминг', href: "/contact" },
            { icon: 'mdi-presentation-play', text: 'Бренд  Бук', href: "/contact" },
            { icon: 'mdi-presentation-play', text: 'Mediascope/TNS', href: "/contact" },
            { icon: 'mdi-presentation-play', text: 'MLG.ru', href: "/contact" },
            { icon: 'mdi-presentation-play', text: 'Интернет', href: "/contact" },
            { icon: 'mdi-presentation-play', text: 'YouScan.ru', href: "/contact" },
            { icon: 'mdi-presentation-play', text: 'сайт/портал', href: "/contact" },
            { icon: 'mdi-presentation-play', text: 'ИнформАгентства', href: "/contact" },
            { icon: 'mdi-presentation-play', text: 'Агентства', href: "/contact" },
          ],
        },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-finance',
          text: 'ПРОДАЖИ И КЛИЕНТЫ',
          model: false,
          href: "/contact",
          children: [
            { icon: 'mdi-finance', text: 'Теория продаж', href: "/contact" },
            { icon: 'mdi-finance', text: 'Презентация', href: "/contact" },
            { icon: 'mdi-finance', text: 'Виды  клиентов', href: "/contact" },
            { icon: 'mdi-finance', text: 'Вебинар', href: "/contact" },
            { icon: 'mdi-finance', text: 'CRM', href: "/contact" },
            { icon: 'mdi-finance', text: 'Встреча с ТОП', href: "/contact" },
            { icon: 'mdi-finance', text: 'Call-центр', href: "/contact" },
            { icon: 'mdi-finance', text: 'Email маркетинг', href: "/contact" },
          ],
        },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-human-handsup',
          text: 'КАДРЫ И ТАЛАНТЫ',
          model: false,
          href: "/contact",
          children: [
            { icon: 'mdi-human-handsup', text: 'Собственник', href: "/contact" },
            { icon: 'mdi-human-handsup', text: 'ЛПР и структура', href: "/contact" },
            { icon: 'mdi-human-handsup', text: 'Виды  персонала', href: "/contact" },
            { icon: 'mdi-human-handsup', text: 'Тестирование', href: "/contact" },
            { icon: 'mdi-human-handsup', text: 'Гибкая  методика разработки', href: "/contact" },
            { icon: 'mdi-human-handsup', text: 'Авторитарный  стиль управления', href: "/contact" },
            { icon: 'mdi-human-handsup', text: 'Система оплаты  в др. Египте', href: "/contact" },
            { icon: 'mdi-human-handsup', text: 'Собственники: ччв', href: "/contact" },
            { icon: 'mdi-human-handsup', text: 'HR', href: "/contact" },
            { icon: 'mdi-human-handsup', text: 'Резерв кадров', href: "/contact" },
            { icon: 'mdi-human-handsup', text: 'Мотивация', href: "/contact" },
            { icon: 'mdi-human-handsup', text: 'Цели бизнеса пиратов', href: "/contact" },
            { icon: 'mdi-human-handsup', text: 'Целевое обучение персонала', href: "/contact" },
            { icon: 'mdi-human-handsup', text: 'Смена менеджмента', href: "/contact" },
            { icon: 'mdi-human-handsup', text: 'Как увольнять?', href: "/contact" },
            { icon: 'mdi-human-handsup', text: 'Коррупция', href: "/contact" },
            { icon: 'mdi-human-handsup', text: 'Информационная блокада собственника', href: "/contact" },
            { icon: 'mdi-human-handsup', text: 'Риски Талантов', href: "/contact" },
            { icon: 'mdi-human-handsup', text: 'Риски и Я', href: "/contact" },
            { icon: 'mdi-human-handsup', text: 'Риски роста', href: "/contact" },
            { icon: 'mdi-human-handsup', text: 'Секты и другие захваты бизнеса', href: "/contact" },
          ],
        },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-desktop-tower-monitor',
          text: 'ИННОВАЦИИ',
          model: false,
          href: "/contact",
          children: [
            { icon: 'mdi-desktop-tower-monitor', text: 'ERP', href: "/contact" },
            { icon: 'mdi-desktop-tower-monitor', text: 'CMS', href: "/contact" },
            { icon: 'mdi-desktop-tower-monitor', text: 'CRM', href: "/contact" },
            { icon: 'mdi-desktop-tower-monitor', text: 'Простой набор IT&soft', href: "/contact" },
            { icon: 'mdi-desktop-tower-monitor', text: 'Поиск ИС', href: "/contact" },
            { icon: 'mdi-desktop-tower-monitor', text: 'Сервисы', href: "/contact" },
            { icon: 'mdi-desktop-tower-monitor', text: 'Moe-delo.ru', href: "/contact" },
            { icon: 'mdi-desktop-tower-monitor', text: 'Sbis.ru', href: "/contact" },
            { icon: 'mdi-desktop-tower-monitor', text: 'Контур', href: "/contact" },
          ],
        },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-currency-rub',
          text: 'ФИНАНСЫ, ПРОДЮСИРОВАНИЕ',
          model: false,
          href: "/contact",
          children: [
            { icon: 'mdi-currency-rub', text: 'Бизнес План', href: "/contact" },
            { icon: 'mdi-currency-rub', text: 'Контур управления', href: "/contact" },
            { icon: 'mdi-currency-rub', text: 'Задача 6 пунктов', href: "/contact" },
            { icon: 'mdi-currency-rub', text: 'необходимо и достаточно', href: "/contact" },
            { icon: 'mdi-currency-rub', text: 'Диаграмма Ганта', href: "/contact" },
            { icon: 'mdi-currency-rub', text: '7 точек контроля', href: "/contact" },
            { icon: 'mdi-currency-rub', text: 'Налоги', href: "/contact" },
            { icon: 'mdi-currency-rub', text: 'Бухгалтерия', href: "/contact" },
            { icon: 'mdi-currency-rub', text: 'Закрытие ООО', href: "/contact" },
          ],
        },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-security',
          text: 'ЮРИСТЫ И БЕЗОПАСНОСТЬ',
          model: false,
          href: "/contact",
          children: [
            { icon: 'mdi-security', text: 'Регистрация ИС', href: "/contact" },
            { icon: 'mdi-security', text: 'ИП, ООО ets', href: "/contact" },
            { icon: 'mdi-security', text: 'Start Up этапы', href: "/contact" },
            { icon: 'mdi-security', text: 'ЭЦП и авторы', href: "/contact" },
            { icon: 'mdi-security', text: 'Автор. договор', href: "/contact" },
            { icon: 'mdi-security', text: 'Автор оплата', href: "/contact" },
            { icon: 'mdi-security', text: 'ТК и ГПД', href: "/contact" },
            { icon: 'mdi-security', text: 'Вход Капитала', href: "/contact" },
            { icon: 'mdi-security', text: 'Лицензия', href: "/contact" },
            { icon: 'mdi-security', text: 'Лентяй собственник', href: "/contact" },
            { icon: 'mdi-security', text: 'Суды I,II,III', href: "/contact" },
            { icon: 'mdi-security', text: 'Выход из управления', href: "/contact" },
            { icon: 'mdi-security', text: 'Выход из бизнеса', href: "/contact" },
          ],
        },
        { icon: 'mdi-ubuntu', text: 'Ссылки', href: "/contact" },
        { icon: 'mdi-cellphone-text', text: 'Сервисы', href: "/contact" },
      ],
      menuLiItemshow1: [
        {title: 'Анализ', icon: 'mdi-table', to: '/Chart'},
        {title: 'I 46.6', icon: 'mdi-table', to: '/report466'},
        {title: 'I 46.69.8', icon: 'mdi-table', to: '/report46_69_8'},
        {title: 'I 46.69.9', icon: 'mdi-table', to: '/report46_69_8'},
        {title: 'II 46.6', icon: 'mdi-table', to: '/report466'},
        {title: 'III 46.6', icon: 'mdi-table', to: '/report466'},
        {title: '02 46.6', icon: 'mdi-table', to: '/report466'},
        {title: '03 46.6', icon: 'mdi-table', to: '/report466'},
        {title: '04 46.6', icon: 'mdi-table', to: '/report466'},
        {title: '05 46.6', icon: 'mdi-table', to: '/report466'},
        {title: '06 46.6', icon: 'mdi-table', to: '/report466'},
        {title: '07 46.6', icon: 'mdi-table', to: '/report466'},
        {title: '08 46.6', icon: 'mdi-table', to: '/report466'},
        {title: '09 46.6', icon: 'mdi-table', to: '/report466'},
        {title: '10 46.6', icon: 'mdi-table', to: '/report466'},
        {title: 'I 28.2', icon: 'mdi-table', to: '/report466'},
        {title: 'II 28.2', icon: 'mdi-table', to: '/report466'},
        {title: 'III 28.2', icon: 'mdi-table', to: '/report466'},
        {title: '02 28.2', icon: 'mdi-table', to: '/report466'},
        {title: '03 28.2', icon: 'mdi-table', to: '/report466'},
        {title: '04 28.2', icon: 'mdi-table', to: '/report466'},
        {title: '05 28.2', icon: 'mdi-table', to: '/report466'},
        {title: '06 28.2', icon: 'mdi-table', to: '/report466'},
        {title: '07 28.2', icon: 'mdi-table', to: '/report466'},
        {title: '08 28.2', icon: 'mdi-table', to: '/report466'},
        {title: '09 28.2', icon: 'mdi-table', to: '/report466'},
        {title: '10 28.2', icon: 'mdi-table', to: '/report466'},
        {title: 'I 28.4', icon: 'mdi-table', to: '/report466'},
        {title: 'II 28.4', icon: 'mdi-table', to: '/report466'},
        {title: 'III 28.4', icon: 'mdi-table', to: '/report466'},
        {title: '02 28.4', icon: 'mdi-table', to: '/report466'},
        {title: '03 28.4', icon: 'mdi-table', to: '/report466'},
        {title: '04 28.4', icon: 'mdi-table', to: '/report466'},
        {title: '05 28.4', icon: 'mdi-table', to: '/report466'},
        {title: '06 28.4', icon: 'mdi-table', to: '/report466'},
        {title: '07 28.4', icon: 'mdi-table', to: '/report466'},
        {title: '08 28.4', icon: 'mdi-table', to: '/report466'},
        {title: '09 28.4', icon: 'mdi-table', to: '/report466'},
        {title: '10 28.4', icon: 'mdi-table', to: '/report466'},
        {title: 'I 43.2', icon: 'mdi-table', to: '/report466'},
        {title: 'II 43.2', icon: 'mdi-table', to: '/report466'},
        {title: 'III 43.2', icon: 'mdi-table', to: '/report466'},
        {title: '02 43.2', icon: 'mdi-table', to: '/report466'},
        {title: '03 43.2', icon: 'mdi-table', to: '/report466'},
        {title: '04 43.2', icon: 'mdi-table', to: '/report466'},
        {title: '05 43.2', icon: 'mdi-table', to: '/report466'},
        {title: '06 43.2', icon: 'mdi-table', to: '/report466'},
        {title: '07 43.2', icon: 'mdi-table', to: '/report466'},
        {title: '08 43.2', icon: 'mdi-table', to: '/report466'},
        {title: '09 43.2', icon: 'mdi-table', to: '/report466'},
        {title: '10 43.2', icon: 'mdi-table', to: '/report466'},
      ],
      menuLiItemshow2: [
        {title: 'Торги 46.6', icon: 'mdi-map', to: '/TorgTab466'},
        {title: 'Торги I 46.6', icon: 'mdi-map', to: '/TorgTab466I'},
        {title: 'Торги II 46.6', icon: 'mdi-map', to: '/TorgTab466II'},
        {title: 'Торги I 46.69', icon: 'mdi-map', to: '/TorgTab4669'},
        {title: 'Торги (46.66)', icon: 'mdi-map', to: '/TorgTab4666'},
        {title: 'Торги I 46.66', icon: 'mdi-map', to: '/TorgTab4666I'},
        {title: 'Торги II 46.66', icon: 'mdi-map', to: '/TorgTab4666II'},
        {title: 'Торги III 46.66', icon: 'mdi-map', to: '/TorgTab466III'},
        {title: 'Торги X 46.66', icon: 'mdi-map', to: '/TorgTab466X'},
        {title: 'Торги (46.6) 02.2019', icon: 'mdi-map', to: '/TorgTab466m02'},
        {title: 'Торги (46.6) 03.2019', icon: 'mdi-map', to: '/TorgTab466m03'},
        {title: 'Торги (46.6) 04.2019', icon: 'mdi-map', to: '/TorgTab466m04'},
        {title: 'Торги (46.6) 05.2019', icon: 'mdi-map', to: '/TorgTab466m05'},
        {title: 'Торги (46.6) 06.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (46.6) 07.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (46.6) 08.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (46.6) 09.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (46.6) 10.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги II (46.6)', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги 28.2', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.2) 10.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.2) 09.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.2) 08.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.2) 07.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.2) 06.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.2) 05.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.2) 04.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.2) 03.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.2) 02.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (46.6) 01.02.2019 до 31.10.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.2) Мск МО СПб 01.02.2019 до 31.10.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.2) свыше 10млн р 01.02.2019 до 31.10.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.4) 01.02.2019 до 31.10.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.4) 02.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.4) 03.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.4) 04.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.4) 05.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.4) 06.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.4) 07.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.4) 08.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.4) 09.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.4) 10.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (28.2) регионы 01.02.2019 до 31.10.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (43.2) 10.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (43.2) 09.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (43.2) 08.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (43.2) 07.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (43.2) 06.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (43.2) 05.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (43.2) 04.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (43.2) 03.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (43.2) 02.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (43.2) свыше 5млн р 01.02.2019 до 31.10.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (46.1) 01.02.2019 до 31.10.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги I (46.1)', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги I (46.1) расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги II (46.1)', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги III (46.1)', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги III (46.1) расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги II (46.1) расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги X (46.1)', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги X (46.1) расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (52.29) 01.02.2019 до 31.10.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (52.29) 01.02.2019 до 31.10.2019 расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги I (52.29)', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги I (52.29) расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги II (52.29)', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги II (52.29) расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги III (52.29)', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги III (52.29) расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги X (52.29)', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги X (52.29) расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (70.22) 01.02.2019 до 31.10.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (70.22) 01.02.2019 до 31.10.2019 расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги I (70.22)', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги I (70.22) расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги II (70.22)', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги II (70.22) расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги III (70.22)', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги III (70.22) расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги X (70.22)', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги X (70.22) расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (71.1) свыше 5млн р 01.02.2019 до 31.10.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (71.1) свыше 5млн р 01.02.2019 до 31.10.2019 расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги I (71.1) свыше 5млн р', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги I (71.1) свыше 5млн р расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги II (71.1) свыше 5млн р', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги II (71.1) свыше 5млн р расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги III (71.1) свыше 5млн р', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги III (71.1) свыше 5млн р расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги X (71.1) свыше 5млн р', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги X (71.1) свыше 5млн р расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (71.12) свыше 5млн р 01.02.2019 до 31.10.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (71.12) свыше 5млн р 01.02.2019 до 31.10.2019расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (73.20) 01.02.2019 до 31.10.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (73.20) 01.02.2019 до 31.10.2019 расширенный', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (82.99) 01.02.2019 до 31.10.2019', icon: 'mdi-map', to: '/Torg282'},
        {title: 'Торги (82.99) 01.02.2019 до 31.10.2019 расширенный', icon: 'mdi-map', to: '/Torg282'}
      ],
      menuLiItemshow3: [
        {title: 'Media Dashboard', icon: 'mdi-chart-pie', to: '/Brands'},
        {title: 'События', icon: 'mdi-chart-pie', to: '/profile'},
        {title: 'Media Tables', icon: 'mdi-chart-pie', to: '/media'},
        {title: 'Рейтинг Упоминаний', icon: 'mdi-chart-pie', to: '/Brands'},
      ],
      menuLiItemshow4: [
        {title: 'Добро пожаловать!', icon: 'mdi-page-next-outline', to: '/PageHelloWorld'},
        {title: 'Блоки', icon: 'mdi-page-next-outline', to: '/PageCarts'},
        {title: 'Торги II 46.6', icon: 'mdi-page-next-outline', to: '/TorgTab466II'},
        {title: 'Торги I 46.69', icon: 'mdi-page-next-outline', to: '/TorgTab4669'},
        {title: 'Торги (46.66)', icon: 'mdi-page-next-outline', to: '/TorgTab4666'},
        {title: 'Торги I 46.66', icon: 'mdi-page-next-outline', to: '/TorgTab4666I'},
        {title: 'Торги II 46.66', icon: 'mdi-page-next-outline', to: '/TorgTab4666II'},
        {title: 'Торги III 46.66', icon: 'mdi-page-next-outline', to: '/TorgTab466III'},
        {title: 'Торги X 46.66', icon: 'mdi-page-next-outline', to: '/TorgTab466X'}
      ]
    }),
  }
</script>
