import Vue from 'vue'
import VueI18n from 'vue-i18n'
const locales = ['rs', 'en']

Vue.use(VueI18n)

function getMessagesFromJson () {
  // get messages from rs.json file
  const messages = {}
  for (const locale of locales) {
    const msg = require(`./${locale}.json`)
    messages[locale] = msg;
  }
  console.log(messages);
  return messages

}

export default new VueI18n({
  locale: process.env.I18N_LOCALE || 'rs',
  messages: getMessagesFromJson()
})
