const nicolas = {admin: true, id: 1, email: "nz@robusta.io", name: "Nicolas", statement: "Star Wars rocks"},
    leonard = {admin: true, id: 2, email: "leonard@robusta.io", name: "Leonard", statement: "Star Trek rocks"},
    sheldon = {admin: false, id: 3, email: "sheldon@robusta.io", name: "Sheldon"},
    raj = {admin: false, id: 4, email: "raj@robusta.io", name: "Rajesh"},
    howard = {admin: false, id: 5, email: "howie@robusta.io", name: "Howard"},
    penny = {admin: true, id: 6, email: "penny@robusta.io", name: "Penny", statement: "Penny ! Penny ! Penny !"},
    emy = {admin: false, id: 7, email: "emy@robusta.io", name: "Emy"},
    bernie = {admin: false, id: 28, email: "bernie@robusta.io", name: "Bernadette"}


const users = [nicolas, leonard, sheldon, raj, howard, penny, emy, bernie];


const tags = ["violence", "fun", "science"];


const c1 = {id: 1, user: nicolas, content: "I'm not ok"};
const c2 = {id: 2, user: leonard, content: "You don't know enough about heroes"};
//we'll need to describe flags as a collection
const c3 = {id: 3, anonymous: true, content: "What ? You stupid !", tags: ["violence"]};

const c4 = {id: 4, user: penny, content: "There are so many strategies", tags: ["science"]};
const c5 = {id: 5, user: leonard, content: "What ? These guys are stupid !"};
const c6 = {id: 6, user: penny, content: "They know how to count to 4", tags: ["fun", "science"]};
const c7 = {id: 7, user: sheldon, content: "So why do they call it football and play with hands ?", tags: ["fun"]};

const c8 = {id: 8, user: emy, content: "It misses spices, let's add ketchup"};
const c9 = {id: 9, user: raj, content: "What ? You stupid ! It's not a spice !"};
const c10 = {id: 10, user: emy, content: "But there is spicy vinegar inside"};
const c11 = {id: 11, user: bernie, content: "Vinegar is not a spice, it's a fruit", tags: ["science"]};
const c12 = {id: 12, user: emy, content: "A liquid fruit ? Doesn't make sense !", tags: ["fun"]};
const c13 = {
    id: 13,
    user: sheldon,
    content: "And it is a bit <strong>violent</strong> <script type='text/javascript'>alert('you are HACKED!')</script>"
};

const comments = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13];


const troll = {
    id: 1, title: "Star Trek > Star Wars", content: "Spock is stronger than Yoda",
    user: leonard, comments: [c1, c2, c3], tags: ["violence"]
};


const games = {
    id: 2, title: "American Football is the best game", content: "",
    user: penny, comments: [c4, c5, c6, c7], tags: ["fun", "violence"]
};


const spices = {
    id: 3, title: "Ketchup", content: "Ketchup is not a Spice",
    user: emy, comments: [c8, c9, c10, c11, c12, c13], tags: ["fun", "science"]
};


const topics = [troll, games, spices];

exports.users = users;
exports.topics = topics;
exports.comments = comments;
exports.tags=tags;