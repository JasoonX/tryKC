<template>
  <div id="app" :class="$style.app">
    <vue-notification-stack />

    <vue-navigation-progress :is-navigating="isNavigating" />

    <vue-nav-bar>
      <ul :class="$style.nav">
        <li>
          <router-link to="/choose" @click.native="navBarClose">
            <vue-icon-choose />
            <small>{{ $t('App.nav.choose' /* Components */) }}</small>
          </router-link>
         </li>
         <li>
          <!--<a href="/teapot" @click.native="navBarClose">
            <vue-icon-puzzle-piece />
            <small>{{ $t('App.nav.teapot' /* Components */) }}</small>
          </router> -->
          <router-link to="/teapot" @click.native="navBarClose">
            <vue-icon-teapot />
            <small>{{ $t('App.nav.teapot' /* Components */) }}</small>
          </router-link>
         </li>
         <li>
          <router-link to="/microwave" @click.native="navBarClose">
            <vue-icon-microwave />
            <small>{{ $t('App.nav.microwave' /* Components */) }}</small>
          </router-link>
         </li>
         
        <li>
          <router-link to="/components" @click.native="navBarClose">
            <vue-icon-puzzle-piece />
            <small>{{ $t('App.nav.components' /* Components */) }}</small>
          </router-link>
        </li>
        <li>
          <a @click="localeSwitch('en')">
            <vue-icon-flag />
            <small>English</small>
          </a>
        </li>
        <li>
          <a @click="localeSwitch('ru')">
            <vue-icon-flag />
            <small>Русский</small>
          </a>
        </li>
      </ul>
    </vue-nav-bar>

    <router-view :class="$style.content" />

  
  </div>
</template>

<script lang="ts">
  import { mapActions, mapGetters } from 'vuex';
  import VueNavBar                  from '../../shared/components/VueNavBar/VueNavBar.vue';
  import VueGrid                    from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridItem                from '../../shared/components/VueGridItem/VueGridItem.vue';
  import VueFooter                  from '../../shared/components/VueFooter/VueFooter.vue';
  import VueNotificationStack       from '../../shared/components/VueNotificationStack/VueNotificationStack.vue';
  import VueCookieConsent           from '../../shared/components/VueCookieConsent/VueCookieConsent';
  import { loadLocaleAsync }        from '../../shared/plugins/i18n/i18n';
  import { EventBus }               from '../../shared/services/EventBus';
  import VueIconBook                from '../../shared/components/icons/VueIconBook/VueIconBook';
  import VueIconHashtag             from '../../shared/components/icons/VueIconHashtag/VueIconHashtag';
  import VueIconPuzzlePiece         from '../../shared/components/icons/VueIconPuzzlePiece/VueIconPuzzlePiece';
  import VueIconFlag                from '../../shared/components/icons/VueIconFlag/VueIconFlag';
  import VueNavigationProgress      from '../../shared/components/VueNavigationProgress/VueNavigationProgress';
  import VueIconTeapot              from '../../shared/components/icons/VueIconTeapot/VueIconTeapot';
  import VueIconMicrowave           from '../../shared/components/icons/VueIconMicrowave/VueIconMicrowave';
  import VueIconChoose              from '../../shared/components/icons/VueIconChoose/VueIconChoose';

  export default {
    components: {
      VueNavigationProgress,
      VueIconFlag,
      VueIconPuzzlePiece,
      VueIconHashtag,
      VueIconBook,
      VueIconTeapot,
      VueIconMicrowave,
      VueIconChoose,
      VueCookieConsent,
      VueNavBar,
      VueGrid,
      VueGridItem,
      VueFooter,
      VueNotificationStack,
    },
    data() {
      return {
        isNavigating: false,
      };
    },
    computed:   {
      ...mapGetters('app', ['cookieConsentVersion']),
    },
    methods:    {
      ...mapActions('app', ['changeLocale', 'setCookieConsentVersion']),
      localeSwitch(locale: string): void {
        loadLocaleAsync(locale)
        .catch((error: Error) => console.log(error));

        this.changeLocale(locale);
        this.navBarClose();
      },
      navBarClose() {
        EventBus.$emit('navbar.close');
      },
      initProgressBar() {
        this.$router.beforeEach((to: any, from: any, next: any) => {
          this.isNavigating = true;
          next();
        });
        this.$router.afterEach(() => {
          this.isNavigating = false;
        });
      },
    },
    created() {
      this.initProgressBar();
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";
  @import "../../shared/styles/reset";
  @import "../../shared/styles/typo";
  @import "../../shared/styles/global";
  @import url($google-font);

  .app {
    min-height:     100vh;
    display:        flex;
    flex-direction: column;
  }

  .content {
    flex: 1;
  }

  .nav {
    margin:         $space-unit 0 0 0;
    padding:        0;
    list-style:     none;
    display:        flex;
    flex-direction: row;
    flex-wrap:      wrap;
    width:          100%;

    li {
      flex:       1;
      margin:     $space-unit / 2;
      color:      $text-color;
      flex-basis: $space-unit * 10;
      height:     $space-unit * 10;
      background: $divider-color;
      cursor:     pointer;

      a {
        padding:         $space-unit * 2;
        display:         block;
        color:           $text-color;
        text-align:      center;
        text-decoration: none;

        small {
          font-size: 12px;
          display:   block;
        }

        i {
          height: 32px;
          width:  32px;
        }
      }
    }

    @include media(tabletLandscape) {
      margin: 0;

      li {
        margin:     $space-unit;
        opacity:    .8;
        transition: opacity $transition-duration linear;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
</style>
