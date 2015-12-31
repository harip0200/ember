import DS from 'ember-data';

 let quiz =DS.Model.extend({

  question: DS.attr("string"),
  optionA: DS.attr("string"),
  optionB: DS.attr("string"),
  answer:DS.attr("string")
});
quiz.reopenClass({
  FIXTURES: [
    {
      id:1,
     question:"What is the national animal of China?",
     optionA:"Giant panda",
     optionB: "panda",
     answer:"Giant panda"
   },
   {
    id:2,
    question:"What is the national animal of India?",
    optionA:"Tiger",
    optionB: "lion",
    answer:"Tiger"
  },
   {
    id:3,
    question:"What is the national animal of africa?",
    optionA:"springbok",
    optionB: "deer",
    answer:"springbok"
   }
  ]

});
export default quiz
