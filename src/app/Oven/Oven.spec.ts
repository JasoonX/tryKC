import { createLocalVue, mount } from '@vue/test-utils';
import Oven                       from './Oven.vue';

const localVue = createLocalVue();

describe('Oven.vue', () => {

  test('renders component', () => {
    const wrapper = mount(Oven,
                          {
                            localVue,
                          },
    );

    expect(wrapper.find('h1').text()).toBe('Oven');
  });

});
