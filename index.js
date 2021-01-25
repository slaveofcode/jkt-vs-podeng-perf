const faker = require('faker')
const JKTEmployees = require('./jkt_schema/employees')
const PODEmployees = require('./podeng_schema/employees')

const prepareData = (employeeCount) => {
  const rawData = []

  const howMuchRecords = 10
  const howMuchLocation = 5

  for (let i = 1; i <= howMuchRecords; i++) {
    const addrs = []

    for (let j = 1; j <= howMuchLocation; j++) {
      addrs.push({
        street_address: faker.address.streetAddress(true),
        city: faker.address.city(),
        province: 'Jawa Barat',
        lat: faker.address.latitude(),
        lng: faker.address.longitude()
      })
    }

    rawData.push({
      id: i,
      name: faker.name.firstName('male') + ' ' + faker.name.lastName('male'),
      age: faker.random.number({ min: 10, max: 70 }),
      locations: addrs
    })
  }

  return rawData
}

const jktbench = async (rawData) => {
  const startTime = Date.now()
  const emps = JKTEmployees(rawData)
  const endTime = Date.now()

  // console.log(emps.j())
  // console.log(`JKT: ${rawData.length} rows, ${(startTime - endTime)}ms`)
  return endTime - startTime 
}

const podengBench = async (rawData) => {
  const startTime = Date.now()
  const emps = PODEmployees(rawData)
  const endTime = Date.now()

  // console.log(emps)
  // console.log(`Podeng: ${rawData.length} rows, ${(startTime - endTime)}ms`)
  return endTime - startTime
}

const bench = async (howMuchEmployee) => {
  const rawData = prepareData(howMuchEmployee)
  
  const [jktTime, podTime] = await Promise.all([
    jktbench(rawData),
    podengBench(rawData),
  ])
  const recs = String(howMuchEmployee)

  const recsStr = String(recs).padStart(5, ' ').padEnd(7, ' ')
  const jktTimeStr =  `${jktTime}ms`.padStart(5, ' ').padEnd(7, ' ')
  const podTimeStr = `${podTime}ms`.padStart(5, ' ').padEnd(7, ' ')
  console.log(`| ${recsStr} | ${jktTimeStr} | ${podTimeStr} |`)
}

const startbench = async () => {
  const expTimes = 20
  console.log('|---------|---------|---------|')
  console.log('| Records |   JKT   |  Podeng |')
  console.log('|---------|---------|---------|')
  
  for (let i = 1; i <= expTimes; i++) {
    await bench(Math.pow(2, i))
  }

  console.log('|---------|---------|---------|')
}

startbench()