const pageChecker = (val, maxBlogs, length, mod) => {
    const value = val * maxBlogs
    // console.log("val ", val, "length : ", length, "value : ", value, "mod : ", mod)

    if (value <= length) {
        // console.log("page")
        return value - maxBlogs
    }
    else {
        // console.log("last")
        return length - mod
    }

}

module.exports = pageChecker