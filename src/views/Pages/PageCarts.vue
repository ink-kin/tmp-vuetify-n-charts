<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
          md="4"
        >
                    <v-card
          >
            <v-list-item>
              <v-list-item-avatar color="grey"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">{{item.title}}</v-list-item-title>
                <v-list-item-subtitle>{{item.subtitle}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img
              src="https://picsum.photos/1920/1080?random"
              height="194"
            ></v-img>

            <v-card-text>
              {{item.text}}
            </v-card-text>

            <v-card-actions>
              <v-btn
                text
                color="deep-purple accent-4"
              >
                Read
              </v-btn>
              <v-btn
                text
                color="deep-purple accent-4"
              >
                Bookmark
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
          md="12"
        >
                    <v-card
          >
            <v-list-item>
              <v-list-item-avatar color="grey"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">{{item.title}}</v-list-item-title>
                <v-list-item-subtitle>{{item.subtitle}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img
              src="https://picsum.photos/1920/1080?random"
              height="194"
            ></v-img>

            <v-card-text>
              {{item.text}}
            </v-card-text>

            <v-card-actions>
              <v-btn
                text
                color="deep-purple accent-4"
              >
                Read
              </v-btn>
              <v-btn
                text
                color="deep-purple accent-4"
              >
                Bookmark
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {icon: 'mdi-facebook', title: 'характеристика', subtitle:'Теория продаж', text: 'Характеристика – первый пункт алгоритма FAQ – означает точные показатели продукта. Приведем пример. Технические показатели и спецификация. Объем. Например, габариты стиральной машинки — 850, 600, 300; или объем оперативной памяти – 8 Gb; или количество камер в оконном профиле – 5'},
        {icon: 'mdi-twitter', title: 'преимущество', subtitle:'Теория продаж', text: 'Преимущество представляет собой потенциальную пользу, которую продукт может обеспечить покупателю. Узкая стиральная машинка – вы сможете поставить ее куда угодно. Большой объем оперативной памяти в ноутбуке – устройство будет работать быстро. Пятикамерное окно — не пропускает вообще никакой звук и удерживает тепло. Любое свойство продукта предоставляет повод обдумать, какое именно преимущество оно дает. Иногда даже явный недостаток можно представить как преимущество в конкретной ситуации.'},
        {icon: 'mdi-google-plus', title: 'выгода', subtitle:'Теория продаж', text: 'Выгода – это преимущество товара, которое точно соответствует потребностям покупателя. Куда угодно поставленная стиральная машинка позволит сэкономить место.  Быстрый ноутбук будет работать с мощными программными пакетами и не нервировать пользователя. Окно, не пропускающее вообще никакой звук, позволит высыпаться даже, если снаружи достаточно шумно и вообще идет военный парад.'},
      ],
    }),
  }
</script>