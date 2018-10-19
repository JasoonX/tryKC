import { createLocalVue, mount } from '@vue/test-utils';
import Coffee                       from './Coffee.vue';

const localVue = createLocalVue();

describe('Coffee.vue', () => {

  test('renders component', () => {
    const wrapper = mount(Coffee,
                          {
                            localVue,
                          },
    );

    expect(wrapper.find('h1').text()).toBe('Coffee');
  });

});
