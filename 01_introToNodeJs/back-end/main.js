const http = require('http')
const router = require('./router.js')
const homePage = require('../controllers/homePageController.js')
const addBreed = require('../controllers/addBreedController.js')
const addCat = require('../controllers/addCatController.js')
const staticFile = require('../controllers/getContentType.js')
const editCat = require('../controllers/editCatController.js')
const newHome = require('../controllers/newHomeController.js')

router.registerHandler('/', homePage)
router.registerHandler('/add-breed', addBreed)
router.registerHandler('/add-cat', addCat)
router.registerHandler('/content', staticFile)
router.registerHandler('/edit', editCat)
router.registerHandler('/new-home', newHome)

const server = http.createServer(requestHandler)

function requestHandler (req, res) {
	const handler = router.matcher(req.url)
	handler(req, res)
}

server.listen(3000)