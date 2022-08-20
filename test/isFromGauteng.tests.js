describe('This isFromGauteng function' , function(){
    it('should return true when tested with "SMK 247 GP"' , function(){
        assert.equal(true,isFromGauteng('SMK 247 GP'));

    });
    it('should return false when tested with "OOM 115 L"' , function(){
        assert.equal(false,isFromGauteng('OOM 115 L'));

    });

});