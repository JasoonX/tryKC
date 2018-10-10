import { createLocalVue, mount } from '@vue/test-utils';
import Choose                       from './Choose.vue';

const localVue = createLocalVue();

describe('Choose.vue', () => {

  test('renders component', () => {
    const wrapper = mount(Choose,
                          {
                            localVue,
                          },
    );

    expect(wrapper.find('h1').text()).toBe('Choose');
  });

});
