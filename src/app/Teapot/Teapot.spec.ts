import { createLocalVue, mount } from '@vue/test-utils';
import Teapot                       from './Teapot.vue';

const localVue = createLocalVue();

describe('Teapot.vue', () => {

  test('renders component', () => {
    const wrapper = mount(Teapot,
                          {
                            localVue,
                          },
    );

    expect(wrapper.find('h1').text()).toBe('Teapot');
  });

});
