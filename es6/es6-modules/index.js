import Teacher, { promote }  from './teacher';

// Default -> import ... from '';
/* export default class Teacher ... */

// Named -> import { ... } fr om '';
/* export function promote() ... */

const teacher = new Teacher('Leo', 'BSI');
teacher.teach();