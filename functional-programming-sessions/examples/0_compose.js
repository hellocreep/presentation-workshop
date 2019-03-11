// Ramda
var incomplete = R.filter(R.where({complete: false}));
var sortByDate = R.sortBy(R.prop('dueDate'));
var sortByDateDescend = R.compose(R.reverse, sortByDate);
var importantFields = R.project(['title', 'dueDate']);
var groupByUser = R.partition(R.prop('username'));
var activeByUser = R.compose(groupByUser, incomplete);
var gloss = R.compose(importantFields, R.take(5), sortByDateDescend);
var topData = R.compose(gloss, incomplete);
