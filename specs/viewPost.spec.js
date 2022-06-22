import Vue from 'vue';
import {mount} from '@vue/test-utils';
import initFilters from '../src/javascript/filters/globalFilters';
import ViewPost from '../src/views/Posts/ViewPost';
import i18n from '../src/javascript/i18n';
import globalMixin from '../src/javascript/mixins/globalMixin';
const flushPromises = require('flush-promises');

Vue.mixin(globalMixin);

initFilters(Vue)


const $router = {
  currentRoute:  {
    params: {
      id: 3
    }
  }
}


test('mount view post page', () => {
  mount(ViewPost,{
    i18n,
    mocks: {
      $router
    }
  })
})

test('test view post page', async () => {
  let wrap = mount(ViewPost,{
    i18n,
    mocks: {
      $router
    }
  })
  
  // im new to jest so this is the best way i've found to wait for the data to load
  await new Promise( (resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })

  let src = wrap.find('.image').attributes('src')
  let content = wrap.find('.post-body').text()
  let comments = wrap.findAll('.comment-wrap')

  expect(content).toBe(`Et iusto sed quo iure
voluptatem occaecati omnis eligendi aut ad
voluptatem doloribus vel accusantium quis pariatur
molestiae porro eius odio et labore et velit aut.`)
  expect(comments.length).toBe(5)
  expect(src).toBe("https://picsum.photos/id/3/250/250")

})