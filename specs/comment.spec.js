import Vue from 'vue';
import {shallowMount} from '@vue/test-utils';
import initFilters from '../src/javascript/filters/globalFilters';
import Comment from '../src/views/Posts/components/Comment';
import i18n from '../src/javascript/i18n';

const testComment = {
  email: 'Test@test.com',
  name: 'Test',
  body: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nunc euismod, consectetur nisl eu, consectetur nisl"
}

initFilters(Vue)

test('mount comment', () => {
  shallowMount(Comment,{
    i18n,
    propsData: {
      comment: testComment
    }
  })
})

test('check comment', () => {
  let wrap = shallowMount(Comment,{
    i18n,
    propsData: {
      comment: testComment
    }
  })
  
  expect(wrap.find('.posted-by').text()).toBe('Objavio:  Test@test.com')
  
  expect(wrap.find('.comment-title').text()).toBe('Test')

  expect(wrap.find('.comment-body').text()).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nunc euismod, consectetur nisl eu, consectetur nisl.')
})