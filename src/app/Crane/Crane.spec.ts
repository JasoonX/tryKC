import { createLocalVue, mount } from '@vue/test-utils';
import Crane                       from './Crane.vue';

const localVue = createLocalVue();

describe('Crane.vue', () => {

  test('renders component', () => {
    const wrapper = mount(Crane,
                          {
                            localVue,
                          },
    );

    expect(wrapper.find('h1').text()).toBe('Crane');
  });

});
