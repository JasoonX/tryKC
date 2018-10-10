import { createLocalVue, mount } from '@vue/test-utils';
import Microwave                       from './Microwave.vue';

const localVue = createLocalVue();

describe('Microwave.vue', () => {

  test('renders component', () => {
    const wrapper = mount(Microwave,
                          {
                            localVue,
                          },
    );

    expect(wrapper.find('h1').text()).toBe('Microwave');
  });

});
