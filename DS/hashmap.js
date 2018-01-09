/* javascript object is a real hashmap on its implementation */

var map = {};

// add a item
map.key1 = "value1";

console.log(map); // print: {key1: "value1"}

// or by assinging like below
map["key2"] = "value2"
console.log(map); // print: {key: "value1", key2: "value2"}

delete map.key1; // Now map is: {key2: "value2"}



/*****  An example of using hashmap  *****/

function calculateWordFrequency(words) {
    var i,
        len = words.length,
        obj = {},
        result = [];

    for (i = 0; i < len; i++) {
        obj[words[i]] = 1 + (obj[words[i]] || 0);
    }

    for (i = 0; i < Object.keys(obj).length; i++) {
        result.push({
            word: (Object.keys(obj))[i],
            count: obj[Object.keys(obj)[i]]
        });
    }

    return result;
}

var result = calculateWordFrequency(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"]);

console.log(JSON.stringify(result));
// [{"word":"the","count":4},{"word":"day","count":1},{"word":"is","count":3},{"word":"sunny","count":2}]

