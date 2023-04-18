import { Employee } from './model/Employee';
import { Person } from './model/Person';
import { Student } from './model/Student';
import moment from 'moment';

const robi = new Student("Bárdonicse Róbert!!!!", new Date('1980-01-20'))
const kszul = new Date("1979-02-28")
kszul.setHours(7)
const karoly = new Person("Tóth Károly", kszul)
const misi = new Employee()
const test: any = ''
//test.speak()
let now = moment().format('LLLL');
console.log(robi)
console.log(karoly)
console.log(now)