import httpService from './httpService.js'

const baseUrl = 'product'

export const ProductService = {
    query,
    getById,
    remove,
    save
}

function query() {
    return httpService.get(baseUrl)
        // return httpService.get(baseUrl, criteria)
}

function getById(id) {
    return httpService.get(`${baseUrl}/${id}`)
}

function remove(id) {
    return httpService.delete(`${baseUrl}/${id}`)
}

function save(product) {
    if (product._id) {
        return httpService.put(`${baseUrl}/${product._id}`, product)
    } else {
        return httpService.post(`${baseUrl}`, product)
    }
}


// function getEmptyProduct() {
//     return {
//         name: '',
//         price: 0,
//         type: 'Funny',
//         createdAt: Date.now(),
//         inStock: true
//     }
// }

//================================================================
//================================================================
//================================================================
//================================================================
// let gId = 0


// const robots = ['Bubili', 'Shampudo', 'Grulif', 'Shtifas', 'Flidar', 'Bamkid', 'Izmerulu', 'Shilk']
//   .map(name => ({ ...getEmptyRobot(), _id: makeId(), name }))

// function sort(arr) {
//   return arr.sort((a, b) => {
//     if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
//       return -1
//     }
//     if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
//       return 1
//     }

//     return 0
//   })
// }

// function getRobots(filterBy = {}) {
//   return new Promise((resolve, reject) => {
//     var robotsToReturn = [...robots];
//     let { term } = filterBy;
//     term = term.toLocaleLowerCase();
//     if (term) {
//       robotsToReturn = robots.filter(robot => {
//         return robot.name.toLocaleLowerCase().includes(term)
//       })
//     }
//     resolve(sort(robotsToReturn))
//   })
// }

// function getRobotById(id) {
//   console.log('robots', robots);

//   return new Promise((resolve, reject) => {
//     const robot = robots.find(robot => robot._id === id)
//     robot ? resolve(JSON.parse(JSON.stringify(robot))) : reject(`Robot id ${id} not found!`)
//   })
// }

// function deleteRobot(id) {
//   return new Promise((resolve, reject) => {
//     const index = robots.findIndex(robot => robot._id === id)
//     if (index !== -1) {
//       robots.splice(index, 1)
//     }

//     resolve()
//   })
// }

// function _updateRobot(robot) {
//   return new Promise((resolve, reject) => {
//     const index = robots.findIndex(c => robot._id === c._id)
//     if (index !== -1) {
//       robots[index] = robot
//     }

//     resolve(robot)
//   })
// }

// function _addRobot(robot) {
//   return new Promise((resolve, reject) => {
//     robot._id = makeId();
//     robots.push(robot);
//     resolve(robot);
//   })
// }

// function saveRobot(robot) {
//   return robot._id ? _updateRobot(robot) : _addRobot(robot)
// }

// function getEmptyRobot() {
//   return {
//     _id: gId++,
//     name: '',
//     giftsCount: 0
//   }
// }

// export const RobotService = {
//   getRobots,
//   getRobotById,
//   deleteRobot,
//   saveRobot,
//   getEmptyRobot
// }



// function makeId(length = 10) {
//   var txt = ''
//   var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//   for (var i = 0; i < length; i++) {
//     txt += possible.charAt(Math.floor(Math.random() * possible.length))
//   }
//   return txt
// }