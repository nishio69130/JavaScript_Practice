function getSentence({ subject, verb, object }) {
    return `${subject} ${verb} ${object}`;
}

const o = {
    subject: "I",
    verb: "love",
    object: "JavaScript"
};

console.log(getSentence(o));


function getSentence2([subject, verb, object]) {
    return `${subject} ${verb} ${object}`;
}

const arr = ["I", "love", "JavaScript"];
console.log(getSentence2(arr));


function addPrefix(prefix, ...words) {
    const prefixedWords = [];
    for (let i = 0; i < words.length; i++) {
        prefixedWords[i] = `${prefix} ${words[i]}`;
    }
    return prefixedWords;
}

console.log(addPrefix("con", "verse", "vex"));
console.log(addPrefix("pre", "fix", "me"));
