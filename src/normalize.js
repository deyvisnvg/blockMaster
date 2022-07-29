const movieListAsMap = (newList, oldList = new Map()) => {
    return newList.reduce((list, movie) => {
        list.set(movie.id, movie)
        return list
    }, oldList)
}

const getAllIds = (list, oldList = []) => {
    return oldList.concat(list.map(movie => movie.id));
}

const getMostValue = (newList, oldList = []) => {
    return newList.reduce((list, movie) => {
        if (movie.vote_average >= 7.0) {
            list.push(movie.id);
        }
        return list
    }, oldList)
}

const getLeastValued = (newList, oldList = []) => {
    return newList.reduce((list, movie) => {
        if (movie.vote_average < 7) {
            list.push(movie.id);
        }
        return list
    }, oldList)
}

// console.log(popular)
// console.log(notPopular)
// console.log(all)
// console.log(movieListAsMap)
// console.log(movieList.get(724989))

export {
    movieListAsMap,
    getAllIds,
    getMostValue,
    getLeastValued
}