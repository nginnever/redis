const orbit = require('orbit-db')
const IPFS = require('ipfs')
const ipfs = require('./ipfs')

const network = null
const user = 'ipfspad'
const password = 'meow'
const LOG_NAME = 'pad'

function db () {
  //ipfs.createDaemon('/home/n4th4n/.ipfs-redis')

  function getIpfs () {
	  return ipfs.createDaemon('/home/n4th4n/.ipfs-redis').then((ipfs) => {
	    daemon = ipfs
	    return daemon
	  })
	}

	getIpfs().then((i) => {
		orbit.connect(network, user, password, i).then((o) => {
			//console.log(o.events)
			o.eventlog(LOG_NAME).then((el) => {
				const it = el.iterator({limit: -1})
				const all = it.collect()
				console.log(all)
			})
		})
	})

	return
}

db()