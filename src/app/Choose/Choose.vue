<template>
  <div :class="[$style.enterpriseReady, 'featureSection']">
    <br/>
    <br/>
    <br/>
    <vue-grid>
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <h3>{{ $t('App.choose.choosetxt' /* Components */) }}</h3>
              <vue-grid-row>
                <vue-grid-item class="vueGridItem">
                  <vue-checkbox
                  name="check"
                  id="check"
                  label= 'Teapot'
                  v-model="HasTeapot" />
                </vue-grid-item>
                <vue-grid-item>
                </vue-grid-item>
              </vue-grid-row>
             <vue-grid-row>
                <vue-grid-item class="vueGridItem">
                  <vue-checkbox
                  name="check"
                  id="check"
                  label="Microwave"
                  v-model="HasMicrowave" />
                </vue-grid-item>
                <vue-grid-item>
                </vue-grid-item>
              </vue-grid-row>
              <vue-grid-row>
                <vue-grid-item class="vueGridItem">
                  <vue-checkbox
                  name="check"
                  id="check"
                  label="Fridge"
                  v-model="HasFridge" />
                </vue-grid-item>
                <vue-grid-item>
                </vue-grid-item>
              </vue-grid-row>
              <vue-grid-row>
                <vue-grid-item class="vueGridItem">
                  <vue-checkbox
                  name="check"
                  id="check"
                  label="Oven"
                  v-model="HasOven" />
                </vue-grid-item>
                <vue-grid-item>
                </vue-grid-item>
              </vue-grid-row>
              <vue-grid-row>
                <vue-grid-item class="vueGridItem">
                  <vue-checkbox
                  name="check"
                  id="check"
                  label="Cooker Hood"
                  v-model="HasCookerHood" />
                </vue-grid-item>
                <vue-grid-item>
                </vue-grid-item>
              </vue-grid-row>
              
              <vue-grid-row>
                <vue-grid-item class="vueGridItem">
                  <vue-checkbox
                  name="check"
                  id="check"
                  label="Cofee Machine"
                  v-model="HasCofeeMachine" />
                </vue-grid-item>
                <vue-grid-item>
                </vue-grid-item>
              </vue-grid-row>
               <vue-grid-row>
                <vue-grid-item class="vueGridItem">
                  <vue-checkbox
                  name="check"
                  id="check"
                  label="Crane"
                  v-model="HasCrane" />
                </vue-grid-item>
                <vue-grid-item>
                </vue-grid-item>
              </vue-grid-row>
            </vue-panel-body>
          </vue-panel>
          </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid            from '../shared/components/VueGrid/VueGrid';
  import VueGridItem        from '../shared/components/VueGridItem/VueGridItem';
  import VuePanel           from '../shared/components/VuePanel/VuePanel';
  import VuePanelBody       from '../shared/components/VuePanel/VuePanelBody/VuePanelBody';
  import VueGridRow         from '../shared/components/VueGridRow/VueGridRow';
  import VueCheckbox        from '../shared/components/VueCheckbox/VueCheckbox';

  export default {
    components: {
      VueGrid,
      VueGridItem,
      VuePanel,
      VuePanelBody,
      VueGridRow,
      VueCheckbox,
    },
    data():any{
      return{
        HasTeapot:true,
        HasMicrowave:false,
        HasOven:false,
        HasCookerHood:false,
        HasFridge:false,
        HasCofeeMachine:false,
        HasCrane:false,
      };
    },
  };
</script>

<style lang="scss" module>
  @import "../shared/styles";
  .enterpriseReady {
    display:    block;
    text-align: left;
      h3{
        text-align: center;
      }
    @include background-gradient($brand-accent, $brand-light-primary, -135deg);
  }
</style>
