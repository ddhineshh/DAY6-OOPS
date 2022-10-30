class movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        if (rating == null) {
            return this.rating = "PG"
        }
        else {
            return this.rating = rating;
        }
    }
    getPG(array) {
        var res = array.filter((element) => element.rating == "PG")
        return res
    }
}

let movie1 = new movie("varisu", "bayview", "PG13")
let movie2 = new movie("thunivu", "red gaint", "PG13")
let movie3 = new movie("Diehard", "universal")
let movie4 = new movie("avatar", "sony")


const array = [movie1, movie2, movie3, movie4]

let movie5 = new movie("Casino Royale", "Eon Productions", "PG13")
console.log(movie3.getPG(array));
console.log(movie5)