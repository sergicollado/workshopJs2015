var Tag = function(label, link) {
    var ELEMENT_TAGNAME = 'div';

    this.getLabel = function() {
        return label;
    };

    this.render = function() {
        var element = document.createElement(ELEMENT_TAGNAME);
        var a = document.createElement('a');
        a.setAttribute('href', link);
        element.appendChild(a);

        return element;
    };
};

var TagCollection = function() {
    var ELEMENT_TAGNAME = 'ul';
    var NODE_TAGNAME = 'li';

    var dataList;
    this.setData = function(tagList) {
        dataList = tagList;
    };

    var getNode = function(tag){
        var li = document.createElement(NODE_TAGNAME);
        li.appendChild(tag.render());

        return li;
    };

    this.render = function() {
        var element = document.createElement(ELEMENT_TAGNAME);
        dataList.forEach(function(tag) {
            element.appendChild(getNode(tag));
        });

        return element;
    };
};
