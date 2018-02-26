const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export default {
  title: 'Arma3',
  name: 'test2',
  type: 'game',
  requireVersion: '0.0.1',
  showOnStart: true,
  icon: 'logo.jpg',
  translations: {
    'fr': 'translations/fr.js',
    'en': 'translations/en.js'
  },
  routes: [
    {
      path: '/test',
      name: 'test',
      vue: 'test.vue'
    }
  ],
  init: async function (wingardiumLeviosa, callback) {
    await delay(200)
    console.log(this.name + ' init func')
    wingardiumLeviosa.get.cookies().set('test', this.name)

    // Don't forget this callback !!
    callback()
  },
  start: async function () {
    await delay(1000)

    console.log(this.name + ' start func')
  },
  startButton: function () {
    console.log('I am called in Arma3 module')
  }
}
