describe('This getDay function ' , function(){
    it('should return Saturday when tested using "2022-09-24"' , function(){
        assert.equal("Saturday",getDay('2022-09-24'));

    });
    it('should return Tuesday when tested using "2016-10-11"' , function(){
        assert.equal("Tuesday",getDay('2016-10-11'));

    });

});