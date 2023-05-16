var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function insertArry(array, value) {
    value.addStar();
    return __spreadArray([value], array, true);
}
var tomb = ["kjhkjh", "jljl", "nnnnn"];
var Todo = /** @class */ (function () {
    function Todo(name) {
        this.name = name;
    }
    Todo.prototype.addStar = function () {
        this.name += "*******";
    };
    return Todo;
}());
var AdvancedTodo = /** @class */ (function () {
    function AdvancedTodo() {
    }
    AdvancedTodo.prototype.addStar = function () {
    };
    return AdvancedTodo;
}());
var tombObj = [new Todo("Tej"), new Todo("kenyer")];
var tomb2 = insertArry(tombObj, new Todo("Cukor"));
var honapok = new Array();
console.log(tomb2);
