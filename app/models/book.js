import DS from 'ember-data';
//const { Model } = DS;

export default DS.Model.extend({
    bookName: DS.attr('string'),
    author: DS.attr('string'),
    dept: DS.attr('string'),
    pub: DS.attr('string')
});
