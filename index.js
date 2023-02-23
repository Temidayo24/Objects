//ASSIGNMENT ONE
function instagramPost(handleOfAuthor, content, imageLink,numberOfViews, numberOfLikes) {
    this.instagramHandle = handleOfAuthor,
    this.instagramContent = content,
    this.instagramImageLink = imageLink,
    this.numberOfViews = numberOfViews,
    this.numberOfLikes = numberOfLikes
}

//ASSIGNMENT TWO
let instagramPost1 = new instagramPost("@cave_Men", "Can't wait to meet y'all on the 22/2/23! CaveMen is coming to Lagos!!", "https://pan-african-music.com/wp-content/uploads/2022/01/the-cavemen-header-1010x721.jpg", 34567, 12012);
let instagramPost2 = new instagramPost("@a.de.bi.ke", "Happy Sunday, Insta-friends", "https://www.wishesmsg.com/wp-content/uploads/happy-sunday.jpg", 100, 65);

//ASSIGNMENT THREE
//3(a)
function createPerson(name, age, location) {
    return {
        studentName: name,
        studentAge: age,
        studentLocation: location
    }
};

const Musa = createPerson("Musa", 19, "Lekki, Lagos");

// 3(b)
function JambScores(ENG, GOVT, LIT, CRK) {
    return {
        ENG: ENG,
        GOVT: GOVT,
        LIT: LIT,
        CRK: CRK
    }
};

const MusaJambScores = JambScores(70, 85, 82, 94);

Musa.JambScores = MusaJambScores;

// console.log(Musa);

//ASSIGNMENT FOUR
let inputOne = {fName: "Temidayo", lName: "kehinde", age: 25}

let inputTwo = Object.assign({}, inputOne); //(a) - Object.assign() method

let inputThree = {...inputOne}; //(b) - Spread Syntax method

let inputFour = JSON.parse(JSON.stringify(inputOne)); //(c) - JSON.parse() method

inputOne.height = "5ft";

// console.log(inputFour);

//ASSIGNMENT FIVE
const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};

for (const property in presidentialCandidates) {
  //for..in enumeration
  let party = property;
  let candidate = presidentialCandidates[property];

  console.log(candidate + " is the presidential candidate of " + party);
}

for (const candidate of Object.keys(presidentialCandidates)) {
    //for..of enumeration
    console.log(presidentialCandidates[candidate] + " is the presidential candidate of " + candidate);
}