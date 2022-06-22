import Vue from 'vue';
import {mount} from '@vue/test-utils';
import initFilters from '../src/javascript/filters/globalFilters';
import PostListItem from '../src/views/Posts/components/PostListItem';
import i18n from '../src/javascript/i18n';
import globalMixin from '../src/javascript/mixins/globalMixin';

Vue.mixin(globalMixin);

initFilters(Vue)

const postItemProp = {
  author: {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  body: "nihil ratione nemo velit ut aut id quo",
  id: 17,
  title: "fugit voluptas sed molestias voluptatem provident",
  userId: 2
}


test('mount post list item', () => {
  mount(PostListItem,{
    i18n,
    propsData: {
      post: postItemProp
    }
  })
})

test('check post list item', () => {
  let wrap = mount(PostListItem,{
    i18n,
    propsData: {
      post: postItemProp
    }
  })

  let src = wrap.find('img').attributes('src')
  let author = wrap.find('.author').text()
  let title = wrap.find('.title').element.removeChild(wrap.find('.title').element.firstChild).textContent.trim()
  let content = wrap.find('.content').text().trim()

  expect(author).toBe('Autor: Clementine Bauch')

  expect(title).toBe('Fugit voluptas sed molestias voluptatem provident.')

  expect(content).toBe('Nihil ratione nemo velit ut aut id quo.')

  expect(src).toBe("https://picsum.photos/id/17/100/100")
})