var a = "str";
console.log(a);
a = "123";
var body = document.querySelector("body");
body.style.backgroundColor = "white";
var neuronNetwork = /** @class */ (function () {
    function neuronNetwork(neurons, synapses) {
        this._neurons = [];
        this._synapses = [];
        this._neurons = neurons;
        this._synapses = synapses;
    }
    Object.defineProperty(neuronNetwork.prototype, "neurons", {
        get: function () {
            return this._neurons;
        },
        set: function (value) {
            this._neurons = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(neuronNetwork.prototype, "synapses", {
        get: function () {
            return this._synapses;
        },
        set: function (value) {
            this._synapses = value;
        },
        enumerable: false,
        configurable: true
    });
    return neuronNetwork;
}());
var a = new neuronNetwork([1, 2, 3], [4, 5, 6]);
console.log(a.neurons);
console.log(a.synapses);
