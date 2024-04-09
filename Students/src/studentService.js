export default class StudentService{

    static getStudents() {
        return fetch("https://run.mocky.io/v3/1a8b0e4d-9463-44b2-a4bf-07b45966eacd")
        .then(response => response.json())
        .then(data => data.students)
    }

}