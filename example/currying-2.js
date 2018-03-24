const currying = require('../common-currying')

const data = [{
  section: 'S1',
  personnel: [{
    name: 'Niko'
  }, {
    name: 'Bellic'
  }]
}, {
  section: 'S2',
  personnel: [{
    name: 'Roman'
  }]
}]

let result = data.map(sections => {
  sections.personnel = sections.personnel.map(people => {
    people.description = `${sections.section}-${people.name}`

    return people
  })

  return sections
})

console.log(JSON.stringify(result, null, 2))

// use curring
let result2 = data.map(sections => {
  sections.personnel = sections.personnel.map(currying((section, people) => {
    people.description = `${section}-${people.name}`

    return people
  }, sections.section))

  return sections
})

console.log(JSON.stringify(result2, null, 2))
