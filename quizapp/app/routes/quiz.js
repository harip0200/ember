import Ember from 'ember';

export default Ember.Route.extend({
    model() {
    let index=1;
        let questins = [
            {
                id:1,
                question : "What color are often the domes of churches in Russia?",
                optionA:"Gold colored",
                optionB:"Yellow colored",
                answer:"Gold colored"
            },
            {
              id:2,
              question : "In which Spanish city did the Joan Miro museum open in 1975?",
              optionA:"somthing",
              optionB:"Barcelona",
              answer:"Barcelona"
            },
            {
              id:3,
              question : "In which Spanish city did the Joan Miro museum open in 1975?",
              optionA:"nothing",
              optionB:"Barcelona",
              answer:"Barcelona"
            }
        ];
        return questins;
    }
});
