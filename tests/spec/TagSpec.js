describe("Tag", function() {
    var tag;
    var tagData;

    beforeEach(function() {
        tagData = {
            label: 'aLabel',
            link : 'aLink'
        };
        tag = new Tag(tagData.label, tagData.link);

    });

    it("should be able to get label from tag", function() {
        expect(tag.getLabel()).toEqual(tagData.label);
    });

    it('should render a tag ahref', function(){
        var element = tag.render();
        var a = element.getElementsByTagName('a');
        expect(a.length).toBe(1);

    });
});

describe('TagCollection',function(){

    var tagCollectionData;
    var tagInstanceList;
    var tagCollection;

    beforeEach(function() {
        tagCollectionData = [{
            label: 'aLabel',
            link : 'aLink'
        },{
            label: 'aLabel',
            link : 'aLink'
        },{
            label: 'aLabel',
            link : 'aLink'
        }];

        tagInstanceList = [
            new Tag('aLabel','aLink'),
            new Tag('anotherLabel','anotherLink')
        ];

        tagCollection = new TagCollection();

    });

    it("should render a tags collection", function() {
        tagCollection.setData(tagInstanceList);
        var renderCollection = tagCollection.render();

        console.log(renderCollection);
        expect(renderCollection.getElementsByTagName('li').length).toEqual(2);
    });



});
