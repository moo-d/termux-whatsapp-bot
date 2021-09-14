const fs = require('fs')
const _leveling = JSON.parse(fs.readFileSync('./src/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./src/level.json'))

const getLevelingXp = (userId) => {
  let position = false
  Object.keys(_level).forEach((i) => {
    if (_level[i].jid === userId) {
      position = i
    }
  })
  if (position !== false) {
    return _level[position].xp                                                                                                                 }
}

const getLevelingLevel = (userId) => {
  let position = false
  Object.keys(_level).forEach((i) => {
    if (_level[i].jid === userId) {
      position = i
    }
  })
  if (position !== false) {
    return _level[position].level
  }
}

const getLevelingId = (userId) => {
  let position = false
  Object.keys(_level).forEach((i) => {
    if (_level[i].jid === userId) {
      position = i
    }
  })
  if (position !== false) {
    return _level[position].jid
  }
}

const addLevelingXp = (userId, amount) => {
  let position = false
  Object.keys(_level).forEach((i) => {
    if (_level[i].jid === userId) {
      position = i
    }
  })
  if (position !== false) {
    _level[position].xp += amount
    fs.writeFileSync('./src/level.json', JSON.stringify(_level))
  }
}

const addLevelingLevel = (userId, amount) => {
  let position = false
  Object.keys(_level).forEach((i) => {
    if (_level[i].jid === userId) {
      position = i
    }
  })
  if (position !== false) {
    _level[position].level += amount
    fs.writeFileSync('./src/level.json', JSON.stringify(_level))
  }
}

const addLevelingId = (userId) => {
  const obj = {jid: userId, xp: 1, level: 1}
  _level.push(obj)
  fs.writeFileSync('./src/level.json', JSON.stringify(_level))
}

module.exports = { getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId }
