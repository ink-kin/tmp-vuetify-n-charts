<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="(item, i) in itemSmm"
          :key="i"
          class="mx-4 white--text"
          icon
          :to="item.href"
          :title="item.name"
        >
          <v-icon size="24px">{{ item.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      itemSmm: [
        {
          name: 'Twitter',
          icon: 'mdi-twitter',
          href: 'https://twitter.com/ilya_n_klishin/'
        },
        {
          name: 'Instagram',
          icon: 'mdi-instagram',
          href: 'https://www.instagram.com/ilyaklishin/'
        },
        {
          name: 'Facebook',
          href: 'https://www.facebook.com/ilya.n.klishin/',
          icon: 'mdi-facebook'
        },
        {
          name: 'vk',
          href: 'https://vk.com/ilya.n.klishin/',
          icon: 'mdi-vk'
        },
        {
          name: 'youtube',
          href: 'https://www.youtube.com/user/CSadvertising/',
          icon: 'mdi-youtube'
        },
        {
          name: 'disqus',
          href: 'https://disqus.com/by/ilya_klishin/',
          icon: 'mdi-disqus'
        },
        {
          name: 'reddit',
          href: 'https://www.reddit.com/user/kincsadv/',
          icon: 'mdi-reddit'
        },
        {
          name: 'discord',
          href: 'https://discord.gg/DpQFHGJ',
          icon: 'mdi-discord'
        },
        {
          name: 'linkedin',
          href: 'https://www.linkedin.com/in/ilya.n.klishin/',
          icon: 'mdi-linkedin'
        },
        {
          name: 'tumblr',
          href: 'https://ilya.n.klishin.tumblr.com/',
          icon: 'mdi-tumblr'
        },
        {
          name: 'slack',
          href: 'https://join.slack.com/t/csadvversebe/shared_invite/enQtNjkzNjYwODg2MTYwLTA0YThkYzVhMzYyODJhM2FhNThjN2NjNjZiMmI1NTAzZDhhOWIyZmNiYzYxNDFhMzQzOWIwNmUzNGRhZDQ0NjE',
          icon: 'mdi-slack'
        },
        {
          name: 'telegram',
          href: 'https://t.me/ilya_n_klishin',
          icon: 'mdi-telegram'
        },
        {
          name: 'whatsapp',
          href: 'https://wa.me/74951316875',
          icon: 'mdi-whatsapp'
        },
        {
          name: 'icq',
          href: 'https://icq.im/749348151',
          icon: 'mdi-comment-processing'
        },
        {
          name: 'STEAM',
          href: 'http://steamcommunity.com/id/ILyaKlishin',
          icon: 'mdi-steam'
        },
        {
          name: 'Skype',
          href: 'Skype:Catshack?chat',
          icon: 'mdi-skype'
        }
      ]
    }),
  }
</script>