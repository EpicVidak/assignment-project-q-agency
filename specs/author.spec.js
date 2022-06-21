import {shallowMount, VueWrapper} from '@vue/test-utils';
import Author from '../src/views/Posts/components/Author';
import i18n from '../src/javascript/i18n';

const testAuthor = {
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
}

test('mount author', () => {
  shallowMount(Author,{
    i18n,
    propsData: {
      author: testAuthor
    }
  })
})

test('check author', async () => {
  const wrap = shallowMount(Author, {
    i18n,
    propsData: {
      author: testAuthor
    }
  })

  expect(wrap.find('.author').text()).toBe('Autor: Clementine Bauch')
})

test('check hover', async () => {
  const wrap = shallowMount(Author, {
    i18n,
    propsData: {
      author: testAuthor
    }
  })
  
  await wrap.trigger('mousemove')

  expect(wrap.find('.expendedInfo').exists()).toBeTruthy();
})