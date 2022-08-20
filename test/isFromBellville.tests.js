describe('This isFromBellville function' , function(){
    it('should return true when tested with "CY 123"' , function(){
        assert.equal(true,isFromBellville('CY 123'));

    });
    it('should return false when tested with "YC 246"' , function(){
        assert.equal(false,isFromBellville('YC 246'));

    });

});

