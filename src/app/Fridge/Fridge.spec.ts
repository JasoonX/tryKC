import { createLocalVue, mount } from '@vue/test-utils';
import Fridge                       from './Fridge.vue';

const localVue = createLocalVue();

describe('Fridge.vue', () => {

  test('renders component', () => {
    const wrapper = mount(Fridge,
                          {
                            localVue,
                          },
    );

    expect(wrapper.find('h1').text()).toBe('Fridge');
  });

});
