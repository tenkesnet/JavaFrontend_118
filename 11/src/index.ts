import { Employee } from './model/Employee';
import { Person } from './model/Person';
import { Student } from './model/Student';
import moment from 'moment';

const robi = new Student("Bárdonicse Róbert!!!!", new Date('1980-01-20'))
const kszul = new Date(moment("1979-05-30").add(1, 'days').toDate())
kszul.setHours(7)
const karoly = new Person("Tóth Károly", kszul)
const misi = new Employee()
const test: any = ''
//test.speak()
let now = moment();
console.log(robi)
console.log(karoly)

console.log(now)