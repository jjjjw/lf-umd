(function (root, factory) {
    if ((typeof Livefyre === 'object') && (typeof Livefyre.define === 'function') && Livefyre.define.amd) {
        // Livefyre.define is defined by https://github.com/Livefyre/require
        if (Livefyre.require.almond) {
            return Livefyre.define('{{{ packageName }}}', factory);
        }
        Livefyre.define([], factory);
    } else if (typeof define === 'function' && define.amd) {
        //Allow using this built library as an AMD module
        //in another project. That other project will only
        //see this AMD call, not the internal modules in
        //the closure below.
        define([], factory);

    } else {
        //Browser globals case. Just assign the
        //result to a property on the global.
        root.Livefyre = root.Livefyre || {};
        root.Livefyre['{{{ packageName }}}'] = factory();
    }
}(this, function () {
    var require; // mrr optional (if browserify)
