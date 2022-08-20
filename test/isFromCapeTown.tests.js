describe('This isFromCapeTown function' , function(){
    it('should return true when testd with "CA 234"' , function(){
        assert.equal(true,isFromCapeTown('CA 246'));

    });
    it('should return false when testd with "GP 23 HF"' , function(){
        assert.equal(false,isFromCapeTown('GP 23 HF'));
        
    });

});