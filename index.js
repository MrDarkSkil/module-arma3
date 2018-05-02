const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

module.exports = {
  title: 'Minecraft',
  name: 'module-minecraft',
  type: 'game',
  requireVersion: '0.0.1',
  showOnStart: true,
  icon: 'assets/logo.png',
  routes: [

  ],
  init: async function (wingardiumLeviosa, callback) {
    await delay(500)
    console.log(this.name + ' init func')

    callback()
  },
  start: async function () {
    await delay(2000)

    console.log(this.name + ' start func')
  },
  startButton: function () {
    console.log('I am called in ' + this.title + ' module')
  }
}
