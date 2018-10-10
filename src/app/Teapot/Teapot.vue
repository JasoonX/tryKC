<template>
  <div :class="$style.components">
    <div :class="$style.header">
      <vue-grid>
        <vue-grid-row>
          <vue-grid-item class="vueGridItem">
            <h1>{{ $t('App.nav.teapot' /* Components */) }}</h1>
          </vue-grid-item>
        </vue-grid-row>
      </vue-grid>
    </div>

    <vue-grid>
      <!--vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>Inputs</h2>
          <vue-input
            name="input1"
            id="input1"
            placeholder="Placeholder"
            message="test"
            v-model="inputValue" />
          <br />
          <vue-input
            name="input2"
            id="input2"
            placeholder="Placeholder"
            disabled
            v-model="inputValue" />
        </vue-grid-item -->

      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>Temperature</h2>
        </vue-grid-item>
        <vue-grid-item>
            <vue-slider
              :min="0"
              :max="100"
              :values="[0]"
              @change="sliderChange"
              :formatValue="formatSliderValue"
              :disabled="isDisabled"
            />
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>Time left</h2>
        </vue-grid-item>
        <vue-grid-item>
          <br />
          <h4>
            <vue-input
                name="input2"
                id="input2"
                disabled
                v-model="inputValue"
                 />    
          </h4>
        </vue-grid-item>
      </vue-grid-row>
       <vue-grid-row>
          <vue-grid-item class="vueGridItem">
          <h2>On/Off</h2>
          </vue-grid-item>
        <vue-grid-item class="vueGridItem">
          <br />
          <br />
          <vue-toggle
            name="toggle"
            id="toggle"
            v-model="toggle"
            label="Off"
            @click = "addNotificationSwitch"
          />
        </vue-grid-item>
      </vue-grid-row>
     
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid                                          from '../shared/components/VueGrid/VueGrid.vue';
  import VueGridItem                                      from '../shared/components/VueGridItem/VueGridItem.vue';
  import VueButton                                        from '../shared/components/VueButton/VueButton.vue';
  import VueLoader                                        from '../shared/components/VueLoader/VueLoader.vue';
  import VuePanel                                         from '../shared/components/VuePanel/VuePanel.vue';
  import VuePanelHeader
                                                          from '../shared/components/VuePanel/VuePanelHeader/VuePanelHeader.vue';
  import VuePanelBody
                                                          from '../shared/components/VuePanel/VuePanelBody/VuePanelBody.vue';
  import VuePanelFooter
                                                          from '../shared/components/VuePanel/VuePanelFooter/VuePanelFooter.vue';
  import VueInput                                         from '../shared/components/VueInput/VueInput.vue';
  import VueCollapse                                      from '../shared/components/VueCollapse/VueCollapse.vue';
  import VueModal                                         from '../shared/components/VueModal/VueModal.vue';
  import VueTabGroup                                      from '../shared/components/VueTabGroup/VueTabGroup.vue';
  import VueTabItem
                                                          from '../shared/components/VueTabGroup/VueTabItem/VueTabItem.vue';
  import VueCheckbox                                      from '../shared/components/VueCheckbox/VueCheckbox.vue';
  import VueTooltip                                       from '../shared/components/VueTooltip/VueTooltip.vue';
  import VueSlider                                        from '../shared/components/VueSlider/VueSlider.vue';
  import VueAccordion                                     from '../shared/components/VueAccordion/VueAccordion.vue';
  import VueAccordionItem
                                                          from '../shared/components/VueAccordion/VueAccordionItem/VueAccordionItem.vue';
  import VuePagination
                                                          from '../shared/components/VuePagination/VuePagination.vue';
  import VueSelect                                        from '../shared/components/VueSelect/VueSelect.vue';
  import VueCalendar                                      from '../shared/components/VueCalendar/VueCalendar.vue';
  import VueDatePicker
                                                          from '../shared/components/VueDatePicker/VueDatePicker.vue';
  import VueDateRangePicker
                                                          from '../shared/components/VueDateRangePicker/VueDateRangePicker.vue';
  import { addNotification, INotification }               from '../shared/components/VueNotificationStack/utils';
  import VueMarkdown                                      from '../shared/components/VueMarkdown/VueMarkdown';
  import VueGridRow                                       from '../shared/components/VueGridRow/VueGridRow';
  import VueAutocomplete
                                                          from '../shared/components/VueAutocomplete/VueAutocomplete';
  import { AutocompleteOptionsFixture }                   from '../shared/components/VueAutocomplete/fixtures/IAutocompleteFixture';
  import VueBadge                                         from '../shared/components/VueBadge/VueBadge';
  import { IAutocompleteOption }                          from '../shared/components/VueAutocomplete/IAutocompleteOption';
  import VueTruncate                                      from '../shared/components/VueTruncate/VueTruncate';
  import VueCarousel                                      from '../shared/components/VueCarousel/VueCarousel';
  import VueDataTable                                     from '../shared/components/VueDataTable/VueDataTable';
  import { dataTableDataFixture, dataTableHeaderFixture } from '../shared/components/VueDataTable/DataTableFixtures';
  import VueToggle                                        from '../shared/components/VueToggle/VueToggle';

  export default {
    metaInfo:   {
      title: 'vue-starter - Components',
      meta:  [
        {
          name:    'description',
          content: 'vue-starter - includes most common UI/UX use cases, for example: calendar, date picker, range slider, accordion and more!',
        },
        {
          name:    'robots',
          content: 'INDEX,FOLLOW',
        },
        {
          name:    'keywords',
          content: 'vue.js, vuex, vuex-persist, seo, server-side-rendering, isomorphic, progressive-web-app',
        },

        { name: 'og:url', content: 'https://vue-starter.herokuapp.com/' },
        { name: 'og:site_name', content: 'vue-starter' },
        { name: 'og:type', content: 'website' },
        { name: 'og:locale', content: 'en' },
        {
          name:    'og:title',
          content: 'vue-starter - includes most common UI/UX use cases, for example: calendar, date picker, range slider, accordion and more!',
        },
        {
          name:    'og:description',
          content: 'vue-starter - includes most common UI/UX use cases, for example: calendar, date picker, range slider, accordion and more!',
        },
        { name: 'og:image:url', content: 'https://vue-starter.herokuapp.com/logo.png' },

        {
          name:    'twitter:title',
          content: 'vue-starter - includes most common UI/UX use cases, for example: calendar, date picker, range slider, accordion and more!',
        },
        {
          name:    'twitter:description',
          content: 'vue-starter - includes most common UI/UX use cases, for example: calendar, date picker, range slider, accordion and more!',
        },
      ],
    },
    components: {
      VueToggle,
      VueGrid,
      VueGridItem,
      VueInput,
      VueCollapse,
      VueSlider,
      VueGridRow,
    },
    computed:   {
      today(): Date {
        const today: Date = new Date();

        return new Date(today.getFullYear(), today.getMonth(), today.getDate());
      },
      nextWeek(): Date {
        return new Date(this.today.getTime() + 7 * 24 * 60 * 60 * 1000);
      },
    },
    data(): any {
      return {
        collapseDemo:        true,
        showModal:           false,
        checked:             true,
        radio:               'radio1',
        page:                1,
        options:             [
          {
            label: 'Foo',
            value: 'foo',
          },
        ],
        selectedOption:      '',
        inputValue:          '0 minutes 0 seconds',
        autocompleteOptions: [],
        autocompleteLoading: false,
        images:              [
          {
            alt:       'Slide 1',
            copyright: 'unsplash.com/@hahnbo',
            url:       'https://images.unsplash.com/photo-1485932465394-d20cc595f08b?ixlib=rb-0.3.5&s=e8798191cfef2e78f4ac91e71c92ea57&auto=format&fit=crop&w=3750&q=80',
          }
        ],
        dataTableHeader:     dataTableHeaderFixture,
        dataTableData:       dataTableDataFixture,
        toggle:              false,
        isDisabled:          false,
      };
    },
    methods:{
      sliderChange(sliderOptions: any) {
        console.log(sliderOptions);
      },
      formatSliderValue(value: number) {
          let tv = value * 5;
          let m = Math.floor(tv/60);
          let s = tv % 60 ;
          this.inputValue = m +" minutes " + s + " seconds"; 
        return `${Math.floor(value)} °C`;
      },
      calendarChange(date: Date | Date[]) {
        console.log(date);
      },
      addNotificationSwitch() {
        this.isDisabled = !this.isDisabled;
        /*let minCh = +this.inputValue.split(' ')[0]*60 + +this.inputValue.split(' ')[2]
        while(minCh !== 0)
          setTimeout(function v(){
          minCh--;
          this.inputValue = Math.floor(minCh/60) + " minutes " +  minCh % 60 + " seconds";
          }
          ,3000);
        */

        if(!this.toggle){
          addNotification(
            {
              title: 'Teapot is on',
              text:  'Be carefull,soon it will be off',
            } as INotification,
          );
        }
        else if(this.toggle){
          addNotification(
            {
              title: 'Teapot is off',
              text:  'You cam make your drink.',
            } as INotification,
          );
        }
      },
      selectChange(option: string) {
        console.log(option);
        this.selectedOption = option;
      },
      onRequest(query: string, shouldReturn: boolean = true) {
        this.autocompleteLoading = true;

        /* istanbul ignore next */
        setTimeout(() => {
          let returnOptions: boolean = Math.random() > 0.5 || query.indexOf('foo') > -1;

          if (!shouldReturn) {
            returnOptions = shouldReturn;
          }

          if (returnOptions) {
            this.autocompleteOptions = AutocompleteOptionsFixture;
          } else {
            this.autocompleteOptions = [];
          }

          this.autocompleteLoading = false;
        }, 1000);
      },
      onAutocompleteChange(option: IAutocompleteOption) {
        console.log(option);
      },
      dataTableClick(row: any) {
        console.log(row);
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../shared/styles";

  .components {
    padding-bottom: $space-unit * 2;

    :global {
      h2 {
        margin-top: 3.6rem;
      }

      .vueGridItem {
        min-width: 46%;
      }
    }
  }

  .header {
    padding:     $nav-bar-height 0 $nav-bar-height * 0.5;
    text-align:  center;
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
    background: $nav-bar-accent-bg;
  }

  .collapseDemo {
    padding:    $space-unit * 2;
    background: $panel-bg;
    box-shadow: $panel-shadow;
    color:      #FFF
  }
</style>
