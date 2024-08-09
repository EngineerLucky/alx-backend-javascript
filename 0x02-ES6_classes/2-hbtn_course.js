/**
 * Represents a Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * The function creates a new @see {@link HolbertonCourse}.
   * @param {String} name - The name of the course.
   * @param {Number} length - How long the course (in months).
   * @param {String[]} students - The names of students in the course.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * The function  gets the name of this course.
   */
  get name() {
    return this._name;
  }

  /**
   *The function sets the name of this course.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * This function gets the length of this course (in months).
   */
  get length() {
    return this._length;
  }

  /**
   * The function sets the length of this course (in months).
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Thi function gets the names of students in this course.
   */
  get students() {
    return this._students;
  }

  /**
   * This function sets the names of students in this course.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
